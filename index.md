---
layout: default
title: "Held in Play | Play Therapy in Adelaide for Ages 3-8"
description: "Play therapy in Adelaide for children aged 3-8 and their families. Supporting emotional regulation, confidence, social skills, and stronger family connections."
lang: en
permalink: /
---

<main id="main">

  <!-- ============ HERO ============ -->
  <!-- Full-width image sits behind the text. A left-to-right gradient overlay
       (~60% wide) softens the image where the copy sits, so the heading stays
       readable without a hard edge. The image is bleed to both edges. -->
  <section class="hero">
    <div class="hero-art" aria-hidden="true">
      <img src="{{ site.hero_image }}" alt="">
    </div>
    <div class="hero-gradient" aria-hidden="true"></div>

    <div class="wrap">
      <div class="hero-copy reveal">
        <p class="eyebrow">{{ site.data.en.hero.eyebrow }}</p>
        <h1>{{ site.data.en.hero.title }}</h1>
        <p class="lede">{{ site.data.en.hero.subtitle }}</p>
        <p class="hero-meta-text">{{ site.data.en.hero.meta }}</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="{{ site.baseurl }}/#contact">{{ site.data.en.hero.cta_primary }}</a>
          <a class="btn btn-ghost" href="{{ site.baseurl }}{{ site.data.en.hero.cta_secondary_url }}">{{ site.data.en.hero.cta_secondary }}</a>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ WHAT IS PLAY THERAPY (bright) ============ -->
  <section id="what-is-play-therapy">
    <div class="wrap">
      <div class="what-is-grid">
        <div class="what-is-text reveal">
          <p class="eyebrow">{{ site.data.en.sections.what_is_play_therapy.eyebrow }}</p>
          <h2>{{ site.data.en.sections.what_is_play_therapy.title }}</h2>
          <div class="prose">
            {{ site.data.en.sections.what_is_play_therapy.body_html }}
          </div>
        </div>
        <div class="what-is-art reveal" style="--d: 0.08s">
          <img src="{{ site.baseurl }}/assets/images/what-is-play-therapy.jpg" alt="A child sitting in a sunlit meadow of daisies, viewed from behind">
        </div>
      </div>
    </div>
  </section>

  <!-- ============ IS THIS FOR MY CHILD (bright) ============ -->
  <section id="is-this-for-my-child">
    <div class="wrap">
      <div class="section-head center">
        <h2>{{ site.data.en.sections.is_this_for_my_child.title }}</h2>
      </div>
      <div class="for-my-child-grid">
        {%- for item in site.data.en.sections.is_this_for_my_child.items -%}
        <div class="card-for-child reveal" style="--d: {{ forloop.index0 | times: 0.08 }}s">
          <h3>{{ item.title }}</h3>
          <p>{{ item.body }}</p>
        </div>
        {%- endfor -%}
      </div>
      <div class="section-actions">
        <a class="btn btn-ghost" href="{{ site.baseurl }}{{ site.data.en.sections.is_this_for_my_child.cta_url }}">{{ site.data.en.sections.is_this_for_my_child.cta }}</a>
      </div>
    </div>
  </section>

  <!-- ============ ABOUT ALISA (dark) ============ -->
  <section id="about" class="bg-band">
    <div class="wrap">
      <div class="about-home-grid">
        <div class="about-home-art reveal">
          <img src="{{ site.baseurl }}/assets/images/alisa.png" alt="Alisa Liao, Registered Play Therapist">
        </div>
        <div class="about-home-bio reveal" style="--d: 0.08s">
          <p class="eyebrow">{{ site.data.en.sections.about.eyebrow }}</p>
          <h2>{{ site.data.en.sections.about.title }}</h2>
          {{ site.data.en.sections.about.bio_html }}
          <p class="about-home-credentials"><strong>{{ site.data.en.sections.about.credentials }}</strong></p>
          <div class="section-actions" style="justify-content: flex-start; margin-top: var(--s-8);">
            <a class="btn btn-ghost" href="{{ site.baseurl }}{{ site.data.en.sections.about.cta_url }}">{{ site.data.en.sections.about.cta }}</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ SERVICES (bright) ============ -->
  <!-- ============ SERVICES (bright) ============ -->
  <!-- Static info cards — no click-to-open. Each card shows title, italic
       tagline, divider, and description + Read More link. -->
  <section id="services">
    <div class="wrap">
      <div class="section-head center">
        <h2>{{ site.data.en.sections.services.title }}</h2>
        <p>{{ site.data.en.sections.services.lead }}</p>
      </div>
      <div class="service-grid">
        {%- for s in site.data.en.sections.services.items -%}
        <article class="service-card reveal" style="--d: {{ forloop.index0 | times: 0.08 }}s">
          <h3 class="service-card-title">{{ s.title }}</h3>
          <div class="service-card-divider" aria-hidden="true"></div>
          <p class="service-card-lead">{{ s.lead }}</p>
          <p class="service-card-body">{{ s.body }}</p>
          <a class="service-card-cta" href="{{ site.baseurl }}{{ s.cta_url }}">{{ s.cta }} →</a>
        </article>
        {%- endfor -%}
      </div>
    </div>
  </section>

  <!-- ============ FAQ (dark) ============ -->
  <!-- Fees used to live in its own section; Alisa worried the dedicated
       block read as "all about money". Moved here as a default-open
       accordion item so it still lives in the FAQ where it naturally
       belongs. -->
  <section id="faq" class="bg-band">
    <div class="wrap">
      <div class="section-head center">
        <p class="eyebrow">{{ site.data.en.sections.faq.eyebrow }}</p>
        <h2>{{ site.data.en.sections.faq.title }}</h2>
      </div>
      <div class="faq">
        <ul class="faq-list">
          {%- for item in site.data.en.sections.faq.items -%}
          <li class="reveal" style="--d: {{ forloop.index0 | times: 0.05 }}s">
            <details {% if item.open %}open{% endif %}>
              <summary>{{ item.q }}</summary>
              <div class="answer">
                {%- if item.a_html -%}
                  {{ item.a_html }}
                {%- else -%}
                  <p>{{ item.a }}</p>
                {%- endif -%}
              </div>
            </details>
          </li>
          {%- endfor -%}
        </ul>
        <p class="faq-lead"><a href="{{ site.data.en.sections.faq.lead_url }}" class="faq-lead-link">{{ site.data.en.sections.faq.lead }}</a></p>
      </div>
    </div>
  </section>

  <!-- ============ BLOG TEASER (bright) ============ -->
  <section id="blog">
    <div class="wrap">
      <div class="section-head center">
        <p class="eyebrow">{{ site.data.en.blog.from_the_blog }}</p>
        <h2>{{ site.data.en.blog.recent_articles }}</h2>
      </div>
      <div class="post-list">
        {%- assign en_posts = site.posts | where: "lang", "en" | sort: "featured_order" -%}
        {%- for post in en_posts limit: 2 -%}
        <article class="post-card reveal" style="--d: {{ forloop.index0 | times: 0.06 }}s">
          <h3><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h3>
          <p class="post-meta"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time></p>
          {%- if post.excerpt -%}
          <p class="post-excerpt">{{ post.excerpt }}</p>
          {%- endif -%}
          <a href="{{ site.baseurl }}{{ post.url }}" class="post-read-more">{{ site.data.en.blog.read_more }}</a>
        </article>
        {%- endfor -%}
      </div>
      <div class="section-actions">
        <a class="btn btn-ghost" href="{{ site.baseurl }}/blog/">{{ site.data.en.blog.view_all }}</a>
      </div>
    </div>
  </section>

  <!-- ============ CONTACT (dark) ============ -->
  <section id="contact" class="bg-band">
    <div class="wrap">
      <div class="contact-grid">
        <div class="contact-info reveal">
          <div class="section-head">
            <p class="eyebrow">{{ site.data.en.sections.contact.eyebrow }}</p>
            <h2>{{ site.data.en.sections.contact.title }}</h2>
          </div>

          <ul class="contact-list reveal" style="--d: 0.08s">
            {%- for c in site.data.en.sections.contact.items -%}
            <li>
              <span class="contact-ico" aria-hidden="true">
                {%- case forloop.index -%}
                  {%- when 1 -%}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
                  {%- when 2 -%}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>
                  {%- else -%}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-7-9-12a9 9 0 0 1 18 0c-2 5-9 12-9 12z"/><circle cx="12" cy="9" r="2.5"/></svg>
                {%- endcase -%}
              </span>
              <div>
                <span class="label">{{ c.label }}</span>
                {%- if c.href -%}
                  <a href="{{ c.href }}">{{ c.value }}</a>
                {%- else -%}
                  <span>{{ c.value }}</span>
                {%- endif -%}
              </div>
            </li>
            {%- endfor -%}
          </ul>
        </div>

        <!-- Enquiry form (Formspree). Right column. -->
        <form class="form-card reveal" id="enquiryForm" method="POST" action="{{ site.formspree_url }}" data-fallback-email="{{ site.contact_email }}" style="--d: 0.08s">
          <!-- Honeypot — bots fill it, humans never see it. -->
          <div class="form-field" style="display:none;" aria-hidden="true">
            <input type="text" name="_gotcha" tabindex="-1" autocomplete="off">
          </div>

          <div class="form-row">
            <div class="field">
              <label for="f-name">{{ site.data.en.form.name_label }}</label>
              <input type="text" id="f-name" name="name" autocomplete="name"
                     placeholder="{{ site.data.en.form.name_placeholder }}" required aria-describedby="err-name">
              <p class="field-error" id="err-name" hidden></p>
            </div>
            <div class="field">
              <label for="f-phone">{{ site.data.en.form.phone_label }} <span class="opt">{{ site.data.en.form.phone_optional }}</span></label>
              <input type="tel" id="f-phone" name="phone" autocomplete="tel"
                     placeholder="{{ site.data.en.form.phone_placeholder }}" aria-describedby="err-phone">
              <p class="field-error" id="err-phone" hidden></p>
            </div>
          </div>

          <div class="field">
            <label for="f-email">{{ site.data.en.form.email_label }}</label>
            <input type="email" id="f-email" name="email" autocomplete="email"
                   placeholder="{{ site.data.en.form.email_placeholder }}" required aria-describedby="err-email">
            <p class="field-error" id="err-email" hidden></p>
          </div>

          <div class="form-row">
            <div class="field">
              <label for="f-age">{{ site.data.en.form.child_age_label }}</label>
              <input type="text" id="f-age" name="childAge" inputmode="numeric"
                     placeholder="{{ site.data.en.form.child_age_placeholder }}" required aria-describedby="err-age">
              <p class="field-error" id="err-age" hidden></p>
            </div>
            <div class="field">
              <label for="f-pref">{{ site.data.en.form.preferred_contact_label }}</label>
              <select id="f-pref" name="preferredContact" aria-describedby="err-pref">
                {%- for opt in site.data.en.form.preferred_contact_options -%}
                  {%- if forloop.first -%}
                    <option selected>{{ opt }}</option>
                  {%- else -%}
                    <option>{{ opt }}</option>
                  {%- endif -%}
                {%- endfor -%}
              </select>
              <p class="field-error" id="err-pref" hidden></p>
            </div>
          </div>

          <div class="field">
            <label for="f-msg">{{ site.data.en.form.message_label }}</label>
            <textarea id="f-msg" name="message" rows="5"
                      placeholder="{{ site.data.en.form.message_placeholder }}" required aria-describedby="err-msg"></textarea>
            <p class="field-error" id="err-msg" hidden></p>
          </div>

          <div class="form-foot">
            <button type="submit" class="btn btn-primary btn-block" id="submitBtn">{{ site.data.en.form.submit }}</button>
            <p class="form-foot-note">{{ site.data.en.form.confidential }}</p>
          </div>

          <p class="form-status" id="formStatus" role="status" aria-live="polite"></p>
        </form>

        <div class="form-success" id="formSuccess" hidden tabindex="-1">
          <div class="success-tick" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12l5 5L20 7"/>
            </svg>
          </div>
          <h3>{{ site.data.en.form.success_heading }}</h3>
          <p>{{ site.data.en.form.success_body }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ CTA BAND (warm, between contact and footer) ============
       Mirrors the freetobeplay reference: heading on the left, vertical
       hairline divider, big primary button on the right linking to the
       Splose external form. Sits on --band-tint so it reads as a
       distinct strip after the contact section's --band. -->
  <section class="cta-band">
    <div class="wrap">
      <div class="cta-grid">
        <div class="cta-text">
          <h2>{{ site.data.en.sections.cta.heading }}</h2>
        </div>
        <div class="cta-divider" aria-hidden="true"></div>
        <div class="cta-action">
          <a class="btn btn-primary" href="{{ site.data.en.splose_form_url }}" target="_blank" rel="noopener">{{ site.data.en.sections.cta.cta }}</a>
        </div>
      </div>
    </div>
  </section>

</main>