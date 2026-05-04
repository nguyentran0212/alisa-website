# Alisa Play Therapy — Site Documentation

## Project Overview

A single-page Jekyll landing site for a play therapy practice. Designed to be edited by non-technical users via Markdown — no HTML or CSS knowledge required for content changes. Hosted on GitHub Pages at `https://nk-tran.com/alisa-website/`, with a custom domain at `alisaplaytherapy.com` planned.

## Tech Stack

- **Jekyll 4** — static site generator, GitHub Pages-native (zero-config deploys)
- **Plain CSS** — single `style.css` file, no framework, no build step
- **Vanilla JavaScript** — single `main.js`, no dependencies
- **Markdown** — all site content written in Markdown (`.md` files), not HTML
- **Formspree** — form handling via third-party endpoint (configurable)
- **Netlify Forms** — alternative form handler if hosting on Netlify

## File Structure

```
├── _config.yml              # ⚠️  MAIN CONFIG — all editable variables live here
├── _data/
│   ├── en.yml                # English UI strings (nav, buttons, section headers)
│   └── zh.yml               # Chinese UI strings (nav, buttons, section headers)
├── _layouts/
│   ├── default.html          # Base HTML layout (nav, footer, head tags)
│   └── post.html             # Blog post layout (extends default)
├── _includes/
│   ├── header.html          # Sticky nav bar — DO NOT edit directly
│   └── footer.html          # Footer — copyright and privacy link
├── index.md                 # ⚠️  MAIN CONTENT — all section text goes here
├── about.md                 # About page content
├── privacy.md               # Privacy policy page
├── zh/
│   ├── index.md             # Chinese home page
│   ├── about.md             # Chinese about page
│   ├── privacy.md           # Chinese privacy policy
│   └── blog/
│       └── index.md         # Chinese blog listing page
├── blog/
│   └── index.md             # Blog listing page (English)
├── _posts/                  # Blog posts (YYYY-MM-DD-title.md)
├── assets/
│   ├── css/style.css       # All styles — rarely need to edit directly
│   ├── js/main.js           # JS for nav, scroll effects, form handling
│   └── images/
│       ├── logo_horizontal.png  # Nav bar logo (horizontal wordmark)
│       ├── logo_vertical.png    # Hero section logo (square/vertical mark)
│       └── hero.jpg            # Hero background image
└── SPEC.md                  # Design and architecture decisions
```

## Dev Setup

```bash
cd /path/to/alisa-website
bundle exec jekyll serve --port 4000 --host 127.0.0.1
# Site runs at http://localhost:4000/alisa-website/
```

Note: with `baseurl: "/alisa-website"` in `_config.yml`, the dev URL always includes `/alisa-website/`.

To deploy: push to the `main` branch — GitHub Pages builds and deploys automatically.

## Config Variables (`_config.yml`)

**⚠️  These are the only values that need changing to configure the site.**

```yaml
title: "Alisa Play Therapy"           # Browser tab title
description: "..."                     # Meta description (SEO)
baseurl: "/alisa-website"             # Sub-path — CHANGE to "" for root domain
url: ""                                # Canonical URL (empty for now)
google_fonts: "Lora:wght@..."         # Font specification
formspree_url: ""                      # Formspree endpoint (from formspree.io)
contact_email: "hello@..."            # Shown in contact section + footer
contact_phone: "+1234567890"           # Shown in contact section
contact_location: "[area served]"       # Shown in contact section
hero_image: "/assets/images/hero.jpg"  # Hero background (local path or Unsplash URL)
```

### baseurl Guide

- Dev (local): `baseurl: "/alisa-website"` → `localhost:4000/alisa-website/`
- GitHub Pages at subdirectory: `baseurl: "/alisa-website"` (current)
- Custom domain (alisaplaytherapy.com): `baseurl: ""`

## Content Editing Guide

### Where to Edit What

| Content | File | Notes |
|---|---|---|
| Home page (EN) | `index.md` | All main page content |
| Home page (中文) | `zh/index.md` | Full Chinese translation |
| About page (EN) | `about.md` | Separate page for extended bio |
| About page (中文) | `zh/about.md` | Chinese translation |
| Privacy policy (EN) | `privacy.md` | |
| Privacy policy (中文) | `zh/privacy.md` | |
| Nav logo | Replace `assets/images/logo_horizontal.png` | Same filename + dimensions |
| Hero logo | Replace `assets/images/logo_vertical.png` | Same filename + dimensions |
| Hero background | Change `hero_image` in `_config.yml` | Local file or Unsplash URL |
| All contact info | Change `_config.yml` vars | Updates entire site automatically |
| Form handler | Change `formspree_url` in `_config.yml` | From formspree.io dashboard |
| Nav labels, buttons, section headers | `_data/en.yml` + `_data/zh.yml` | Always edit both files |
| Blog posts (English) | `_posts/YYYY-MM-DD-slug.md` | Use `lang: en` in front matter |
| Blog posts (中文) | `_posts/YYYY-MM-DD-slug-zh.md` | Use `lang: zh` + `permalink: /zh/blog/[slug]/` |

