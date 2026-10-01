const urls = [
  'http://localhost:3000/',
  'http://localhost:3000/states/montana/',
  'http://localhost:3000/states/arizona/',
  'http://localhost:3000/arizona/anthem/',
  'http://localhost:3000/montana/alder/',
  'http://localhost:3000/services/',
  'http://localhost:3000/services/clogged-toilet-repair/',
  'http://localhost:3000/about/',
  'http://localhost:3000/contact/',
  'http://localhost:3000/privacy-policy/',
  'http://localhost:3000/terms-of-service/'
];

async function check() {
  for (const url of urls) {
    const res = await fetch(url);
    const html = await res.text();
    const hasHero = html.includes('class="hero"') || html.includes('class="page-header"');
    console.log(`[${res.status}] ${url} -> Themed Header: ${hasHero}`);
  }
}
check();
