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
<html lang="en-UG">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="theme-color" content="#F9F9F7" />
<meta name="robots" content="index, follow" />
<title>${title} | Vibi</title>
<meta name="description" content="${description}" />
<link rel="canonical" href="https://vibi-design.vercel.app${content.url}" />
<link rel="alternate" hreflang="en-UG" href="https://vibi-design.vercel.app${content.url}" />
<link rel="alternate" hreflang="x-default" href="https://vibi-design.vercel.app${content.url}" />
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-GQ795B3WBE"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-GQ795B3WBE');
</script>
<meta property="og:type" content="website" />
<meta property="og:url" content="https://vibi-design.vercel.app${content.url}" />
<meta property="og:title" content="${title} | Vibi" />
<meta property="og:description" content="${description}" />
<meta property="og:image" content="https://vibi-design.vercel.app/og-image.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="${title} — Vibi Project" />
<meta property="og:image:type" content="image/png" />
<meta property="og:site_name" content="Vibi" />
<meta property="og:locale" content="en_UG" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${title} | Vibi" />
<meta name="twitter:description" content="${description}" />
<meta name="twitter:image" content="https://vibi-design.vercel.app/og-image.png" />
<meta name="twitter:image:alt" content="${title} — Vibi Project" />
<link rel="icon" type="image/png" href="https://vibi-design.vercel.app/favicon.png" />
<link rel="apple-touch-icon" href="https://vibi-design.vercel.app/favicon.png" />
<style>
  body { font-family: system-ui, -apple-system, sans-serif; max-width: 720px; margin: 0 auto; padding: 2rem 1.5rem; color: #111; line-height: 1.6; background: #F9F9F7; }
  img { max-width: 100%; border-radius: 12px; margin-bottom: 1.5rem; }
  h1 { font-family: Georgia, serif; font-size: 2.2rem; font-weight: 300; line-height: 1.2; margin-bottom: 0.5rem; }
  .cat { font-family: monospace; font-size: 0.8rem; color: #7A9E7A; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.5rem; }
  .desc { color: #555; font-size: 1.05rem; line-height: 1.7; margin-bottom: 2rem; }
  .back { display: inline-block; margin-top: 2rem; color: #7A9E7A; text-decoration: none; font-size: 0.9rem; }
  .back:hover { text-decoration: underline; }
  a { color: #7A9E7A; }
  .footer { margin-top: 3rem; padding-top: 1.5rem; border-top: 1px solid #E2E0DB; font-size: 0.8rem; color: #999; }
</style>
</head>
<body>
  <a href="https://vibi-design.vercel.app/" style="color:#999;text-decoration:none;font-size:0.85rem;margin-bottom:2rem;display:inline-block;">← Back to Vibi</a>
  ${content.body}
  <div class="footer">
    <p>Vibi by Brian Vunni — Kampala, Uganda</p>
  </div>
</body>
</html>`;
}

async function fetchProject(slug) {
  const url = `${SUPABASE_URL}/rest/v1/projects?select=title,slug,cat,year,description,img,img_alt,link,seo_title,meta_description&order=created_at.desc`;
  const res = await fetch(url, { headers: { apikey: SUPABASE_KEY } });
  const projects = await res.json();
  return projects.find(p => (p.slug || slugify(p.title)) === slug) || null;
}

export default async function handler(req, res) {
  const slug = req.query.slug;
  if (!slug) {
    return res.status(404).send('Not found');
  }

  const p = await fetchProject(slug);
  if (!p) {
    return res.status(404).send('Project not found');
  }

  const title = p.seo_title || p.title;
  const desc = p.meta_description || p.description || 'A project by Vibi';
  const hasImg = p.img && (p.img.startsWith('http') || p.img.startsWith('data:'));

  const body = `
    ${hasImg ? `<img src="${p.img}" alt="${p.img_alt || p.title}" />` : ''}
    <div class="cat">${p.cat || ''}${p.year ? ' · ' + p.year : ''}</div>
    <h1>${title}</h1>
    ${p.description ? `<div class="desc">${p.description}</div>` : ''}
    ${p.link ? `<a href="${p.link}" target="_blank" rel="noopener">View Project →</a>` : ''}
  `;

  const content = { url: '/projects/' + slug, body };
  const html = htmlPage(title, desc, content);

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=600');
  return res.status(200).send(html);
}
