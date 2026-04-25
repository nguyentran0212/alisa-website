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
├── _layouts/
│   └── default.html         # Base HTML layout (nav, footer, head tags)
├── _includes/
│   ├── header.html          # Sticky nav bar — DO NOT edit directly
│   └── footer.html          # Footer — copyright and privacy link
├── index.md                 # ⚠️  MAIN CONTENT — all section text goes here
├── about.md                 # About page content
├── privacy.md               # Privacy policy page
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
| Hero, What is Play Therapy, FAQ, Services, About, Contact sections | `index.md` | All main page content in one file |
| About page (full bio) | `about.md` | Separate page for extended bio |
| Privacy policy | `privacy.md` | Editable if privacy practices change |
| Nav logo | Replace `assets/images/logo_horizontal.png` | Same filename + dimensions |
| Hero logo | Replace `assets/images/logo_vertical.png` | Same filename + dimensions |
| Hero background | Change `hero_image` in `_config.yml` | Local file or Unsplash URL |
| All contact info | Change `_config.yml` vars | Updates entire site automatically |
| Form handler | Change `formspree_url` in `_config.yml` | From formspree.io dashboard |

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

All nav links are in `_includes/header.html`. If a new section is added to `index.md`, add a corresponding `<li><a href="{{ site.baseurl }}/#section-id">Label</a></li>` to the nav.

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

## Adding New Pages

Create a new `.md` file in the root directory:

```markdown
---
layout: default
title: "Page Title"
---

<section id="page-id" class="section">
  <div class="container">
    <div class="reveal">
      Your content here
    </div>
  </div>
</section>
```

Then add a link to `_includes/header.html`.

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
| Add a new FAQ item | Copy a `<details class="faq-item">...</details>` block in `index.md` |
| Add a new service card | Copy a `<div class="service-card">...</div>` in `index.md` |
| Add a new page | Create new `.md` file + add nav link |
| Deploy | `git push` to `main` |
| Test locally | `bundle exec jekyll serve --port 4000` → `localhost:4000/alisa-website/` |
