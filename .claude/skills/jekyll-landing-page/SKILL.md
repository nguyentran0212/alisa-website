---
name: jekyll-landing-page
description: >
  Build a polished, single-page Jekyll static site for GitHub Pages — editable via
  Markdown — for landing pages, small business sites, or simple blogs. Triggers when
  the user says "make a website", "build a landing page", "create a site for [business]",
  "set up a blog on GitHub Pages", or asks for a static site with non-technical content
  editing. Does NOT trigger for e-commerce, database-backed sites, or existing setups
  using Next.js, Hugo, or a visual CMS.
---

# Jekyll Landing Page Builder

Builds a complete, deployed Jekyll static site on GitHub Pages — from discovery
interview to live site — following seven sequential phases.

---

## PHASE 1: Discovery & Planning

### Step 1 — Discovery Interview

Ask all of the following before writing any code. Do not skip or assume.

1. **Business/purpose** — What is the site for? (name, type, audience)
2. **Primary goal** — What should visitors do? (contact, book, read, buy)
3. **Content** — What already exists? (text, images, logo, brand assets)
4. **Visual direction** — Any brand colors, reference sites, or a feeling they want?
5. **Hosting** — GitHub Pages confirmed? Subdirectory (`/repo-name/`) or root domain?
6. **Scope** — Single scrolling page, or multiple pages + blog?
7. **Domain** — Do they have a domain name yet?

If the user is unsure, default to:
- Single scrolling landing page
- GitHub Pages subdirectory deploy
- Sage green + warm cream palette (calming, nurturing aesthetic)
- Jekyll + plain CSS (no build step, non-technical content editing)

### Step 2 — Tech Stack Confirmation

| If the user wants... | Use this |
|---|---|
| GitHub Pages + Markdown-editable content | **Jekyll 4** — GitHub Pages-native, zero-config deploy |
| Landing page, no blog | Jekyll, single page |
| Blog in future | Jekyll + `_posts/` folder (same codebase) |
| Non-technical user editing | Jekyll — all content in `.md` files |

**Recommend against:**
- **Tailwind CSS** — needs a GitHub Action build step on GitHub Pages; plain CSS is simpler and zero-config
- **Bootstrap** — aesthetic mismatch for nurturing/calm brands; fighting defaults costs more than writing clean CSS
- **React/Next.js** — overkill for static content; Jekyll is purpose-built for this use case

### Step 3 — Write SPEC.md

Write a `SPEC.md` to the project root before any code. Include:
- Concept & vision
- Design language (palette, typography, motion philosophy)
- Layout & section structure
- Component inventory
- Technical approach (file structure)
- What the spec does NOT cover

Show the user the SPEC.md and wait for approval before writing code.

---

## PHASE 2: Repository Preparation

**Do this before creating any project files.** Check what already exists first.

### Step 4 — Audit Existing Repository State

Ask the user for the repository path, or use the current working directory.

**If a Git repo exists:**
- Run `git status` to confirm
- Check if `Gemfile`, `_config.yml`, or project files already exist
- If the repo is already set up, skip to Phase 3 — do NOT recreate files that exist

**If no Git repo exists:**
- Run `git init`

**If `bundle` / Jekyll are not installed:**
- Run `gem install jekyll bundler`

### Step 5 — Prepare Repository Files

If the repo is new or missing dependencies, create the following:

**`.gitignore`** (always include):
```
_site/
.jekyll-metadata
.DS_Store
```

**`Gemfile`**:
```ruby
source "https://rubygems.org"
gem "jekyll"
```

Then run `bundle install`.

---

## PHASE 3: Project Setup

### Step 6 — Create Jekyll Structure

Create this directory structure:

```
_project-root/
├── _config.yml           # All editable site configuration
├── _layouts/
│   └── default.html     # Base HTML layout
├── _includes/
│   ├── header.html      # Nav — baseurl-aware links only
│   └── footer.html      # Footer
├── index.md             # Main page content
├── about.md             # About page
├── privacy.md           # Privacy policy (required if using forms)
└── assets/
    ├── css/style.css    # All styles
    ├── js/main.js       # All JS interactions
    └── images/          # Logos, hero image
```

