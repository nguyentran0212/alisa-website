# Alisa Play Therapy Website

A warm, calming landing page for a play therapist. Built to help parents find out about play therapy, decide if it's right for their child, and get in touch.

**Live site:** https://alisaplaytherapy.com

---

## About This Site

This site is built with [Jekyll](https://jekyllrb.com/), a static site generator that GitHub Pages runs automatically — no hosting dashboard, no build commands needed. Content is written in plain English in Markdown files, not HTML.

This means you can update the text on the site without touching any code. Just open the file in any text editor, change the words, save, and push.

---

## Editing the Site

### What Can Be Changed

| What | Where to edit |
|---|---|
| Any section text (hero, about, FAQ, services, contact) | `index.md` |
| Full bio and qualifications | `about.md` |
| Chinese versions of every page | `zh/` folder |
| Contact details (email, phone, location) | `_config.yml` |
| Hero background image | `_config.yml` → `hero_image` |
| Form submission endpoint | `_config.yml` → `formspree_url` |
| Nav/button/label text (English) | `_data/en.yml` |
| Nav/button/label text (Chinese) | `_data/zh.yml` |
| Logo images | Replace files in `assets/images/` |

### How to Run the Site Locally

```bash
bundle exec jekyll serve --port 4000 --host 127.0.0.1
```

Then open **http://localhost:4000/** in your browser. The site hot-reloads when you save a file.

> First time on a new Mac? See **"Setting up your Mac"** below — there are a few tools to install before Jekyll will run.

### How to Deploy

```bash
git add .
git commit -m "Describe what you changed"
git push origin main
```

GitHub Pages builds and publishes the site automatically — usually within 1–2 minutes.

---

## Setting up your Mac (first time only)

The site needs Ruby + Jekyll to run locally. macOS doesn't have these out of the box, but you only need three things installed:

1. **Xcode Command Line Tools** — `xcode-select --install` (one-time system dialog)
2. **[mise](https://mise.justhx.dev/)** — a tool version manager. Install with `curl https://mise.run | sh`. (This is the same tool that runs pi, so you likely already have it.)
3. **Ruby 3.2.2** — `mise use ruby@3.2.2` then `mise install` from inside the project directory

After that, `bundle install` once and you're done. Total time on a fresh Mac: ~10 minutes, mostly waiting for Xcode CLT.

The exact steps are in `CLAUDE.md` (the "macOS Setup" section) — the AI assistant you're working with will walk you through them.

---

## Configuration

All site-wide settings live in `_config.yml`. The most commonly changed values:

```yaml
contact_email:    "hello@alisaplaytherapy.com"   # Your contact email
contact_phone:    "+1234567890"                   # Your phone number
contact_location: "[your suburb/area]"          # Where you offer sessions
formspree_url:    "https://formspree.io/f/..."    # Form endpoint from formspree.io
hero_image:       "https://..."                   # Hero background image (URL or local path)
```

To update any of these, edit `_config.yml`, save, and push.

---

## Contact Form

The contact form uses [Formspree](https://formspree.io), a free service that delivers form submissions to your email. To activate it:

1. Create a free account at formspree.io
2. Create a new form and copy the **endpoint URL** (it looks like `https://formspree.io/f/xxxxxxxx`)
3. Paste the endpoint into `_config.yml` as the `formspree_url` value
4. Push to GitHub — the form is now live

If the form ever fails to submit, a fallback email link appears so parents can still reach you.

---

## Custom Domain

The site is already configured for the custom domain **alisaplaytherapy.com** (the `CNAME` file points to it and `baseurl` is set to `""`). No DNS work needed unless the domain moves.

---

## Getting Help

If something doesn't look right after editing:

- **Text looks wrong?** Check `index.md` — each section is clearly labelled with a heading
- **Image not showing?** Make sure the file is named exactly the same as what's referenced (e.g. `hero.jpg` not `Hero.jpg` — file names are case-sensitive)
- **Form not working?** Make sure `formspree_url` in `_config.yml` is filled in with a valid Formspree endpoint
- **CSS not loading?** Hard-refresh your browser (Cmd+Shift+R). If still broken, check that you didn't accidentally change `baseurl` in `_config.yml`
- **Dev server won't start?** Try `bundle install` first, then `bundle exec jekyll serve`

For anything else, the full documentation — including troubleshooting, image handling, blog writing, and deployment — is in `CLAUDE.md`. The AI assistant you're working with should be able to handle most of it for you.