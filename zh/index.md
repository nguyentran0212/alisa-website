---
layout: default
title: "在游戏中，遇见孩子 | 阿德莱德 3-8 岁儿童游戏治疗"
description: "为3-8岁的孩子与家庭提供游戏治疗支持。在游戏中，帮助孩子学会调节情绪、建立自信、掌握社交技巧，并与父母一起建立更安全、更温暖的亲子联结。"
lang: zh
permalink: /zh/
---

<main id="main">

  <!-- ============ HERO ============ -->
  <section class="hero">
    <div class="hero-art" aria-hidden="true">
      <img src="{{ site.hero_image }}" alt="">
    </div>
    <div class="hero-gradient" aria-hidden="true"></div>

    <div class="wrap">
      <div class="hero-copy reveal">
        <p class="eyebrow">{{ site.data.zh.hero.eyebrow }}</p>
        <h1>{{ site.data.zh.hero.title }}</h1>
        <p class="lede">{{ site.data.zh.hero.subtitle }}</p>
        <p class="hero-meta-text">{{ site.data.zh.hero.meta }}</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="{{ site.data.zh.splose_form_url }}" target="_blank" rel="noopener">{{ site.data.zh.hero.cta_primary }}</a>
          <a class="btn btn-ghost" href="{{ site.data.zh.discovery_call_url }}">{{ site.data.zh.hero.cta_secondary }}</a>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ 什么是游戏治疗 (bright) ============ -->
  <section id="what-is-play-therapy">
    <div class="wrap">
      <div class="what-is-grid">
        <div class="what-is-text reveal">
          <p class="eyebrow">{{ site.data.zh.sections.what_is_play_therapy.eyebrow }}</p>
          <h2>{{ site.data.zh.sections.what_is_play_therapy.title }}</h2>
          <div class="prose">
            {{ site.data.zh.sections.what_is_play_therapy.body_html }}
          </div>
        </div>
        <div class="what-is-art reveal" style="--d: 0.08s">
          <img src="{{ site.baseurl }}/assets/images/what-is-play-therapy.jpg" alt="">
        </div>
      </div>
    </div>
  </section>

  <!-- ============ 游戏治疗适合我的孩子吗？(bright) ============ -->
  <section id="is-this-for-my-child">
    <div class="wrap">
      <div class="section-head center">
        <h2>{{ site.data.zh.sections.is_this_for_my_child.title }}</h2>
      </div>
      <div class="for-my-child-grid">
        {%- for item in site.data.zh.sections.is_this_for_my_child.items -%}
        <div class="card-for-child reveal" style="--d: {{ forloop.index0 | times: 0.08 }}s">
          <h3>{{ item.title }}</h3>
          <p>{{ item.body }}</p>
        </div>
        {%- endfor -%}
      </div>
      <div class="section-actions">
        <a class="btn btn-ghost" href="{{ site.baseurl }}{{ site.data.zh.sections.is_this_for_my_child.cta_url }}">{{ site.data.zh.sections.is_this_for_my_child.cta }}</a>
      </div>
    </div>
  </section>

  <!-- ============ 关于 Alisa (dark) ============ -->
  <section id="about" class="bg-band">
    <div class="wrap">
      <div class="about-home-grid">
        <div class="about-home-art reveal">
          <img src="{{ site.baseurl }}/assets/images/alisa.png" alt="Alisa Liao，注册游戏治疗师">
        </div>
        <div class="about-home-bio reveal" style="--d: 0.08s">
          <p class="eyebrow">{{ site.data.zh.sections.about.eyebrow }}</p>
          <h2>{{ site.data.zh.sections.about.title }}</h2>
          {{ site.data.zh.sections.about.bio_html }}
          <p class="about-home-credentials"><strong>{{ site.data.zh.sections.about.credentials }}</strong></p>
          <div class="section-actions" style="justify-content: flex-start; margin-top: var(--s-8);">
            <a class="btn btn-ghost" href="{{ site.baseurl }}{{ site.data.zh.sections.about.cta_url }}">{{ site.data.zh.sections.about.cta }}</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ 服务项目 (bright) ============ -->
  <section id="services">
    <div class="wrap">
      <div class="section-head center">
        <p class="eyebrow">{{ site.data.zh.sections.services.eyebrow }}</p>
        <h2>{{ site.data.zh.sections.services.title }}</h2>
        <p>{{ site.data.zh.sections.services.lead }}</p>
      </div>
      <div class="service-grid">
        {%- for s in site.data.zh.sections.services.items -%}
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

  <!-- ============ 费用 (bright) ============ -->
  <section id="fees">
    <div class="wrap">
      <div class="fees-intro">
        <p class="eyebrow">{{ site.data.zh.sections.fees.eyebrow }}</p>
        <h2>{{ site.data.zh.sections.fees.title }}</h2>
        <p>{{ site.data.zh.sections.fees.lead }}</p>
      </div>
      <div class="fees-card reveal">
        <h3 class="fees-group-title">{{ site.data.zh.sections.fees.private_title }}</h3>
        {%- for fee in site.data.zh.sections.fees.private -%}
        <div class="fee-item">
          <div class="fee-name">{{ fee.name }}</div>
          <div class="fee-price {% if fee.unit == '' %}is-words{% endif %}">
            {{ fee.price }}{% if fee.unit != '' %}<span class="fee-unit">{{ fee.unit }}</span>{% endif %}
          </div>
        </div>
        {%- endfor -%}
        <h3 class="fees-group-title fees-group-title-second">{{ site.data.zh.sections.fees.ndis_title }}</h3>
        {%- for fee in site.data.zh.sections.fees.ndis -%}
        <div class="fee-item">
          <div class="fee-name">{{ fee.name }}</div>
          <div class="fee-price {% if fee.unit == '' %}is-words{% endif %}">
            {{ fee.price }}{% if fee.unit != '' %}<span class="fee-unit">{{ fee.unit }}</span>{% endif %}
          </div>
        </div>
        {%- endfor -%}
        <p class="fees-note">{{ site.data.zh.sections.fees.note }}</p>
        <p class="fees-note">{{ site.data.zh.sections.fees.note_2 }}</p>
      </div>
    </div>
  </section>

  <!-- ============ 常见问题 (dark) ============ -->
  <section id="faq" class="bg-band">
    <div class="wrap">
      <div class="section-head center">
        <p class="eyebrow">{{ site.data.zh.sections.faq.eyebrow }}</p>
        <h2>{{ site.data.zh.sections.faq.title }}</h2>
      </div>
      <div class="faq">
        <ul class="faq-list">
          {%- for item in site.data.zh.sections.faq.items -%}
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
        <p class="faq-lead"><a href="{{ site.data.zh.sections.faq.lead_url }}" class="faq-lead-link">{{ site.data.zh.sections.faq.lead }}</a></p>
      </div>
    </div>
  </section>

  <!-- ============ 博客精选 (bright) ============ -->
  <section id="blog">
    <div class="wrap">
      <div class="section-head center">
        <p class="eyebrow">{{ site.data.zh.blog.from_the_blog }}</p>
        <h2>{{ site.data.zh.blog.recent_articles }}</h2>
      </div>
      <div class="post-list">
        {%- assign zh_posts = site.posts | where: "lang", "zh" | sort: "featured_order" -%}
        {%- for post in zh_posts limit: 2 -%}
        <article class="post-card reveal" style="--d: {{ forloop.index0 | times: 0.06 }}s">
          <h3><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h3>
          <p class="post-meta"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y 年 %m 月 %d 日" }}</time></p>
          {%- if post.excerpt -%}
          <p class="post-excerpt">{{ post.excerpt }}</p>
          {%- endif -%}
          <a href="{{ site.baseurl }}{{ post.url }}" class="post-read-more">{{ site.data.zh.blog.read_more }}</a>
        </article>
        {%- endfor -%}
      </div>
      <div class="section-actions">
        <a class="btn btn-ghost" href="{{ site.baseurl }}/zh/blog/">{{ site.data.zh.blog.view_all }}</a>
      </div>
    </div>
  </section>

  <!-- ============ 联系我 (dark) ============ -->
  <section id="contact" class="bg-band">
    <div class="wrap">
      <div class="contact-grid">
        <div class="contact-info reveal">
          <div class="section-head">
            <p class="eyebrow">{{ site.data.zh.sections.contact.eyebrow }}</p>
            <h2>{{ site.data.zh.sections.contact.title }}</h2>
          </div>
          <div class="contact-lead-html">{{ site.data.zh.sections.contact.lead_html }}</div>
          <div class="contact-cta-row">
            <a class="btn btn-primary" href="{{ site.data.zh.splose_form_url }}" target="_blank" rel="noopener">{{ site.data.zh.sections.contact.primary_cta }}</a>
            <a class="btn btn-ghost" href="{{ site.data.zh.discovery_call_url }}">{{ site.data.zh.sections.contact.secondary_cta }}</a>
          </div>
        </div>

        <ul class="contact-list reveal" style="--d: 0.08s">
          {%- for c in site.data.zh.sections.contact.items -%}
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