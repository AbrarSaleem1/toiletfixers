async function checkAboutContact() {
  const r1 = await fetch('https://furnacerepairpros.com/about/');
  const html1 = await r1.text();
  const s1 = html1.match(/<section[^>]*class=["']([^"']+)["']/gi);
  console.log('About sections:', s1);

  const r2 = await fetch('https://furnacerepairpros.com/contact/');
  const html2 = await r2.text();
  const s2 = html2.match(/<section[^>]*class=["']([^"']+)["']/gi);
  console.log('Contact sections:', s2);
}
checkAboutContact();
