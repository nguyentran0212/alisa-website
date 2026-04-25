# Alisa Play Therapy Website

A warm, calming landing page for a play therapist. Built to help parents find out about play therapy, decide if it's right for their child, and get in touch.

**Live site:** https://nk-tran.com/alisa-website/

---

## About This Site

This site is built with [Jekyll](https://jekyllrb.com/), a static site generator that GitHub Pages runs automatically — no hosting dashboard, no build commands needed. Content is written in plain English in Markdown files, not HTML.

This means Alisa (or anyone helping her) can update the text on the site without touching any code.

---

## Editing the Site

### What Can Be Changed

| What | Where to edit |
|---|---|
| Any section text (hero, about, FAQ, services, contact) | `index.md` |
| Full bio and qualifications | `about.md` |
| Contact details (email, phone, location) | `_config.yml` |
| Hero background image | `_config.yml` → `hero_image` |
| Form submission endpoint | `_config.yml` → `formspree_url` |
| Logo images | Replace files in `assets/images/` |

### How to Run the Site Locally

```bash
bundle exec jekyll serve --port 4000 --host 127.0.0.1
```

Then open **http://localhost:4000/alisa-website/** in your browser.

> Note: the `/alisa-website/` subdirectory is part of the local dev URL. When running on the final domain (`alisaplaytherapy.com`), this won't be needed.

### How to Deploy

Push any changes to the `main` branch on GitHub. GitHub Pages will build and publish the site automatically — usually within 1–2 minutes.

---

## Configuration

All site-wide settings live in `_config.yml`. The most commonly changed values:

```yaml
contact_email:    "hello@alisaplaytherapy.com"   # Your contact email
contact_phone:    "+1234567890"                   # Your phone number
contact_location: "[your suburb/area]"          # Where you offer sessions
formspree_url:    ""                              # Form endpoint from formspree.io
hero_image:       "/assets/images/hero.jpg"       # Hero background image
```

To update any of these, edit `_config.yml` and push.

---

## Contact Form

The contact form uses [Formspree](https://formspree.io), a free service that handles form submissions and delivers them to your email. To activate it:

1. Create a free account at formspree.io
2. Create a new form and copy the **endpoint URL** (it looks like `https://formspree.io/f/xxxxxxxx`)
3. Paste the endpoint into `_config.yml` as the `formspree_url` value
4. Push to GitHub — the form is now live

If the form ever fails to submit, a fallback email link appears so parents can still reach you.

---

## Custom Domain

When you're ready to point `alisaplaytherapy.com` to this site:

1. In your DNS settings, add a CNAME record pointing your domain to `nk-tran.com`
2. In the GitHub repo → **Settings → Pages**, enter your custom domain
3. Change `baseurl` in `_config.yml` from `"/alisa-website"` to `""` (empty)
4. Push — the site is now live at `alisaplaytherapy.com`

---

## Getting Help

If something doesn't look right after editing:

- **Text looks wrong?** Check `index.md` — each section is clearly labelled
- **Image not showing?** Make sure the file is named exactly the same (e.g. `hero.jpg` not `Hero.jpg`)
- **Form not working?** Make sure `formspree_url` in `_config.yml` is filled in with a valid Formspree endpoint
- **CSS not loading?** Make sure `baseurl` in `_config.yml` matches your deployment path
- **Dev server won't start?** Try `bundle install` first, then `bundle exec jekyll serve`

For anything else, the full technical documentation is in `CLAUDE.md`.
