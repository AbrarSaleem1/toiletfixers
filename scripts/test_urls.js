const urls = [
  'http://localhost:3000/',
  'http://localhost:3000/services/',
  'http://localhost:3000/services/clogged-toilet-repair/',
  'http://localhost:3000/services/emergency-toilet-repair/',
  'http://localhost:3000/states/arizona/',
  'http://localhost:3000/states/texas/',
  'http://localhost:3000/arizona/anthem/',
  'http://localhost:3000/arizona/avondale/',
  'http://localhost:3000/texas/dallas/',
  'http://localhost:3000/about/',
  'http://localhost:3000/contact/',
  'http://localhost:3000/privacy-policy/',
  'http://localhost:3000/terms-of-service/',
  'http://localhost:3000/robots.txt',
  'http://localhost:3000/sitemap.xml'
];

async function check() {
  for (const url of urls) {
    try {
      const res = await fetch(url);
      const text = await res.text();
      const h1Match = text.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
      const h1 = h1Match ? h1Match[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim() : 'NO H1';
      console.log(`[${res.status}] ${url} -> H1: ${h1.slice(0, 65)}`);
    } catch (e) {
      console.error(`FAILED: ${url}`, e.message);
    }
  }
}
check();
