async function getCSS() {
  const res = await fetch('https://furnacerepairpros.com/');
  const html = await res.text();
  const nextCss = html.match(/href="(\/_next\/static\/css\/[^"]+)"/);
  if (nextCss) {
    const cssRes = await fetch('https://furnacerepairpros.com' + nextCss[1]);
    const cssText = await cssRes.text();
    ['hero-card-frame', 'hero-main-img', 'service-card-image', 'service-card'].forEach(sel => {
      const idx = cssText.indexOf(sel);
      if (idx !== -1) {
        console.log('--- ' + sel + ' ---');
        console.log(cssText.slice(Math.max(0, idx - 20), idx + 250));
      }
    });
  }
}
getCSS();
