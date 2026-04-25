# alisaplaytherapy.com — SPEC

## 1. Concept & Vision

A calm, trustworthy landing page for a play therapist. Parents arriving here are likely worried about their child — the site should feel warm, safe, and approachable rather than clinical or corporate. Every section answers a question a parent has: "What is this?", "Is this right for my child?", "What does she offer?", "Who is she?", "How do I reach her?".

## 2. Design Language

**Aesthetic:** Soft nature-inspired calm. Think warm sunlight through leaves, not a clinical whiteboard.

**Color Palette:**
- Primary: `#7A9E7E` — soft sage green
- Background: `#FDFBF7` — warm off-white (not stark white)
- Accent: `#C4A484` — warm tan/sand
- Text: `#3D3D3D` — soft charcoal (not pure black)
- Secondary text: `#6B6B6B` — muted gray

**Typography:**
- Headings: `Lora` (Google Font) — warm serif, friendly and trustworthy
- Body: `Open Sans` (Google Font) — clean, highly readable sans-serif
- Fallbacks: Georgia, serif / system-ui, sans-serif

**Spatial system:**
- Generous vertical padding between sections (80–120px)
- Comfortable line-height (1.7 body, 1.3 headings)
- Max content width: 800px centered (reading-friendly)

**Motion philosophy:**
- Minimal and gentle — a subtle fade-in on scroll for each section
- No flashy animations; nothing that distracts from content
- Smooth scroll when clicking nav links

**Visual assets:**
- A calming hero image (nature/outdoor play) — placeholder via Unsplash until she has her own
- No external icon library needed — simple inline SVGs or unicode characters for any icons
- No decorative clutter

## 3. Layout & Structure

Single scrolling page with anchored navigation. Navigation sticks to top of viewport on scroll.

**Page sections (in order):**

1. **Hero** — Brief welcoming tagline + short intro sentence + CTA button (scroll to contact)
2. **What is Play Therapy** — Plain-language explanation, warm tone
3. **Is Play Therapy Right for My Child** — FAQ-style, addresses common parent concerns
4. **Services** — What she offers (session types, age groups, format — mobile/clinic/remote)
5. **About** — Her bio and qualifications (content provided by her)
6. **Contact** — Simple contact info + email link
7. **Footer** — Minimal: copyright

**Responsive strategy:**
- Desktop: centered column, max 800px, generous whitespace
- Tablet/Mobile: same single-column layout, padding adjusts, font scales down slightly
- Navigation links wrap gracefully on small screens (no complex hamburger menu)

## 4. Features & Interactions

**Navigation:**
- Links: Home (scroll to top), What is Play Therapy, Is it Right for My Child, Services, About, Contact
- Active link highlights as user scrolls past each section (via Intersection Observer JS)
- Smooth scroll to anchored section on click

**Section reveal:**
- Each section fades in gently as it enters viewport (simple CSS class toggled by minimal vanilla JS)

**Contact section:**
- Email link (mailto) and phone number
- Social/professional link if applicable (e.g., LinkedIn)

**Social / external links:**
- If she has a professional profile (e.g., LinkedIn), a link with a simple icon

**Error / empty states:** N/A (static content)

## 5. Component Inventory

**Nav bar**
- Sticky top, solid background on scroll (not transparent/blurred — KISS)
- Site name on left, links on right
- States: default, scrolled (subtle shadow + background tint)

**Section wrapper**
- Centered column, consistent vertical padding
- Section title (Lora, large) + content

**CTA button**
- Sage green background (`#7A9E7E`), warm white text, rounded corners (8px)
- Hover: slightly darker green + subtle lift shadow
- Active: pressed down

**FAQ item**
- Question in bold, answer below with comfortable spacing
- Alternating subtle background tint per item for readability

**Service card**
- Name of service, brief description
- Simple bordered card with rounded corners

**Contact block**
- Email (mailto link), phone, location note
- Optional: simple text form (name, email, message, send button) that submits via Netlify Forms

**Footer**
- Small, centered text, muted color

## 6. Technical Approach

**Framework:** Jekyll (static site generator)
- GitHub Pages serves Jekyll natively — push to `main` branch, site builds and deploys automatically
- Content written in Markdown, not HTML
- Liquid templating for shared layout (nav, footer, head)

**Files structure:**
```
├── _config.yml          # Jekyll config (site name, baseurl, etc.)
├── index.md             # Main page — all sections in one file
├── about.md            # About page (bio + qualifications)
├── assets/
│   ├── css/
│   │   └── style.scss  # Main stylesheet (Jekyll processes SCSS automatically)
│   ├── js/
│   │   └── main.js     # Smooth scroll, section reveal, active nav
│   └── images/         # Hero image, any assets
├── _includes/
│   ├── header.html     # Nav
│   └── footer.html     # Footer
└── _layouts/
    └── default.html    # Base HTML layout
```

**Hosting:** GitHub Pages (repo at github.com/alisa-playtherapy or similar → Settings → Pages → serve from `main` branch)
**Domain:** `alisaplaytherapy.com` — configured in GitHub Pages settings

**Future expansion path:**
- New `.md` files = new pages (e.g., a Blog page)
- Jekyll `_posts/` folder for blog posts
- No structural changes needed to support growth

**What this spec does NOT cover:**
- Blog posts (future scope)
- Online booking/payment system
- Photo/content production (she'll provide bio text and we use Unsplash placeholder imagery for now)