Do NOT create `_site/` — it is a build output, not a source directory.

### Step 7 — Configure `_config.yml`

**All configurable values MUST be in `_config.yml`. Nothing hardcoded in templates.**

```yaml
# Site identity
title: "Site Name"
description: "Meta description for SEO"

# Deployment path — CRITICAL
baseurl: "/repo-name"   # Set to "" for root domain or custom domain
url: ""

# Fonts
google_fonts: "Lora:wght@400;600|Open+Sans:wght@400;600"

# Contact
contact_email:    "hello@example.com"
contact_phone:    "+1234567890"
contact_location: "Area served"

# Contact form
formspree_url: ""   # Paste Formspree endpoint here when ready

# Hero
hero_image: "/assets/images/hero.jpg"
```

### Step 8 — Create Layout and Includes

**`_layouts/default.html`** — the HTML shell. Every asset URL uses `relative_url`:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{ page.title | default: site.title }}</title>
  <meta name="description" content="{{ page.description | default: site.description }}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;1,400&family=Open+Sans:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="{{ "/assets/css/style.css" | relative_url }}">
</head>
<body>
  {% include header.html %}
  <main>{{ content }}</main>
  {% include footer.html %}
  <script src="{{ "/assets/js/main.js" | relative_url }}"></script>
</body>
</html>
```

**`_includes/header.html`** — Nav. Every `href` and `src` uses `{{ site.baseurl }}`:
```html
<nav id="site-nav">
  <div class="nav-inner">
    <a href="{{ site.baseurl }}/" class="nav-logo">
      <img src="{{ site.baseurl }}/assets/images/logo_horizontal.png" alt="Site Name" height="36">
    </a>
    <ul class="nav-links">
      <li><a href="{{ site.baseurl }}/#section-id">Section</a></li>
      <!-- more links... -->
    </ul>
  </div>
</nav>
```

**`_includes/footer.html`**:
```html
<footer id="site-footer">
  <p>&copy; {{ site.time | date: "%Y" }} Site Name. <a href="{{ site.baseurl }}/privacy/">Privacy Policy</a></p>
</footer>
```

---

## PHASE 4: Content

### Step 9 — Write Placeholder Content

Create `index.md`, `about.md`, and `privacy.md` with realistic placeholder content.

**`index.md` frontmatter:**
```yaml
---
layout: default
title: "Site Name"
description: "Meta description"
---
```

In `index.md`, every anchor link in HTML must use `{{ site.baseurl }}`:
```markdown
<a href="{{ site.baseurl }}/#contact">Contact</a>
```

**Content-first rule:** Write all placeholder text before styling. This lets the user approve structure and tone before visual work begins.

### Step 10 — User Approval on Content

Show the user the content in `index.md` and `about.md`. Wait for approval before moving to styling.

---

## PHASE 5: Styling & Interactions

### Step 11 — Write CSS

**Approach — write in this order to avoid conflicts and overrides:**

1. **Reset** — `* { box-sizing: border-box; margin: 0; padding: 0; }`
2. **Tokens** — CSS custom properties at `:root` (colors, fonts, spacing, radii, shadows)
3. **Typography base** — `body`, `h1–h4`, `p`, `a`, `ul/li`
4. **Layout primitives** — `.container`, `.section`, `.section--alt`
5. **Navigation** — sticky bar, then desktop links, then mobile hamburger
6. **Hero** — full-viewport section, THEN overlay, THEN content
7. **Section components** — FAQ, services, about, contact
8. **Reveal animation** — `.reveal` + `.visible` for scroll effects
9. **Responsive overrides** — `@media` at bottom, smallest to largest

**Rules:**
- Mobile styles AFTER desktop — do not nest desktop inside `@media`
- Hero overlay (`::before`) must have `z-index: 1`; content container `z-index: 2`
- Dark nav on light hero: use `rgba(10,20,15,0.92)` background with white text
- Mobile nav MUST use dark background + white text — never cream-on-white

**Accessibility:**
- `prefers-reduced-motion` must disable parallax and animated reveals
- Mobile: always set `background-attachment: scroll` (iOS blocks `fixed`)

### Step 12 — Write JavaScript

**Approach — write in this order:**

1. **Smooth scroll** — `anchor.scrollIntoView({ behavior: 'smooth' })`
2. **Sticky nav** — toggle `.scrolled` class on scroll
3. **Active nav link** — `IntersectionObserver` on section IDs
4. **Mobile nav toggle** — open/close hamburger
5. **FAQ accordion** — optional JS for single-open behavior (native `<details>` works without it)
6. **Form submission** — `fetch()` POST to Formspree, success/error message toggling

**Rules:**
- Keep it vanilla — no dependencies
- Declare all DOM references at the top of each handler
- All event listeners inside `if (element)` guards so the JS fails silently if the element is absent

---

## PHASE 6: QA & Deployment

### Step 13 — Pre-Deployment Verification

**Do NOT use a browser for these checks.** Verify programmatically.

**File existence:**
- [ ] `Gemfile` and `.gitignore` exist
- [ ] `_site/` is in `.gitignore`
- [ ] All image files referenced in `_config.yml` and templates exist in `assets/images/`

**URL compliance (grep/pattern check):**
- [ ] No `href="/assets/` without `{{ site.baseurl }}` or `| relative_url` in any `.html`, `.md`, or `.css` file
- [ ] No `src="/assets/` without `{{ site.baseurl }}` in any `.html` or `.md` file
- [ ] `background-image` in CSS or inline styles uses `{{ site.hero_image }}` or an absolute URL

