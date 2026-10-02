const fs = require('fs');
const path = require('path');

function removeFilesWithExt(dir, exts, prefixes) {
  let removedCount = 0;
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      removedCount += removeFilesWithExt(fullPath, exts, prefixes);
    } else {
      const ext = path.extname(entry.name);
      const isExtMatch = exts.includes(ext);
      const isPrefixMatch = prefixes.some(p => entry.name.startsWith(p));
      if (isExtMatch || isPrefixMatch) {
        fs.unlinkSync(fullPath);
        removedCount++;
      }
    }
  }
  return removedCount;
}

function countTotalFiles(dir) {
  let count = 0;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      count += countTotalFiles(fullPath);
    } else {
      count++;
    }
  }
  return count;
}

if (fs.existsSync('out')) {
  console.log('Cleaning extra RSC payload and debug files from out directory...');
  const removed = removeFilesWithExt('out', ['.txt'], ['__next.']);
  console.log(`Removed ${removed} auxiliary payload files.`);
  const remaining = countTotalFiles('out');
  console.log(`Total remaining files in out directory: ${remaining}`);
  console.log(`Status for Cloudflare Pages 20,000 limit: ${remaining < 20000 ? '✅ PASSED (Strictly under 20k limit!)' : '❌ FAILED'}`);
}
