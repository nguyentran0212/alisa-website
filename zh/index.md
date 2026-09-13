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
          <a class="btn btn-primary" href="{{ site.baseurl }}/zh/#contact">{{ site.data.zh.hero.cta_primary }}</a>
          <a class="btn btn-ghost" href="{{ site.baseurl }}/zh/{{ site.data.zh.hero.cta_secondary_url }}">{{ site.data.zh.hero.cta_secondary }}</a>
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
  <!-- ============ 服务项目 (bright) ============ -->
  <!-- Static info cards — no click-to-open. Each card shows title, italic
       tagline, divider, and description + Read More link. -->
  <section id="services">
    <div class="wrap">
      <div class="section-head center">
        <h2>{{ site.data.zh.sections.services.title }}</h2>
        <p>{{ site.data.zh.sections.services.lead }}</p>
      </div>
      <div class="service-grid">
        {%- for s in site.data.zh.sections.services.items -%}
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

  <!-- ============ 常见问题 (dark) ============ -->
  <!-- 费用信息原本在一个独立的版块里，Alisa 担心会让人感觉她只关心钱。
       现在合并到 FAQ 里作为一个默认展开的条目。 -->
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

        <!-- Enquiry form (Formspree). Right column. -->
        <form class="form-card reveal" id="enquiryForm" method="POST" action="{{ site.formspree_url }}" data-fallback-email="{{ site.contact_email }}" style="--d: 0.08s">
          <!-- Honeypot — bots fill it, humans never see it. -->
          <div class="form-field" style="display:none;" aria-hidden="true">
            <input type="text" name="_gotcha" tabindex="-1" autocomplete="off">
          </div>

          <div class="form-row">
            <div class="field">
              <label for="f-name">{{ site.data.zh.form.name_label }}</label>
              <input type="text" id="f-name" name="name" autocomplete="name"
                     placeholder="{{ site.data.zh.form.name_placeholder }}" required aria-describedby="err-name">
              <p class="field-error" id="err-name" hidden></p>
            </div>
            <div class="field">
              <label for="f-phone">{{ site.data.zh.form.phone_label }} <span class="opt">{{ site.data.zh.form.phone_optional }}</span></label>
              <input type="tel" id="f-phone" name="phone" autocomplete="tel"
                     placeholder="{{ site.data.zh.form.phone_placeholder }}" aria-describedby="err-phone">
              <p class="field-error" id="err-phone" hidden></p>
            </div>
          </div>

          <div class="field">
            <label for="f-email">{{ site.data.zh.form.email_label }}</label>
            <input type="email" id="f-email" name="email" autocomplete="email"
                   placeholder="{{ site.data.zh.form.email_placeholder }}" required aria-describedby="err-email">
            <p class="field-error" id="err-email" hidden></p>
          </div>

          <div class="form-row">
            <div class="field">
              <label for="f-age">{{ site.data.zh.form.child_age_label }}</label>
              <input type="text" id="f-age" name="childAge" inputmode="numeric"
                     placeholder="{{ site.data.zh.form.child_age_placeholder }}" required aria-describedby="err-age">
              <p class="field-error" id="err-age" hidden></p>
            </div>
            <div class="field">
              <label for="f-pref">{{ site.data.zh.form.preferred_contact_label }}</label>
              <select id="f-pref" name="preferredContact" aria-describedby="err-pref">
                {%- for opt in site.data.zh.form.preferred_contact_options -%}
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
            <label for="f-msg">{{ site.data.zh.form.message_label }}</label>
            <textarea id="f-msg" name="message" rows="5"
                      placeholder="{{ site.data.zh.form.message_placeholder }}" required aria-describedby="err-msg"></textarea>
            <p class="field-error" id="err-msg" hidden></p>
          </div>

          <div class="form-foot">
            <button type="submit" class="btn btn-primary btn-block" id="submitBtn">{{ site.data.zh.form.submit }}</button>
            <p class="form-foot-note">{{ site.data.zh.form.confidential }}</p>
          </div>

          <p class="form-status" id="formStatus" role="status" aria-live="polite"></p>
        </form>

        <div class="form-success" id="formSuccess" hidden tabindex="-1">
          <div class="success-tick" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12l5 5L20 7"/>
            </svg>
          </div>
          <h3>{{ site.data.zh.form.success_heading }}</h3>
          <p>{{ site.data.zh.form.success_body }}</p>
        </div>
      </div>
    </div>
  </section>

</main>