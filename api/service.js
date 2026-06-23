const SUPABASE_URL = 'https://zzxzejaadftxlxbrrokq.supabase.co';
const SUPABASE_KEY = 'sb_publishable_FnCeVt2d8VN5o02pGIEoAg_YjL9eygs';

function slugify(text) {
  if (!text) return '';
  return text.toString().toLowerCase().trim()
    .replace(/&/g, '-and-')
    .replace(/[\s]+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

function htmlPage(title, description, content) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${title} | VIBI Design</title>
<meta name="description" content="${description}" />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://vibi-design.vercel.app${content.url}" />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://vibi-design.vercel.app${content.url}" />
<meta property="og:title" content="${title} | VIBI Design" />
<meta property="og:description" content="${description}" />
<meta property="og:image" content="https://vibi-design.vercel.app/og-image.png" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${title} | VIBI Design" />
<meta name="twitter:description" content="${description}" />
<meta name="twitter:image" content="https://vibi-design.vercel.app/og-image.png" />
<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🎨</text></svg>" />
<style>
  body { font-family: system-ui, -apple-system, sans-serif; max-width: 720px; margin: 0 auto; padding: 2rem 1.5rem; color: #111; line-height: 1.6; background: #F9F9F7; }
  h1 { font-family: Georgia, serif; font-size: 2.2rem; font-weight: 300; line-height: 1.2; margin-bottom: 0.5rem; }
  .icon { font-size: 3rem; margin-bottom: 0.5rem; }
  .cat { font-family: monospace; font-size: 0.8rem; color: #7A9E7A; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.5rem; }
  .desc { color: #555; font-size: 1.05rem; line-height: 1.7; margin-bottom: 2rem; }
  .back { display: inline-block; margin-top: 2rem; color: #7A9E7A; text-decoration: none; font-size: 0.9rem; }
  a { color: #7A9E7A; }
  .footer { margin-top: 3rem; padding-top: 1.5rem; border-top: 1px solid #E2E0DB; font-size: 0.8rem; color: #999; }
</style>
</head>
<body>
  <a href="https://vibi-design.vercel.app/" style="color:#999;text-decoration:none;font-size:0.85rem;margin-bottom:2rem;display:inline-block;">← Back to VIBI Design</a>
  ${content.body}
  <div class="footer">
    <p>VIBI Design by Brian Vunni — Kampala, Uganda</p>
  </div>
</body>
</html>`;
}

async function fetchService(slug) {
  const url = `${SUPABASE_URL}/rest/v1/services?select=name,slug,icon,description,seo_title,meta_description&order=created_at.desc`;
  const res = await fetch(url, { headers: { apikey: SUPABASE_KEY } });
  const services = await res.json();
  return services.find(s => (s.slug || slugify(s.name)) === slug) || null;
}

export default async function handler(req, res) {
  const slug = req.query.slug;
  if (!slug) {
    return res.status(404).send('Not found');
  }

  const s = await fetchService(slug);
  if (!s) {
    return res.status(404).send('Service not found');
  }

  const title = s.seo_title || s.name;
  const desc = s.meta_description || s.description || 'A service by VIBI Design';

  const body = `
    <div class="icon">${s.icon || '✦'}</div>
    <div class="cat">Service</div>
    <h1>${title}</h1>
    ${s.description ? `<div class="desc">${s.description}</div>` : ''}
    <a href="https://vibi-design.vercel.app/#contact">Inquire about this service →</a>
  `;

  const content = { url: '/services/' + slug, body };
  const html = htmlPage(title, desc, content);

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=600');
  return res.status(200).send(html);
}
