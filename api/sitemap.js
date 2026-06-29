const SUPABASE_URL = 'https://zzxzejaadftxlxbrrokq.supabase.co';
const SUPABASE_KEY = 'sb_publishable_FnCeVt2d8VN5o02pGIEoAg_YjL9eygs';
const SITE = 'https://vibi-design.vercel.app';
const GA_ID = 'G-GQ795B3WBE';

function escapeXml(str) {
  return (str || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

async function fetchAll(table, select) {
  const url = `${SUPABASE_URL}/rest/v1/${table}?select=${encodeURIComponent(select)}&order=created_at.desc`;
  const res = await fetch(url, { headers: { apikey: SUPABASE_KEY } });
  if (!res.ok) return [];
  return res.json();
}

export default async function handler(req, res) {
  const [projects, services] = await Promise.all([
    fetchAll('projects', 'slug,title,updated_at'),
    fetchAll('services', 'slug,name,updated_at'),
  ]);

  const today = new Date().toISOString().slice(0, 10);

  let urls = `
  <url>
    <loc>${SITE}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>`;

  for (const p of projects) {
    const slug = p.slug || slugify(p.title);
    const mod = p.updated_at ? p.updated_at.slice(0, 10) : today;
    urls += `
  <url>
    <loc>${SITE}/projects/${escapeXml(slug)}</loc>
    <lastmod>${mod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
  }

  for (const s of services) {
    const slug = s.slug || slugify(s.name);
    const mod = s.updated_at ? s.updated_at.slice(0, 10) : today;
    urls += `
  <url>
    <loc>${SITE}/services/${escapeXml(slug)}</loc>
    <lastmod>${mod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`;

  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=600');
  return res.status(200).send(xml);
}

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
