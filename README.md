# ViBi · Brian Vunni — Portfolio

> A considered, single‑page graphic design portfolio with a headless CMS, built as a static HTML file.  
> Content lives in Supabase. Updates happen through an admin panel. No build step. No framework.  
> Deploy anywhere in 30 seconds.

[![Deploy to Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/vibi-portfolio)
[![Deploy to Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com/new)
[![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat-square&logo=supabase&logoColor=white)](https://supabase.com)

---

## ✦ Features

| | |
|---|---|
| **Zero framework** | A single `index.html` — CSS + vanilla JS. No React, no build tools, no bundler. |
| **Live admin panel** | Click the ⚙️, log in, and add/edit/delete projects, skills, and services without touching code. |
| **Supabase backend** | All content persisted in PostgreSQL. Instant CRUD with row‑level security. |
| **Contact form** | Messages land in the Supabase inbox and optionally forward to your email via EmailJS. |
| **Image URL or upload** | Paste an image link or upload directly — base64 or URL, both work. |
| **Project case studies** | Click any project card to open a detail modal with full description and link. |
| **Scroll reveals** | Sections fade in as you scroll — powered by Intersection Observer, zero dependencies. |
| **Responsive** | Looks right on every screen, from phone to ultrawide. |
| **Fonts** | Cormorant Garamond for headings, Inter for body, JetBrains Mono for code. |
| **Sage palette** | Custom properties drive a calm, earthy colour system. Change once, updates everywhere. |

---

## ✦ Quick start

```bash
# 1. Clone or download
git clone https://github.com/yourusername/vibi-portfolio.git
cd vibi-portfolio

# 2. Open in browser (no server needed for local dev)
open index.html

# Or serve locally
npx serve .
```

That's it. The page loads, fetches content from Supabase, and renders.

---

## ✦ Supabase setup

Create a Supabase project and run this SQL in the **SQL Editor**:

```sql
create table projects (
  id bigint generated always as identity primary key,
  created_at timestamptz default now(),
  title text not null, cat text, year text,
  description text, img text, link text
);

create table skills (
  id bigint generated always as identity primary key,
  created_at timestamptz default now(),
  name text not null, icon text, description text
);

create table services (
  id bigint generated always as identity primary key,
  created_at timestamptz default now(),
  name text not null, icon text, description text, sort_order int default 0
);

create table inbox (
  id bigint generated always as identity primary key,
  created_at timestamptz default now(),
  name text, email text, service text, message text, read boolean default false
);

-- Public access (no auth required)
alter table projects enable row level security;
alter table skills   enable row level security;
alter table services enable row level security;
alter table inbox    enable row level security;

create policy "anon all projects" on projects for all using (true) with check (true);
create policy "anon all skills"   on skills   for all using (true) with check (true);
create policy "anon all services" on services  for all using (true) with check (true);
create policy "anon all inbox"    on inbox    for all using (true) with check (true);
```

Then paste your Supabase URL and anon key at the top of the `<script>` block in `index.html`:

```javascript
const SUPABASE_URL = 'https://your-project.supabase.co';
const SUPABASE_KEY = 'your-anon-key';
```

On first load, the page seeds 8 default skills and 5 default services. Delete or edit them from the admin panel.

---

## ✦ Admin panel

| Step | Action |
|---|---|
| 1 | Click the **⚙️** button (bottom‑right corner) |
| 2 | Enter the admin password (default: set in code, changeable in Settings) |
| 3 | Manage Projects, Skills, Services, and view Inbox messages |

Tabs:

- **Projects** — Add title, category, year, description, image (URL or upload), and external link. Click a card on the site to see the detail modal.
- **Skills** — Name, icon (emoji), short description. Displayed as cards in the Skills section.
- **Services** — Name, icon, description. Displayed in the Services section.
- **Inbox** — Messages submitted through the contact form. Marked read on click.
- **Settings** — Change admin password, configure EmailJS for email notifications.

---

## ✦ Project structure

```
vibi-portfolio/
├── index.html          # The entire application — markup, styles, and logic
├── README.md           # You are here
└── .git/
```

Everything lives in a single file. Styles use CSS custom properties. The script initialises a Supabase client, fetches all data on load, caches it in memory, and re‑renders on every change.

---

## ✦ Colour system

| Variable | Value | Usage |
|---|---|---|
| `--bg` | `#F9F9F7` | Page background |
| `--ink` | `#111110` | Primary text |
| `--rose` | `#7A9E7A` | Accent (sage green) — links, hover states, labels |
| `--grey` | `#6B6B69` | Secondary text, meta |
| `--border` | `#E2E0DB` | Borders, dividers, scroll hints |
| `--white` | `#FFFFFF` | Card backgrounds, modal surfaces |
| `--display` | Cormorant Garamond | Headings, hero, display text |
| `--body` | Inter | Body copy, UI text |
| `--mono` | JetBrains Mono | Code, labels, dates |

---

## ✦ Design decisions

**Why a single HTML file?**  
No build step means instant deployment. Edit one file, push, done. Perfect for a personal portfolio that doesn't need a framework.

**Why Supabase over a file‑based CMS?**  
Content survives redeploys, works across devices, and the admin panel gives the owner full control without touching code. The anon key is safe behind RLS policies.

**Why base64 image upload AND a URL field?**  
URLs are lightweight and fast. Uploads are convenient for quick edits. The URL always takes priority.

**Why no router / SPA?**  
Single‑page portfolios don't need routing. The project detail modal avoids page navigation and keeps the experience seamless.

---

## ✦ Deployment

The file is fully self‑contained. Deploy to any static host:

```bash
# Netlify — drag index.html into Netlify Drop, or
npx netlify deploy --prod --dir=.

# Vercel
npx vercel --prod

# GitHub Pages — push to a repo, enable Pages from the root
```

No server‑side configuration needed. The Supabase client runs in the browser.

---

## ✦ Tech

<p>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=flat-square&logo=supabase&logoColor=white" />
  <img src="https://img.shields.io/badge/EmailJS-FF6B6B?style=flat-square&logo=gmail&logoColor=white" />
  <img src="https://img.shields.io/badge/Google_Fonts-4285F4?style=flat-square&logo=googlefonts&logoColor=white" />
</p>

- **Supabase JS v2** — PostgreSQL client, runs in the browser via UMD bundle
- **EmailJS** — Forwards contact form submissions to your inbox
- **Intersection Observer** — Performant scroll‑triggered animations
- **CSS Custom Properties** — Centralised theme, change one value and the whole site updates

---

## ✦ Licence

MIT — free to use, modify, and share.

---

<p align="center">
  <sub>Built with intent by <a href="https://vibi.vercel.app">Brian Vunni</a></sub>
  <br>
  <sub>Powered by coffee, curiosity, and Supabase</sub>
</p>
