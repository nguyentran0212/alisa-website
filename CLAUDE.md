# Alisa Play Therapy — Site Documentation

> **You (the AI agent) are reading this because Alisa, the site owner, has asked you to help her edit and maintain her website. She is non-technical. Assume nothing is installed on her Mac. Walk her through everything step by step, in plain language. If a command fails, diagnose and explain before retrying. Never make her feel bad for not knowing something.**

---

## Table of Contents

1. [How Alisa Works With You](#how-alisa-works-with-you)
2. [First Conversation Checklist — run on every new session](#first-conversation-checklist)
3. [macOS Setup — when tools are missing](#macos-setup)
4. [Project Overview](#project-overview)
5. [Config Variables (`_config.yml`)](#config-variables-_configyml)
6. [Content Editing Guide](#content-editing-guide)
7. [Working with Images](#working-with-images)
8. [Working with the Blog](#working-with-the-blog)
9. [Localization (English / 中文)](#localization)
10. [Running the Dev Server](#running-the-dev-server)
11. [Deployment](#deployment)
12. [Troubleshooting](#troubleshooting)
13. [Guardrails — what NOT to touch](#guardrails)
14. [Design Tokens (CSS variables)](#design-tokens)
15. [Common Tasks](#common-tasks)

---

## How Alisa Works With You

Alisa will typically do one of three things in a session:

- **"Help me change [X]"** — content, text, images, contact info. This is the most common request. Just edit the file, save, and the dev server (if running) will hot-reload. Show her the result in her browser.
- **"Run my site locally"** — start the dev server so she can preview changes before publishing.
- **"Publish my changes"** — commit and push to GitHub. GitHub Pages will rebuild automatically.

When she asks for something ambiguous (e.g. "update the about section"), read `index.md` or `about.md` first to confirm what's there, then propose a specific change and apply it. Don't ask her to write Markdown — offer to do it for her and show the diff.

Always speak in plain language. Avoid jargon. If you must use a technical term (commit, push, repo), explain it in one short sentence the first time.

---

## First Conversation Checklist

**Run these checks on the very first message of every new session** to know the state of Alisa's machine. Don't skip steps — even if she says "everything is installed", verify it.

```bash
# 1. Confirm we are in the project
pwd
ls Gemfile _config.yml index.md    # should all exist

# 2. Check macOS basics
sw_vers                            # macOS version
uname -m                           # arm64 = Apple Silicon, x86_64 = Intel

# 3. Check each required tool — ANY missing means setup is needed
which git && git --version
which mise && mise --version
xcode-select -p                    # should print a path like /Library/Developer/CommandLineTools

# 4. Check mise-managed tools (resolves via shims if ~/.zshenv was set up —
#    see [macOS Setup, Step 2](#2-mise-the-tool-manager) for why)
ruby -v                            # need 3.0+ (Jekyll 4.4 requires)
bundle -v
```

Then check the project's own state:

```bash
# 5. Is the project's gem set installed?
bundle check                       # "The Gemfile's dependencies are satisfied" = good
ls vendor/bundle 2>/dev/null       # if a vendor dir exists, gems are local

# 6. Is anything already running?
lsof -i :4000 2>/dev/null          # if Jekyll is already up
```

### What to report back to Alisa

After the checks, give her a short status summary in plain English, for example:

> "Good news — Ruby, Bundler, and mise are all installed. The project's gems are also already installed, so I just need to start the dev server. I'll have it ready in about 30 seconds."

or:

> "Your Mac is missing a few tools the site needs to run locally. Nothing scary — I just need to install them one at a time. It will take about 10 minutes the first time, then never again. Ready to start?"

### Then act

- **Everything installed and gems satisfied** → jump to [Running the Dev Server](#running-the-dev-server).
- **Tools missing** → walk through [macOS Setup](#macos-setup) in order. Don't dump all the commands at once; do one step, confirm it worked, then move on.
- **Tools installed but gems missing** → run `bundle install`, watch for errors (see [Troubleshooting](#troubleshooting) if `eventmachine` fails).

---

## macOS Setup

Install in this order. Each step depends on the previous one.

### 1. Xcode Command Line Tools (required for native gem compilation)

Jekyll's dependencies include native gems like `eventmachine`, `ffi`, and `google-protobuf` that need a C compiler. macOS doesn't ship one.

```bash
xcode-select --install
```

This opens a system dialog asking Alisa to confirm. Walk her through clicking "Install" and waiting. Takes 3–5 minutes.

Verify:
```bash
xcode-select -p
# Should print: /Library/Developer/CommandLineTools
```

### 2. mise (the tool manager)

[**mise**](https://mise.justhx.dev/) is a modern tool version manager — one tool that handles Ruby, Node, Python, and more. **It's the same tool already used to run pi**, so installing it serves double duty. No Homebrew or rbenv needed.

Check first; install only if missing:

```bash
which mise || curl https://mise.run | sh
```

The standalone installer downloads a single binary to `~/.local/bin/mise` and writes `eval "$(mise activate zsh)"` to `~/.zshrc`.

#### Make mise available in EVERY shell (no terminal restart needed)

`~/.zshrc` is only sourced by *interactive* shells (a fresh Terminal window). The `bash` tool the agent uses runs commands in *non-interactive* subshells that don't read `.zshrc` — so without this step, `ruby` and `bundle` won't be on PATH until Alisa opens a new terminal.

The fix: put a **lightweight shim activation** (the `--shims` flag) in the files that *are* sourced by every shell. After this, `ruby`, `bundle`, `node`, `uv`, etc. all just work everywhere — no `mise exec -- ` prefix needed, no terminal restart needed.

```bash
# zsh — ~/.zshenv is sourced by EVERY zsh invocation, interactive or not
echo 'eval "$(mise activate zsh --shims)"' >> ~/.zshenv

# bash — interactive shells source ~/.bashrc
[ -d "$HOME/.local/share/mise/shims" ] && \
  grep -q 'mise activate bash --shims' ~/.bashrc 2>/dev/null || \
  echo 'eval "$(mise activate bash --shims)"' >> ~/.bashrc

# bash — login shells source ~/.bash_profile (also covers non-interactive bash
# by exporting BASH_ENV, which forces `bash -c "..."` to source ~/.bashrc too)
grep -q 'mise activate bash --shims' ~/.bash_profile 2>/dev/null || \
  echo 'eval "$(mise activate bash --shims)"' >> ~/.bash_profile
echo 'export BASH_ENV="$HOME/.bashrc"' >> ~/.bash_profile
```

**What the `--shims` flag does:** `mise activate zsh --shims` outputs a single line:
```bash
export PATH="/Users/alisa/.local/share/mise/shims:$PATH"
```
Just prepends the shims directory to PATH — no functions, no env-var machinery. PATH then propagates to every child process automatically.

**Verify in the current shell:**

```bash
mise --version
# Should print something like: 2025.x.x

# After step 3 below completes, these should just work — no prefix needed:
ruby -v
# Should print: ruby 3.2.2 ...

bundle -v
# Should print: Bundler version 2.x.x

# Diagnostic — confirms which Ruby you're actually using
mise which ruby
# Should print a path inside ~/.local/share/mise/installs/ruby/...
```

### 3. Ruby (a modern version — 3.2 recommended)

```bash
cd /path/to/alisa-website    # wherever the repo lives
mise use ruby@3.2.2
mise install
```

The first command creates a `.tool-versions` file in the project (pinning the Ruby version) and adds Ruby 3.2.2 to it. The second command installs Ruby. Modern mise uses **prebuilt binaries** (via `ruby-build`) when available, so this typically finishes in under a minute instead of compiling from source.

Verify:
```bash
ruby -v
# Should print: ruby 3.2.2 ...

which ruby
# Should point inside ~/.local/share/mise/shims — NOT /usr/bin/ruby

mise current
# Should list ruby 3.2.2 as active
```

### 4. Bundler

```bash
gem install bundler
```

Verify:
```bash
bundle -v
```

### 5. Project dependencies

```bash
cd /path/to/alisa-website
bundle install
```

This downloads Jekyll and all its dependencies into the project. Takes 1–3 minutes. If it fails on `eventmachine`, see [Troubleshooting](#troubleshooting).

Verify:
```bash
bundle check
# Should say: "The Gemfile's dependencies are satisfied"
```

### 6. Start the dev server

See [Running the Dev Server](#running-the-dev-server).

### Alternative: if Alisa already has rbenv or asdf

If she already uses rbenv or asdf from another project, that's fine — mise isn't required. Just make sure whichever manager she uses is pointing at a Ruby ≥ 3.0 in this project's directory. The instructions above use mise because it's the simplest path from scratch.

---

## Project Overview

A single-page Jekyll landing site for a play therapy practice. Live at **https://alisaplaytherapy.com**.

### Tech Stack

- **Jekyll 4.4** — static site generator
- **Plain CSS** — single `assets/css/style.css`, no framework
- **Vanilla JavaScript** — single `assets/js/main.js`
- **Markdown** — all content in `.md` files
- **Formspree** — contact form handler (endpoint in `_config.yml`)
- **GitHub Pages** — host. Auto-builds on push to `main`.

### File Structure

```
├── _config.yml              # ⚠️  MAIN CONFIG — site-wide settings (contact info, hero image, etc.)
├── _data/
│   ├── en.yml                # English UI strings (nav, buttons, section labels)
│   └── zh.yml               # Chinese UI strings
├── _layouts/
│   ├── default.html          # Base layout (nav, footer, head)
│   └── post.html             # Blog post layout
├── _includes/
│   ├── header.html          # Sticky nav bar — language-aware
│   └── footer.html          # Footer — copyright + privacy link
├── index.md                 # ⚠️  MAIN CONTENT — all home-page sections
├── about.md                 # About page (EN)
├── privacy.md               # Privacy policy (EN)
├── zh/                      # Chinese versions of every page
│   ├── index.md
│   ├── about.md
│   ├── privacy.md
│   └── blog/index.md
├── blog/index.md            # English blog listing
├── _posts/                  # Blog posts (one file per post, EN + ZH)
├── assets/
│   ├── css/style.css       # Styles
│   ├── js/main.js           # Nav, scroll effects, form handling
│   └── images/              # Logo, hero, blog post images
├── Gemfile                  # Ruby gem dependencies (Jekyll)
├── Gemfile.lock             # Locked versions (committed)
├── .tool-versions           # Pinned Ruby version (mise/asdf reads this)
├── CNAME                    # Custom domain → alisaplaytherapy.com
└── README.md                # Short overview for humans
```

---

## Config Variables (`_config.yml`)

**These are the only values Alisa normally needs to change.** Editing them updates the whole site automatically.

```yaml
title: "Alisa Play Therapy"             # Browser tab title
description: "..."                       # Meta description (SEO)
baseurl: ""                              # "" because site is at root domain
url: ""                                  # Canonical URL (empty)
google_fonts: "Lora:wght@...|Open+Sans:..." # Font specification
formspree_url: "https://formspree.io/f/..."  # Contact form endpoint
contact_email: "hello@alisaplaytherapy.com"
contact_phone: "+1234567890"
contact_location: "[area served]"
hero_image: "https://..."                # Hero background — URL or local path
```

`baseurl` is **already set to `""`** because the site is on the custom domain `alisaplaytherapy.com`. Don't change it back to `/alisa-website` unless switching back to the `nk-tran.com/alisa-website/` URL.

The live dev URL is just **http://localhost:4000/** — no subdirectory prefix.

---

## Content Editing Guide

| She wants to change | Edit this file | Notes |
|---|---|---|
| Hero, "What is Play Therapy", FAQ, Services, About, Contact sections | `index.md` | All home-page content in one file |
| Full bio (separate page) | `about.md` | |
| Privacy policy | `privacy.md` | |
| Any contact info (email, phone, location) | `_config.yml` | Updates site-wide |
| Hero background image | `_config.yml` → `hero_image` | URL or local path |
| Nav/button/section labels (EN) | `_data/en.yml` | |
| Nav/button/section labels (中文) | `_data/zh.yml` | Always edit **both** |
| Chinese home page sections | `zh/index.md` | Mirror of `index.md`, translated |
| Chinese about | `zh/about.md` | |
| Chinese privacy | `zh/privacy.md` | |

### Section IDs (must match nav links in `_includes/header.html`)

- `#what-is-play-therapy` — What is Play Therapy
- `#is-it-right` — Is It Right for My Child (FAQ accordion)
- `#services` — Services
- `#about` — About (on home page)
- `#contact` — Contact

### FAQ items

Each FAQ is a `<details>` block. To add a new question, copy this into `index.md` (and `zh/index.md`) inside the `#is-it-right` section:

```html
<details class="faq-item">
  <summary class="faq-question">Your question here?</summary>
  <div class="faq-answer">
    <p>Your answer here.</p>
  </div>
</details>
```

### Service cards

Each card is a `<div class="service-card">...</div>` block. Copy an existing one and change the text.

---

## Working with Images

Alisa will regularly want to swap logos, change the hero photo, or add blog post images.

### Replace an existing image (logo, hero, etc.)

1. Alisa gives you a new file. Ask her where it is on her Mac (usually `~/Downloads/`).
2. Note its dimensions — they should roughly match what it's replacing:
   - `logo_horizontal.png` — wide, used in the nav bar
   - `logo_vertical.png` — square, used in the hero section
   - `hero.jpg` — wide landscape, hero background
3. Copy the new file over the existing one:
   ```bash
   cp ~/Downloads/new-logo.png assets/images/logo_horizontal.png
   ```
4. Confirm the dev server (if running) shows the new image. If not, force a hard refresh in her browser (Cmd+Shift+R).
5. Ask her if she wants to commit + push (publish) the change.

### Add a new image for a blog post

1. Save the image into `assets/images/` (or a subfolder like `assets/images/posts/`).
2. Reference it from the post using a relative path:
   ```markdown
   ![Caption](/assets/images/posts/my-photo.jpg)
   ```
3. **Important:** since `baseurl` is `""`, the URL is just `/assets/images/...`, not `/alisa-website/assets/images/...`.

### Image format notes

- `.jpg` for photos (smaller file size)
- `.png` for logos with transparency
- `.svg` is fine for logos (sharp at any size)
- Keep hero images under ~500 KB so the page loads fast
- File names are case-sensitive on the server — `Hero.jpg` ≠ `hero.jpg`

### Optimizing large photos

If Alisa gives you a 10 MB iPhone photo, compress it before using. macOS has `sips` built-in (no install needed):

```bash
# Resize so the longest side is 1920px, JPEG quality 82
sips -Z 1920 -s format jpeg -s formatOptions 82 \
  ~/Downloads/big-photo.jpg \
  --out assets/images/posts/big-photo.jpg
```

(Or just ask her to send a smaller version — most phones let you choose "Actual" vs "Compatible" in AirDrop.)

---

## Working with the Blog

### File layout

```
_posts/2026-05-01-5-signs-your-child-might-benefit-from-play-therapy.md    # English
_posts/2026-05-01-5-signs-child-benefit-play-therapy-zh.md                 # Chinese
blog/index.md                                                              # English listing
zh/blog/index.md                                                           # Chinese listing
_layouts/post.html                                                         # Shared post layout
```

### Naming convention

`<date>-<slug>.md` for English, `<date>-<slug>-zh.md` for Chinese. The slug should be lowercase with hyphens, no spaces or special characters.

### English post template

```markdown
---
layout: post
title: "Post Title Here"
date: 2026-05-01
lang: en
excerpt: "A one-sentence summary for previews and SEO."
featured: true
featured_order: 1
tags:
  - play-therapy
---

Body content in Markdown.

## A sub-heading

Paragraphs, lists, images — all standard Markdown works.

![Alt text](/assets/images/posts/my-image.jpg)
```

### Chinese post template

```markdown
---
layout: post
title: "中文标题"
date: 2026-05-10
lang: zh
permalink: /zh/blog/this-post-slug/
excerpt: "一句话摘要。"
featured: true
featured_order: 2
tags:
  - play-therapy
---

中文正文...
```

### Featuring a post on the home page

Add `featured: true` and `featured_order: N` (lower = first). Up to 3 featured posts per language. The home page shows posts whose `lang` matches the page (`en` on English home, `zh` on Chinese home).

### Linking to a post from elsewhere

Use `{{ site.baseurl }}{{ post.url }}` — never just `{{ post.url }}`. The bare form produces broken paths.

---

## Localization

Two languages: English (default) and Chinese (under `/zh/`).

### Two kinds of content

1. **UI strings** — short labels (nav, buttons, section headers) live in `_data/en.yml` and `_data/zh.yml`. **Always edit both files together** so labels stay in sync.

2. **Page content** — long-form body text lives in the `.md` files (and their `zh/` counterparts). **Every page has a Chinese mirror.**

### Adding a new UI string

1. Add the key to `_data/en.yml` under the right section:
   ```yaml
   sections:
     new_section:
       eyebrow: "NEW"
       title: "Section Title"
   ```
2. Add the same key with the Chinese value to `_data/zh.yml`.
3. Reference in templates: `{{ site.data.en.sections.new_section.title }}` (English pages) or `{{ site.data.zh.sections.new_section.title }}` (Chinese pages).

### Adding a new page

1. Create the English version at the repo root: `pagename.md` with front matter `lang: en`.
2. Create the Chinese version: `zh/pagename.md` with front matter `lang: zh`.
3. Add a nav link in `_includes/header.html` to both branches.

---

## Running the Dev Server

Jekyll has live-reload — when she saves a file, the browser auto-refreshes.

### Start

```bash
cd /path/to/alisa-website
bundle exec jekyll serve --port 4000 --host 127.0.0.1
```

The site is now at **http://localhost:4000/**. The server keeps running and blocks the terminal. Tell Alisa to open that URL in her browser.

`bundle`, `jekyll`, `ruby` all resolve through mise shims (set up in [macOS Setup, Step 2](#2-mise-the-tool-manager)), so no extra prefix is needed.

### Background it (so the terminal isn't blocked)

If the agent needs the terminal for other commands while the server runs:

```bash
cd /path/to/alisa-website
nohup bundle exec jekyll serve --port 4000 --host 127.0.0.1 > /tmp/jekyll.log 2>&1 &
echo "Jekyll started, PID $!"
sleep 3
cat /tmp/jekyll.log
```

To stop the backgrounded server later:

```bash
lsof -ti :4000 | xargs kill
```

Or:

```bash
pkill -f "jekyll serve"
```

### Preview on her phone (same Wi-Fi)

Start the server bound to all interfaces:

```bash
bundle exec jekyll serve --host 0.0.0.0 --port 4000
```

Then on her phone's browser, visit `http://<her-mac's-ip>:4000/`. Find the IP with:

```bash
ipconfig getifaddr en0   # Wi-Fi
ipconfig getifaddr en1   # Ethernet
```

Note: macOS firewall may prompt her to allow incoming connections — she should click "Allow".

### View server logs

If something looks wrong:

```bash
tail -f /tmp/jekyll.log    # if backgrounded
```

Or just look at the terminal where the server is running.

### Hard refresh in browser

When CSS or images seem stale: **Cmd + Shift + R** (Chrome/Safari/Firefox). This bypasses cache.

---

## Deployment

The site auto-deploys when changes are pushed to the `main` branch on GitHub. Takes ~1–2 minutes.

### First-time only — set up Git access

Alisa needs permission to push to the GitHub repo. Before the first deploy, ask her:

- Does she have a GitHub account?
- Has she been added as a collaborator on the repo? (The site owner needs to do this in GitHub → Settings → Collaborators.)
- Does she have an SSH key configured, or does she prefer to use a Personal Access Token (HTTPS)?

If she needs help, walk her through it:

```bash
# Check if she already has an SSH key
ls ~/.ssh/id_ed25519.pub ~/.ssh/id_rsa.pub 2>/dev/null

# If not, generate one
ssh-keygen -t ed25519 -C "her-email@example.com"
# Then add the printed key to https://github.com/settings/keys

# Test it
ssh -T git@github.com
```

### Regular deploy workflow

```bash
cd /path/to/alisa-website

# See what changed
git status

# Stage changes
git add .

# Commit with a short message describing what she changed
git commit -m "Update contact phone number"

# Push to publish
git push origin main
```

Then watch for the deploy at https://github.com/<owner>/<repo>/actions (or just wait ~90 seconds and refresh https://alisaplaytherapy.com).

### If push is rejected (out of date)

```bash
git pull --rebase
git push origin main
```

---

## Troubleshooting

### `bundle install` fails compiling `eventmachine` or `ffi`

The C compiler or build tools are missing.

1. Verify Xcode CLT: `xcode-select -p` should return a path. If not: `xcode-select --install`.
2. Retry `bundle install`.

If still failing, try forcing a rebuild of just that gem:

```bash
bundle config build.eventmachine --with-cxxflags="-std=c++17"
bundle install
```

### `ruby: command not found` or `ruby -v` shows `2.6.x` (system Ruby)

The mise shims aren't on PATH. Verify the activation is set up (see [macOS Setup, Step 2](#2-mise-the-tool-manager)):

```bash
# Should all return paths inside ~/.local/share/mise/, NOT /usr/bin/
which ruby
which bundle
which mise

# If mise is installed but ruby/bundle aren't, the shim activation didn't load
grep -q 'mise activate zsh --shims' ~/.zshenv && echo "shim activation present" || echo "MISSING — run setup step 2 again"
```

**Most common cause:** skipped Step 2's "Make mise available in EVERY shell" block. Re-run it.

**Less common cause:** pi's tool is invoking `bash` instead of `zsh` for non-interactive commands, and `~/.bashrc` wasn't set up. Verify with:

```bash
grep -q 'mise activate bash --shims' ~/.bashrc && echo "bash shim activation present" || echo "MISSING"
```

### `mise` command not found after install

The standalone installer wrote to `~/.zshrc` but that's not enough — verify the shim activation in `~/.zshenv` (see [Step 2](#2-mise-the-tool-manager)):

```bash
grep -q 'mise activate zsh --shims' ~/.zshenv || \
  echo 'eval "$(mise activate zsh --shims)"' >> ~/.zshenv
```

Then open a new terminal window.

### `bundle: command not found`

Bundler wasn't installed for this Ruby. From the project directory:

```bash
gem install bundler
bundle install
```

### Jekyll server starts but browser shows "site can't be reached"

- Is the URL `http://localhost:4000/` (no `/alisa-website/` since baseurl is `""`)?
- Is something else on port 4000? Try `--port 4001` and visit `localhost:4001/`.

### Edits not showing up

1. Did the dev server restart? Jekyll hot-reloads most files automatically but **doesn't** watch `_config.yml` — restart the server after config changes.
2. Hard-refresh the browser (Cmd+Shift+R).
3. Check `/tmp/jekyll.log` (or the running terminal) for build errors.

### `git push` asks for username/password

She hasn't set up SSH keys. Either set them up (see Deployment), or use HTTPS with a Personal Access Token: https://github.com/settings/tokens

### Liquid error / template error after an edit

Most common cause: a typo in a `.md` front-matter block (unclosed `---`, invalid YAML), or a `{{ }}` Liquid tag that Jekyll can't parse. Read the error line in the log; it tells you which file and line.

### `baseurl` keeps coming back

Don't touch `baseurl` — it's `""` because the site is on the custom domain. The README's older instructions about `/alisa-website` are out of date.

---

## Guardrails — what NOT to touch

Unless Alisa explicitly asks for these, **do not modify**:

- `Gemfile` / `Gemfile.lock` — changing these can break the build. Only update if she's upgrading Jekyll.
- `CNAME` — removing this breaks the custom domain.
- `assets/css/style.css` — only touch if she's asking for a design change. Most edits should be content in `.md` files.
- `assets/js/main.js` — only touch if a specific JS behavior is broken.
- `_includes/header.html` and `_includes/footer.html` — only touch when adding a new nav link or page.
- `_layouts/` — same.
- `_config.yml`'s `baseurl` — must stay `""`.
- Any `zh/` file's structure (only translate, don't restructure).

When in doubt: **read before you write**, and explain what you're about to change in plain English before doing it.

### Things to NEVER commit

- Real personal info Alisa doesn't want public (it's fine if she does — that's her call)
- API keys other than Formspree's public endpoint URL
- `.DS_Store` (already in `.gitignore`)
- Local build output (`_site/`, `.jekyll-cache/`, `.jekyll-metadata` — all in `.gitignore`)

---

## Design Tokens (CSS variables)

Defined at the top of `assets/css/style.css`. Only relevant if Alisa asks for design tweaks:

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

---

## Common Tasks

| Task | How |
|---|---|
| Update phone/email/location | Edit `_config.yml` |
| Change hero background | Edit `hero_image` in `_config.yml` (URL or local path) |
| Replace logos | Drop new files with same names into `assets/images/` |
| Add a new FAQ item | Copy a `<details class="faq-item">` block in `index.md` (and `zh/index.md`) |
| Add a new service card | Copy a `<div class="service-card">` block in `index.md` (and `zh/index.md`) |
| Add a new page | Create `.md` + `zh/.md` + add nav link in `_includes/header.html` |
| Add/edit a UI label | Edit `_data/en.yml` AND `_data/zh.yml` |
| Write a blog post (EN) | Create `_posts/YYYY-MM-DD-slug.md` with `lang: en` |
| Write a blog post (中文) | Create `_posts/YYYY-MM-DD-slug-zh.md` with `lang: zh` + custom permalink |
| Feature a post on home | Add `featured: true`, `featured_order: N` to its front matter |
| Preview locally | `bundle exec jekyll serve --port 4000` → `http://localhost:4000/` |
| Preview on phone | `bundle exec jekyll serve --host 0.0.0.0 --port 4000`, visit `<mac-ip>:4000` on phone |
| Publish | `git add . && git commit -m "..." && git push origin main` |
| Stop dev server | `lsof -ti :4000 \| xargs kill` |

---

## TL;DR for the agent

When Alisa opens a session and says anything:

1. Run the [First Conversation Checklist](#first-conversation-checklist) — know her environment before doing anything.
2. If anything's missing, walk through [macOS Setup](#macos-setup) one step at a time.
3. Get the dev server running at `localhost:4000/` and tell her to open it.
4. From there, edit whatever she asks for. Content in `.md` files, contact info in `_config.yml`, images in `assets/images/`.
5. When she's ready to publish, run the deployment commands.
6. Always explain in plain English, never make her feel small for not knowing.