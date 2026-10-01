async function checkBreadcrumb() {
  const res = await fetch('https://furnacerepairpros.com/states/montana/');
  const html = await res.text();
  const bcMatch = html.match(/<nav[^>]*aria-label=["']Breadcrumb["'][^>]*>[\s\S]*?<\/nav>/i) || html.match(/class=["'][^"']*breadcrumb[^"']*["'][^>]*>[\s\S]*?<\/[a-z]+>/i);
  console.log('BREADCRUMB IN MONTANA:\n', bcMatch ? bcMatch[0] : 'None found');
}
checkBreadcrumb();
