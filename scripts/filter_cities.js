const fs = require('fs');
const readline = require('readline');
const citiesByState = require('../data/citiesByState.json');
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
  for (const [stateSlug, cList] of Object.entries(citiesByState)) {
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

  // Sort by population descending; deterministic secondary sort by stateSlug, then citySlug
  allCities.sort((a, b) => {
    if (b.pop !== a.pop) return b.pop - a.pop;
    if (a.stateSlug !== b.stateSlug) return a.stateSlug.localeCompare(b.stateSlug);
    return a.citySlug.localeCompare(b.citySlug);
  });

  // Calculate target:
  // Static routes = 6
  // Services = SERVICES.length (8)
  // States = Object.keys(states).length (51)
  // Non-city routes = 6 + 8 + 51 = 65
  // Target total pages = 19,000
  // Target cities = 19,000 - 65 = 18,935 cities
  const nonCityRoutes = 6 + SERVICES.length + Object.keys(states).length;
  const targetTotalPages = 19000;
  const targetCitiesCount = targetTotalPages - nonCityRoutes; // 18935

  const keptCities = allCities.slice(0, targetCitiesCount);
  const removedCities = allCities.slice(targetCitiesCount);

  console.log(`Original cities count: ${allCities.length}`);
  console.log(`Target total website pages: ${targetTotalPages}`);
  console.log(`Non-city pages (static + services + states): ${nonCityRoutes}`);
  console.log(`Cities kept: ${keptCities.length}`);
  console.log(`Cities removed: ${removedCities.length}`);
  console.log(`Lowest population kept: ${keptCities[keptCities.length - 1].pop} (${keptCities[keptCities.length - 1].citySlug}, ${keptCities[keptCities.length - 1].stateSlug})`);
  console.log(`Highest population removed: ${removedCities[0].pop} (${removedCities[0].citySlug}, ${removedCities[0].stateSlug})`);

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
  console.log(`Total URLs in sitemap will be: ${verifiedTotal + nonCityRoutes}`);

  // Write new citiesByState.json
  fs.writeFileSync('data/citiesByState.json', JSON.stringify(newCitiesByState, null, 2));
  console.log('Successfully wrote updated data/citiesByState.json');
}

main().catch(console.error);