**Config completeness:**
- [ ] `baseurl` is set to a value
- [ ] `contact_email`, `contact_phone`, `contact_location` are all set to non-empty values
- [ ] `formspree_url` is either empty (form will show error gracefully) or a valid Formspree URL

**If any check fails, fix before deploying.**

### Step 14 — Deploy to GitHub Pages

```bash
git add -A && git commit -m "Initial commit"
# Push to GitHub repo
# Then: repo Settings → Pages → Source: main branch
```

After push, the agent cannot verify the live deployment — the user must confirm the site loads and assets display.

---

## PHASE 7: Documentation

### Step 15 — Create Project Documentation

**`CLAUDE.md`** — for AI agents. Include:
- File tree with file purposes
- `baseurl` deployment triangle (local dev vs subdirectory vs custom domain)
- Complete `_config.yml` reference
- Content editing map (which file = which section)
- Section ID reference table
- Troubleshooting matrix
- Common tasks quick-reference table

**`README.md`** — for non-technical users. Include:
- What can be changed and where
- How to run the dev server (`bundle exec jekyll serve`)
- How to deploy (`git push`)
- Formspree setup
- Custom domain migration steps
- Getting help

---

## APPENDIX

### Appendix A: `_config.yml` Reference

```yaml
# Required variables
title: "Site Name"
description: "Meta description for SEO"
baseurl: "/repo-name"      # "" for root domain, "/repo-name" for subdirectory
url: ""                    # Canonical URL (empty if not yet known)

# Contact — editable throughout the site
contact_email:    "hello@example.com"
contact_phone:    "+1234567890"
contact_location: "Suburb or area served"

# Fonts — warm heading + clean body pairing
google_fonts: "Lora:wght@400;600|Open+Sans:wght@400;600"

# Forms — leave empty until Formspree is set up
formspree_url: ""    # From formspree.io

# Hero — local path (starts with /) or absolute Unsplash URL
hero_image: "/assets/images/hero.jpg"
```

### Appendix B: baseurl Deployment Triangle

| Environment | `baseurl` value | Dev URL |
|---|---|---|
| Local dev (subdirectory) | `"/repo-name"` | `localhost:4000/repo-name/` |
| GitHub Pages (subdirectory) | `"/repo-name"` | `domain.com/repo-name/` |
| Custom root domain | `""` | `domain.com/` |

When switching environments, change `baseurl` in `_config.yml` and push.

### Appendix C: Hero Parallax CSS Pattern