### Section IDs (for nav anchors)

These IDs in `index.md` must match the nav links in `header.html`:

- `#what-is-play-therapy` — What is Play Therapy section
- `#is-it-right` — Is It Right for My Child section (FAQ accordion)
- `#services` — Services section
- `#about` — About section (on home page)
- `#contact` — Contact section

### Writing New Content

Use standard Markdown. Example:

```markdown
## My Section Title

Regular paragraph text.

- Bullet point
- Another bullet

<details class="faq-item">
  <summary class="faq-question">Question here</summary>
  <div class="faq-answer">
    <p>Answer text here.</p>
  </div>
</details>
```

## Nav Links

Nav links are data-driven from `_data/en.yml` / `_data/zh.yml`. **Do not hardcode nav labels in `_includes/header.html`** — edit the `nav.*` keys in the data files instead. The header template selects the correct language automatically based on `page.lang`.

If adding a new section to the home page:
1. Add a corresponding `nav.*` key to both `_data/en.yml` and `_data/zh.yml`
2. Add the link in `_includes/header.html` using the data variable (it will auto-select the right language)

## Form Handling

The contact form uses Formspree. To activate:
1. Sign up at [formspree.io](https://formspree.io) (free tier: 50 submissions/month)
2. Create a form → copy the endpoint URL
3. Paste it as `formspree_url` in `_config.yml`
4. Enable reCAPTCHA in Formspree dashboard to block bots

If Formspree fails, the form shows an error message with a `mailto:` fallback link.

## Deployment

1. Push to GitHub repo (`main` branch)
2. GitHub Pages automatically builds and deploys
3. For `nk-tran.com/alisa-website/` — already configured
4. For `alisaplaytherapy.com` — update DNS A/AAAA records + CNAME in GitHub Pages settings, then set `baseurl: ""` in `_config.yml`

## Adding New Pages (Both Languages)

Create two files — one English, one Chinese:

```markdown
# English: page-name.md
---
layout: default
title: "Page Title"
description: "Description for SEO"
---

<section id="page-id" class="section">
  <div class="container">
    <div class="reveal">
      Your content here
    </div>
  </div>
</section>
```

```markdown
# Chinese: zh/page-name.md
---
layout: default
title: "页面标题"
description: "SEO描述"
lang: zh
---

<section id="page-id" class="section">
  <div class="container">
    <div class="reveal">
      您的中文内容
    </div>
  </div>
</section>
```

Then add nav links to `_includes/header.html` in both the English and Chinese branches.

## Localization (i18n)

The site supports English and Chinese. There are two types of content:

### 1. UI Strings (`_data/en.yml` and `_data/zh.yml`)

Short, reused strings — nav labels, buttons, section headers, form labels — live in the `_data/` YAML files. **When adding or modifying UI strings, always edit both files.**

The structure of both files is identical. Keys are shared; only values differ. Current top-level keys:

- `nav.*` — navigation labels
- `buttons.*` — button text
- `footer.*` — footer privacy link and copyright line
- `hero.*` — hero title, subtitle, CTA buttons
- `sections.*` — per-section eyebrow, title, lead text
- `form.*` — form field labels and placeholder
- `blog.*` — blog section labels

### 2. Page Content (`index.md`, `zh/index.md`, etc.)

Long-form body content lives directly in the `.md` files. **Every content file has a Chinese counterpart in `zh/`** — same structure, translated content.

**Files that need editing in both languages:**

| English file | Chinese file | Notes |
|---|---|---|
| `index.md` | `zh/index.md` | Home page sections |
| `about.md` | `zh/about.md` | Full bio page |
| `privacy.md` | `zh/privacy.md` | Privacy policy |
| `blog/index.md` | `zh/blog/index.md` | Blog listing (each lists posts in that language) |

**To add a new UI string (e.g., a new section eyebrow):**
1. Add the key to `_data/en.yml` under the appropriate section
2. Add the same key with the Chinese value to `_data/zh.yml`
3. Reference it in templates with `{{ site.data.en.section.key }}` / `{{ site.data.zh.section.key }}`

**To update nav labels:** Edit `nav.*` in both `_data/en.yml` and `_data/zh.yml`. The header template automatically uses the correct language based on `page.lang`.

**Language toggle:** The EN/中文 toggle is in `_includes/header.html`. It switches between `site.baseurl}/` (English) and `{{ site.baseurl }}/zh/` (Chinese). Do not move or restructure it — it relies on CSS `position: absolute` for desktop viewport alignment.

### Home Page Featured Blog Section

The "From the Blog" section on the home page is powered by Jekyll's `site.posts` with `featured: true` + `lang` filters. Only posts matching the page's language are shown:
- English home: `| where: "lang", "en"`
- Chinese home: `| where: "lang", "zh"`

Blog section labels are pulled from `_data/en.yml` / `_data/zh.yml` (already i18n).

## Blog

### File Structure

```
_posts/YYYY-MM-DD-slug.md       # Blog post source files (English)
_posts/YYYY-MM-DD-slug-zh.md    # Chinese blog posts (same folder, different lang)
blog/index.md                   # English blog listing at /blog/
zh/blog/index.md                # Chinese blog listing at /zh/blog/
_layouts/post.html              # Individual post layout (shared by both languages)
```

### Writing a Blog Post

Create a file in `_posts/` with the naming convention `YYYY-MM-DD-slug.md`.

**English post:**
```markdown
---
layout: post
title: "Post Title Here"
date: 2026-05-01
lang: en
excerpt: "A short description for previews and SEO."
featured: true
featured_order: 1
tags:
  - play-therapy
---

Post body content in Markdown...
```

**Chinese post:**
```markdown
---
layout: post
title: "中文标题"
date: 2026-05-10
lang: zh
permalink: /zh/blog/slug/
excerpt: "中文摘要。"
featured: true
featured_order: 2
tags:
  - play-therapy
---

中文正文内容...
```

**Front matter fields:**

| Field | Required | Notes |
|---|---|---|
| `layout` | Yes | Always `post` |
| `title` | Yes | Used in post header and browser tab |
| `date` | Yes | Used for ordering; must match filename date |
| `lang` | Yes | `en` or `zh` — controls which blog index and home page the post appears on |
| `permalink` | Only for `lang: zh` | Must be `/zh/blog/[slug]/` for Chinese posts |
| `excerpt` | Recommended | Short description for previews |
| `featured` | No | Set to `true` to show on home page |
| `featured_order` | Only if `featured: true` | Integer; lower = first |
| `tags` | No | List of strings for categorization |

### Pinning Posts to Home Page

Add `featured: true` and `featured_order: N` to any post. The home page only shows posts matching its language (`lang: en` on English home, `lang: zh` on Chinese home). Up to 3 featured posts per language, sorted by `featured_order`.

### Blog Post URLs

| Language | URL Pattern |
|---|---|
| English post | `/blog/YYYY/MM/DD/slug.html` |
| Chinese post | `/zh/blog/[slug]/` (custom permalink in front matter) |

English posts use Jekyll's default date-based URL. Chinese posts use a custom permalink at `/zh/blog/[slug]/` so the URL is clean and human-readable in Chinese.

### Linking to Blog Posts

Always use `{{ site.baseurl }}{{ post.url }}` — never `{{ post.url }}` alone. The bare `post.url` produces paths without the `baseurl` prefix, causing 404s when the site is served from a subdirectory.

### Blog Nav Link

The "Blog" / "博客" nav link automatically switches based on `page.lang` — `/blog` on English pages, `/zh/blog` on Chinese pages. Do not hardcode this path.

## Design Tokens (CSS Variables)

All colors, fonts, and spacing are defined at the top of `assets/css/style.css`:

```css
:root {
  --green:       #6B9B7A;      /* Primary sage green */
  --green-dark:  #4E7A5C;      /* Hover state */
  --green-light: #EAF2EC;      /* Subtle backgrounds */
  --cream:       #FAFAF7;      /* Page background */
  --sand:        #D9CCBA;      /* Accent */
  --text:        #2C3A2E;      /* Body text */
  --text-muted:  #657066;      /* Secondary text */
  --white:       #FFFFFF;
  --font-head:   'Lora', Georgia, serif;
  --font-body:   'Open Sans', system-ui, sans-serif;
  --max-w:       860px;        /* Max content width */
}
```

## Troubleshooting

**CSS not loading:** Check that `baseurl` in `_config.yml` matches the deployed subdirectory.

**Logo 404:** Logo images use `{{ site.baseurl }}/assets/images/...` — ensure file exists in `assets/images/`.

**Form not submitting:** Set `formspree_url` in `_config.yml`. Check Formspree dashboard for endpoint.

**Incremental build stale:** Kill and restart the Jekyll server if changes don't appear.

**Hero image not showing:** `hero_image` must be an absolute URL (Unsplash) or a path starting with `/` for local files.

## Common Tasks

| Task | How |
|---|---|
| Update phone/email/location | Edit `_config.yml` |
| Change hero background | Edit `hero_image` in `_config.yml` |
| Replace logos | Drop new files with same names into `assets/images/` |
| Add a new FAQ item | Copy a `<details class="faq-item">...</details>` block in `index.md` (and `zh/index.md`) |
| Add a new service card | Copy a `<div class="service-card">...</div>` in `index.md` (and `zh/index.md`) |
| Add a new page | Create new `.md` file + Chinese version in `zh/` + add nav link |
| Add/edit UI string | Edit both `_data/en.yml` and `_data/zh.yml` |
| Write a blog post (EN) | Create `_posts/YYYY-MM-DD-slug.md` with `lang: en` |
| Write a blog post (中文) | Create `_posts/YYYY-MM-DD-slug-zh.md` with `lang: zh` + `permalink: /zh/blog/[slug]/` |
| Feature a post on home page | Add `featured: true` and `featured_order: N` to post front matter |
| Deploy | `git push` to `main` |
| Test locally | `bundle exec jekyll serve --port 4000` → `localhost:4000/alisa-website/` |
