async function inspectCity() {
  const res = await fetch('https://furnacerepairpros.com/arizona/anthem/');
  const html = await res.text();
  const heroMatch = html.match(/<section[^>]*class=["']hero["'][^>]*>([\s\S]*?)<\/section>/i);
  if (heroMatch) console.log('CITY HERO:\n', heroMatch[0].slice(0, 1500));

  const sec3Match = html.match(/<section[^>]*class=["']section local-intro["'][^>]*>([\s\S]*?)<\/section>/i);
  if (sec3Match) console.log('\nCITY SECTION 3:\n', sec3Match[0].slice(0, 1500));
}
inspectCity();
