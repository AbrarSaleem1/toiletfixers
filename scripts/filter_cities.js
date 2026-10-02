const fs = require('fs');
const readline = require('readline');
const { execSync } = require('child_process');
const states = require('../data/states.json');
const { SERVICES } = require('../lib/services');

const stateCodeToSlug = {};
const stateNameToSlug = {};
for (const [slug, data] of Object.entries(states)) {
  stateCodeToSlug[data.code.toUpperCase()] = slug;
  stateNameToSlug[data.name.toLowerCase()] = slug;
}

function parseCSVLine(text) {
  const result = [];
  let cur = '';
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (c === '"') {
      inQuotes = !inQuotes;
    } else if (c === ',' && !inQuotes) {
      result.push(cur);
      cur = '';
    } else {
      cur += c;
    }
  }
  result.push(cur);
  return result;
}

function cleanSlug(str) {
  if (!str) return '';
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/['’.]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

async function main() {
  const csvPath = 'scripts/uscities_30k.csv';
  if (!fs.existsSync(csvPath)) {
    console.error(`CSV file not found at ${csvPath}`);
    process.exit(1);
  }

  // Load original 30,909 cities from git commit e38b850
  console.log('Fetching original 30,909 cities from git commit e38b850...');
  const originalJsonStr = execSync('git show e38b850:data/citiesByState.json', { maxBuffer: 20 * 1024 * 1024 }).toString();
  const originalCitiesByState = JSON.parse(originalJsonStr);

  const rl = readline.createInterface({
    input: fs.createReadStream(csvPath),
    crlfDelay: Infinity
  });

  let header = null;
  const popLookup = new Map();

  for await (const line of rl) {
    if (!header) {
      header = parseCSVLine(line);
      continue;
    }
    const cols = parseCSVLine(line);
    const city = cols[0];
    const cityAscii = cols[1];
    const stateId = cols[2];
    const stateName = cols[3];
    const popIdx = header.indexOf('population');
    const pop = parseFloat(cols[popIdx]) || 0;

    const stateSlug = stateCodeToSlug[stateId ? stateId.toUpperCase() : ''] || stateNameToSlug[stateName ? stateName.toLowerCase() : ''];
    if (!stateSlug) continue;

    const variations = [
      cleanSlug(city),
      cleanSlug(cityAscii),
      cleanSlug(city.replace(/^Saint\b/i, 'St')),
      cleanSlug(city.replace(/^St\.?\b/i, 'Saint')),
      cleanSlug(city.replace(/ñ/g, 'n')),
      cleanSlug(city.replace(/ñ/g, '')),
      cleanSlug(cityAscii.replace(/n/g, '')),
    ];

    for (const v of variations) {
      if (!v) continue;
      const k = `${stateSlug}:${v}`;
      popLookup.set(k, Math.max(popLookup.get(k) || 0, pop));
    }
  }

  const allCities = [];
  for (const [stateSlug, cList] of Object.entries(originalCitiesByState)) {
    for (const citySlug of cList) {
      const key = `${stateSlug}:${citySlug}`;
      let pop = popLookup.get(key);
      if (pop === undefined) {
        const v1 = cleanSlug(citySlug);
        const v2 = cleanSlug(citySlug.replace(/^saint\b/i, 'st'));
        const v3 = cleanSlug(citySlug.replace(/^st\b/i, 'saint'));
        pop = popLookup.get(`${stateSlug}:${v1}`) ??
              popLookup.get(`${stateSlug}:${v2}`) ??
              popLookup.get(`${stateSlug}:${v3}`) ?? 0;
      }
      allCities.push({ stateSlug, citySlug, pop });
    }
  }

  // Sort descending by population
  allCities.sort((a, b) => {
    if (b.pop !== a.pop) return b.pop - a.pop;
    if (a.stateSlug !== b.stateSlug) return a.stateSlug.localeCompare(b.stateSlug);
    return a.citySlug.localeCompare(b.citySlug);
  });

  // Target cities: 9,600
  // Each city page generates:
  // 1 index.html + 1 [city].rsc = 2 files
  // 9,600 * 2 = 19,200 files
  // Non-city pages (~65 routes * 2 = ~130 files)
  // Assets (images, css, js chunks) = ~70 files
  // Total in out folder: ~19,400 files (strictly < 20,000 Cloudflare Pages limit)
  const targetCount = 9600;
  const keptCities = allCities.slice(0, targetCount);
  const removedCities = allCities.slice(targetCount);

  console.log(`Original cities count: ${allCities.length}`);
  console.log(`Cities kept: ${keptCities.length}`);
  console.log(`Cities removed: ${removedCities.length}`);
  console.log(`Cutoff population at rank ${targetCount}: ${keptCities[keptCities.length - 1].pop} (${keptCities[keptCities.length - 1].citySlug}, ${keptCities[keptCities.length - 1].stateSlug})`);
  console.log(`First excluded population: ${removedCities[0].pop} (${removedCities[0].citySlug}, ${removedCities[0].stateSlug})`);

  // Group kept cities by state and sort alphabetically within each state
  const newCitiesByState = {};
  for (const stateSlug of Object.keys(states)) {
    newCitiesByState[stateSlug] = [];
  }

  for (const c of keptCities) {
    newCitiesByState[c.stateSlug].push(c.citySlug);
  }

  for (const stateSlug of Object.keys(newCitiesByState)) {
    newCitiesByState[stateSlug].sort((a, b) => a.localeCompare(b));
  }

  // Verification
  let verifiedTotal = 0;
  for (const stateSlug of Object.keys(newCitiesByState)) {
    verifiedTotal += newCitiesByState[stateSlug].length;
  }
  console.log(`Verified total kept in new object: ${verifiedTotal}`);
  console.log(`Total URLs in sitemap will be: ${verifiedTotal + 6 + SERVICES.length + Object.keys(states).length}`);

  fs.writeFileSync('data/citiesByState.json', JSON.stringify(newCitiesByState, null, 2));
  console.log('Successfully wrote updated data/citiesByState.json for 20k Cloudflare Pages limit');
}

main().catch(console.error);
