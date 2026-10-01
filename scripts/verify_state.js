async function verifyState() {
  const r = await fetch('http://localhost:3000/states/montana');
  const html = await r.text();
  console.log('Status:', r.status);
  console.log('Has hero:', html.includes('class="hero"'));
  console.log('Has feature-strip:', html.includes('class="feature-strip"'));
  console.log('Has city-chips:', html.includes('class="city-chips"'));
  console.log('Has process-section:', html.includes('class="section process-section"'));
  console.log('Has cta-section:', html.includes('class="cta-section"'));
}
verifyState();