```css
#hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;  /* iOS degrades this — see below */
  overflow: hidden;
}

/* Dark overlay for text readability */
#hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
  pointer-events: none;
}

/* Content above overlay */
#hero > * { position: relative; z-index: 2; }

/* iOS and reduced motion fallback */
@media (max-width: 700px), (prefers-reduced-motion: reduce) {
  #hero { background-attachment: scroll; }
}
```

### Appendix D: Mobile Nav CSS Pattern

```css
/* Desktop: transparent/dark bar */
#site-nav {
  position: sticky; top: 0; z-index: 200;
  background: rgba(10, 20, 15, 0.92);
  backdrop-filter: blur(8px);
}
.nav-links a { color: rgba(255,255,255,0.75); }

/* Mobile: dark background, white text — NOT cream/white */
@media (max-width: 700px) {
  .nav-toggle { display: flex; }

  .nav-links {
    display: none;
    position: absolute;
    top: 100%; left: 0; right: 0;
    background: rgba(10, 20, 15, 0.97);
    flex-direction: column;
    padding: 12px 20px 20px;
  }
  .nav-links.open { display: flex; }
  .nav-links a { color: rgba(255,255,255,0.75); }
  .nav-links a:hover { color: #fff; background: rgba(255,255,255,0.1); }
}
```

### Appendix E: Inline SVG Icon Pattern

Always use inline SVGs for UI icons — never emoji.

```html
<span class="icon">
  <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8" fill="none">
    <!-- envelope -->
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
    <!-- phone -->
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07..."/>
    <!-- map pin -->
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
</span>
```

### Appendix F: Contact Form Pattern

**HTML (in Markdown as inline):**
```html
<form id="contact-form" method="POST" action="{{ site.formspree_url }}">
  <!-- Honeypot — bots fill this, humans don't see it -->
  <div style="display:none;">
    <input type="text" name="_gotcha" tabindex="-1" autocomplete="off">
  </div>
  <div class="form-field">
    <label for="name">Your Name</label>
    <input type="text" id="name" name="name" required>
  </div>
  <div class="form-field">
    <label for="email">Email</label>
    <input type="email" id="email" name="email" required>
  </div>
  <div class="form-field">
    <label for="message">Message</label>
    <textarea id="message" name="message" rows="5" required></textarea>
  </div>
  <button type="submit" class="btn btn-primary" style="width:100%;">Send Message</button>
  <p class="form-success" style="display:none;">Sent! I'll be in touch soon.</p>
  <p class="form-error" style="display:none;">
    Error. Email directly: <a href="mailto:{{ site.contact_email }}">{{ site.contact_email }}</a>
  </p>
</form>
```

**JS (append to `main.js`):**
```js
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const url = this.getAttribute('action');
    if (!url) {
      document.querySelector('.form-error').style.display = 'block';
      return;
    }
    const btn = this.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = 'Sending...';
    try {
      const res = await fetch(url, {
        method: 'POST', body: new FormData(this),
        headers: { Accept: 'application/json' }
      });
      if (res.ok) {
        document.querySelector('.form-success').style.display = 'block';
        this.reset();
      } else {
        document.querySelector('.form-error').style.display = 'block';
      }
    } catch {
      document.querySelector('.form-error').style.display = 'block';
    } finally {
      btn.disabled = false;
      btn.textContent = 'Send Message';
    }
  });
}
```

---

## Verification Checklist

Agent-checkable items only. The user verifies the live site in a browser.

```
□ Git repo initialized, .gitignore created with _site/ excluded
□ All 7 phases completed in order
□ No hardcoded URLs without {{ site.baseurl }} (grep-verified)
□ baseurl set to correct deploy path
□ All config values in _config.yml (nothing hardcoded)
□ CLAUDE.md and README.md created
□ Dev server runs without error
□ Content approved by user before styling began
□ JS interactions: nav, form, accordion all implemented
□ Accessibility: prefers-reduced-motion handled, mobile nav dark-on-dark fixed
□ Icons: inline SVG used (not emoji)
□ Deploy pushed — user confirms live site loads
```
