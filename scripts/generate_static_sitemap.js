const fs = require('fs');
const states = require('../data/states.json');
const citiesByState = require('../data/citiesByState.json');
const { SERVICES } = require('../lib/services');

const baseUrl = 'https://toiletfixers.us';
const today = new Date().toISOString().split('T')[0];

const chunks = [];
chunks.push('<?xml version="1.0" encoding="UTF-8"?>\n');
chunks.push('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n');

const staticRoutes = [
  { url: `${baseUrl}/`, changefreq: 'weekly', priority: '1.0' },
  { url: `${baseUrl}/services/`, changefreq: 'weekly', priority: '0.9' },
  { url: `${baseUrl}/about/`, changefreq: 'monthly', priority: '0.8' },
  { url: `${baseUrl}/contact/`, changefreq: 'monthly', priority: '0.8' },
  { url: `${baseUrl}/privacy-policy/`, changefreq: 'yearly', priority: '0.3' },
  { url: `${baseUrl}/terms-of-service/`, changefreq: 'yearly', priority: '0.3' }
];

for (const r of staticRoutes) {
  chunks.push(`  <url>\n    <loc>${r.url}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${r.changefreq}</changefreq>\n    <priority>${r.priority}</priority>\n  </url>\n`);
}

for (const s of SERVICES) {
  chunks.push(`  <url>\n    <loc>${baseUrl}/services/${s.slug}/</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.9</priority>\n  </url>\n`);
}

for (const [stSlug] of Object.entries(states)) {
  chunks.push(`  <url>\n    <loc>${baseUrl}/states/${stSlug}/</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`);
}

let cityCount = 0;
for (const [stateSlug, cities] of Object.entries(citiesByState)) {
  for (const citySlug of cities) {
    cityCount++;
    chunks.push(`  <url>\n    <loc>${baseUrl}/${stateSlug}/${citySlug}/</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`);
  }
}

chunks.push('</urlset>\n');

fs.writeFileSync('public/sitemap.xml', chunks.join(''), 'utf8');

const totalUrls = 6 + SERVICES.length + Object.keys(states).length + cityCount;
console.log('Successfully generated public/sitemap.xml');
console.log('Total URLs in sitemap:', totalUrls);
console.log('File size (MB):', (fs.statSync('public/sitemap.xml').size / 1024 / 1024).toFixed(2));
