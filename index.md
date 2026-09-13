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
          <a class="btn btn-primary" href="{{ site.data.en.splose_form_url }}" target="_blank" rel="noopener">{{ site.data.en.hero.cta_primary }}</a>
          <a class="btn btn-ghost" href="{{ site.data.en.discovery_call_url }}">{{ site.data.en.hero.cta_secondary }}</a>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ WHAT IS PLAY THERAPY (bright) ============ -->
  <section id="what-is-play-therapy">
    <div class="wrap">
      <div class="section-head center">
        <p class="eyebrow">{{ site.data.en.sections.what_is_play_therapy.eyebrow }}</p>
        <h2>{{ site.data.en.sections.what_is_play_therapy.title }}</h2>
      </div>
      <div class="prose reveal">
        {{ site.data.en.sections.what_is_play_therapy.body_html }}
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
  <section id="services">
    <div class="wrap">
      <div class="section-head center">
        <p class="eyebrow">{{ site.data.en.sections.services.eyebrow }}</p>
        <h2>{{ site.data.en.sections.services.title }}</h2>
        <p>{{ site.data.en.sections.services.lead }}</p>
      </div>
      <div class="service-grid">
        {%- for s in site.data.en.sections.services.items -%}
        <details class="service reveal" style="--d: {{ forloop.index0 | times: 0.08 }}s">
          <summary>
            <span class="service-ico" aria-hidden="true">
              {%- case forloop.index -%}
                {%- when 1 -%}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="10" cy="11" r="1"/><circle cx="14" cy="11" r="1"/><path d="M8.5 15.5c1 1 2 1.5 3.5 1.5s2.5-.5 3.5-1.5"/></svg>
                {%- when 2 -%}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9h6V4l8 8-8 8v-5H4z"/></svg>
                {%- else -%}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M7 11V8a5 5 0 0 1 10 0v3"/><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M12 15v2"/></svg>
              {%- endcase -%}
            </span>
            <span class="service-head">
              <span class="service-title">{{ s.title }}</span>
              <span class="service-sub">{{ s.sub }}</span>
            </span>
          </summary>
          <div class="service-body">
            <p class="service-lead">{{ s.lead }}</p>
            <p>{{ s.body }}</p>
            <a class="service-cta" href="{{ site.baseurl }}{{ s.cta_url }}">{{ s.cta }} →</a>
          </div>
        </details>
        {%- endfor -%}
      </div>
    </div>
  </section>

  <!-- ============ FEES (bright) ============ -->
  <section id="fees">
    <div class="wrap">
      <div class="fees-intro">
        <p class="eyebrow">{{ site.data.en.sections.fees.eyebrow }}</p>
        <h2>{{ site.data.en.sections.fees.title }}</h2>
        <p>{{ site.data.en.sections.fees.lead }}</p>
      </div>
      <div class="fees-card reveal">
        <h3 class="fees-group-title">{{ site.data.en.sections.fees.private_title }}</h3>
        {%- for fee in site.data.en.sections.fees.private -%}
        <div class="fee-item">
          <div class="fee-name">{{ fee.name }}</div>
          <div class="fee-price {% if fee.unit == '' %}is-words{% endif %}">
            {{ fee.price }}{% if fee.unit != '' %}<span class="fee-unit">{{ fee.unit }}</span>{% endif %}
          </div>
        </div>
        {%- endfor -%}
        <h3 class="fees-group-title fees-group-title-second">{{ site.data.en.sections.fees.ndis_title }}</h3>
        {%- for fee in site.data.en.sections.fees.ndis -%}
        <div class="fee-item">
          <div class="fee-name">{{ fee.name }}</div>
          <div class="fee-price {% if fee.unit == '' %}is-words{% endif %}">
            {{ fee.price }}{% if fee.unit != '' %}<span class="fee-unit">{{ fee.unit }}</span>{% endif %}
          </div>
        </div>
        {%- endfor -%}
        <p class="fees-note">{{ site.data.en.sections.fees.note }}</p>
      </div>
    </div>
  </section>

  <!-- ============ FAQ (dark) ============ -->
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
            <details>
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
          <div class="contact-lead-html">{{ site.data.en.sections.contact.lead_html }}</div>
          <div class="contact-cta-row">
            <a class="btn btn-primary" href="{{ site.data.en.splose_form_url }}" target="_blank" rel="noopener">{{ site.data.en.sections.contact.primary_cta }}</a>
            <a class="btn btn-ghost" href="{{ site.data.en.discovery_call_url }}">{{ site.data.en.sections.contact.secondary_cta }}</a>
          </div>
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
    </div>
  </section>

</main>