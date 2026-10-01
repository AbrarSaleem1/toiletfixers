async function inspectHero() {
  const res = await fetch('https://furnacerepairpros.com/');
  const html = await res.text();
  const heroMediaIdx = html.indexOf('hero-media');
  if (heroMediaIdx !== -1) {
    const start = heroMediaIdx - 50;
    const end = heroMediaIdx + 800;
    console.log('HERO MEDIA HTML:\n', html.slice(start, end));
  }
}
inspectHero();
