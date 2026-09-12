---
layout: default
title: "Alisa 游戏治疗 | 阿德莱德 3-8 岁儿童游戏治疗师"
description: "为3-8岁儿童提供游戏治疗支持，关注情绪调节、行为与亲子联结。阿德莱德市区上门服务及线上治疗。"
lang: zh
permalink: /zh/
---

<a class="skip" href="#main">跳至正文</a>

<main id="main">

  <!-- ============ HERO ============ -->
  <section class="hero">
    <div class="wrap">
      <div class="hero-copy">
        <p class="eyebrow">{{ site.data.zh.hero.eyebrow }}</p>
        {%- assign title = site.data.zh.hero.title -%}
        {%- assign accent_word = site.data.zh.hero.title_accent -%}
        {%- assign parts = title | split: accent_word -%}
        <h1>{{ parts[0] }}<span class="accent">{{ accent_word }}</span>{{ parts[1] }}</h1>
        <p class="lede">{{ site.data.zh.hero.subtitle }}</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#contact">{{ site.data.zh.hero.cta_primary }}</a>
          <a class="btn btn-ghost" href="#approach">{{ site.data.zh.hero.cta_secondary }}</a>
        </div>
      </div>
    </div>
    <!-- hero photo: sibling of .wrap so it can bleed to the right edge -->
    <div class="hero-art reveal" aria-hidden="true">
      <div class="organic-frame">
        <img src="{{ site.hero_image }}" alt="">
      </div>
    </div>
  </section>

  <!-- ============ APPROACH ============ -->
  <section class="bg-band section-short" id="approach">
    <div class="wrap">
      <div class="section-head center">
        <p class="eyebrow">{{ site.data.zh.sections.approach.eyebrow }}</p>
        <h2>{{ site.data.zh.sections.approach.title }}</h2>
        <p>{{ site.data.zh.sections.approach.lead }}</p>
      </div>
      <div class="pillars">
        {%- for p in site.data.zh.sections.approach.pillars -%}
        <div class="pillar reveal" {% unless forloop.first %}style="--d: {{ forloop.index0 | times: 0.08 }}s"{% endunless %}>
          <span class="pillar-ico" aria-hidden="true">
            {%- case forloop.index -%}
              {%- when 1 -%}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-4.5-9.5-9.5C.5 7 5 3 8.5 4.5 10 5 11 6 12 7c1-1 2-2 3.5-2.5C19 3 23.5 7 21.5 11.5 19 16.5 12 21 12 21z"/></svg>
              {%- when 2 -%}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4z"/><path d="M9 12l2 2 4-4"/></svg>
              {%- else -%}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2 21v-2a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v2"/><circle cx="17" cy="9" r="2.5"/><path d="M22 19v-1a3.5 3.5 0 0 0-3-3.5"/></svg>
            {%- endcase -%}
          </span>
          <h3>{{ p.title }}</h3>
          <p>{{ p.body }}</p>
        </div>
        {%- endfor -%}
      </div>
    </div>
  </section>

  <!-- ============ SERVICES ============ -->
  <section id="services">
    <div class="wrap">
      <div class="section-head center">
        <p class="eyebrow">{{ site.data.zh.sections.services.eyebrow }}</p>
        <h2>{{ site.data.zh.sections.services.title }}</h2>
        <p>{{ site.data.zh.sections.services.lead }}</p>
      </div>
      <div class="service-grid">
        {%- for s in site.data.zh.sections.services.items -%}
        <details class="service reveal" {% unless forloop.first %}style="--d: {{ forloop.index0 | times: 0.08 }}s"{% endunless %}>
          <summary>
            <span class="service-ico" aria-hidden="true">
              {%- case forloop.index -%}
                {%- when 1 -%}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9h6V4l8 8-8 8v-5H4z"/></svg>
                {%- when 2 -%}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="10" cy="11" r="1"/><circle cx="14" cy="11" r="1"/><path d="M8.5 15.5c1 1 2 1.5 3.5 1.5s2.5-.5 3.5-1.5"/></svg>
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
            {%- if s.list -%}
            <p class="service-list-intro">{{ s.list_intro }}</p>
            <ul class="service-list">
              {%- for li in s.list -%}<li>{{ li }}</li>{%- endfor -%}
            </ul>
            {%- endif -%}
          </div>
        </details>
        {%- endfor -%}
      </div>
    </div>
  </section>

  <!-- ============ PROCESS ============ -->
  <section id="process">
    <div class="wrap">
      <div class="section-head center">
        <p class="eyebrow">{{ site.data.zh.sections.process.eyebrow }}</p>
        <h2>{{ site.data.zh.sections.process.title }}</h2>
        <p>{{ site.data.zh.sections.process.lead }}</p>
      </div>
      <div class="process">
        <ol class="steps">
          {%- for step in site.data.zh.sections.process.steps -%}
          <li class="step reveal" style="--d: {{ forloop.index0 | times: 0.08 }}s">
            <span class="step-pin" aria-hidden="true">{{ forloop.index }}</span>
            <div>
              <span class="step-num">第 {{ forloop.index }} 步</span>
              <h3>{{ step.title }}</h3>
              <p>{{ step.body }}</p>
            </div>
          </li>
          {%- endfor -%}
        </ol>
      </div>
    </div>
  </section>

  <!-- ============ ABOUT ============ -->
  <section id="about">
    <div class="wrap">
      <div class="about-grid">
        <div class="about-art reveal">
          <img src="{{ site.baseurl }}/assets/images/alisa.png" alt="Alisa Liao，注册游戏治疗师">
        </div>
        <div class="about-copy">
          <p class="eyebrow">{{ site.data.zh.sections.about.eyebrow }}</p>
          <h2>{{ site.data.zh.sections.about.title }}</h2>
          {{ site.data.zh.sections.about.bio_html }}
          <p><a class="btn btn-ghost" href="{{ site.baseurl }}/zh/about">{{ site.data.zh.buttons.read_full_bio }}</a></p>
          <div class="creds">
            <p class="creds-title">{{ site.data.zh.sections.about.credentials_title }}</p>
            <ul class="creds-list">
              {%- for c in site.data.zh.sections.about.credentials -%}
              <li>
                <strong>{{ c.what }}</strong>
                {%- if c.where %} <span class="what">{{ c.where }}</span>{%- endif -%}
              </li>
              {%- endfor -%}
            </ul>
            <div class="memberships">
              <img src="{{ site.baseurl }}/assets/images/appta-logo.png" alt="APPTA — 澳大拉西亚太平洋游戏治疗协会">
              <img src="{{ site.baseurl }}/assets/images/ptpa-logo.png" alt="PTPA — 游戏治疗师执业协会">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ FAQ ============ -->
  <section class="bg-band" id="faq">
    <div class="wrap">
      <div class="section-head center">
        <p class="eyebrow">{{ site.data.zh.sections.faq.eyebrow }}</p>
        <h2>{{ site.data.zh.sections.faq.title }}</h2>
        <p>{{ site.data.zh.sections.faq.lead }}</p>
      </div>
      <div class="faq">
        <ul class="faq-list">
          {%- for item in site.data.zh.sections.faq.items -%}
          <li class="reveal" {% unless forloop.first %}style="--d: {{ forloop.index0 | times: 0.05 }}s"{% endunless %}>
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
      </div>
    </div>
  </section>

  <!-- ============ FEES ============ -->
  <section id="fees">
    <div class="wrap">
      <div class="fees-intro">
        <p class="eyebrow">{{ site.data.zh.sections.fees.eyebrow }}</p>
        <h2>{{ site.data.zh.sections.fees.title }}</h2>
        <p>{{ site.data.zh.sections.fees.lead }}</p>
      </div>
      <div class="fees-card reveal">
        {%- for fee in site.data.zh.sections.fees.items -%}
        <div class="fee-item">
          <div>
            <div class="fee-name">{{ fee.name }}</div>
            <div class="fee-detail">{{ fee.detail }}</div>
          </div>
          <div class="fee-price {% if fee.price == '面议' %}is-words{% endif %}">
            {{ fee.price }}
            {%- if fee.unit %}<span class="fee-unit">{{ fee.unit }}</span>{%- endif -%}
          </div>
        </div>
        {%- endfor -%}
      </div>
    </div>
  </section>

  <!-- ============ CONTACT ============ -->
  <section id="contact">
    <div class="wrap">
      <div class="contact-grid">
        <div class="contact-info">
          <div class="section-head">
            <p class="eyebrow">{{ site.data.zh.sections.contact.eyebrow }}</p>
            <h2>{{ site.data.zh.sections.contact.title }}</h2>
          </div>
          <p class="contact-lead">{{ site.data.zh.sections.contact.lead }}</p>
          <ul class="contact-list">
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

        <form class="form-card reveal" id="enquiryForm" action="{{ site.formspree_url }}" method="POST" novalidate>
          <div class="form-row">
            <div class="field">
              <label for="f-name">{{ site.data.zh.form.name_label }}</label>
              <input id="f-name" name="name" type="text" autocomplete="name" required aria-describedby="err-name">
              <span class="field-error" id="err-name" hidden></span>
            </div>
            <div class="field">
              <label for="f-phone">{{ site.data.zh.form.phone_label }}</label>
              <input id="f-phone" name="phone" type="tel" autocomplete="tel" aria-describedby="err-phone">
              <span class="field-error" id="err-phone" hidden></span>
            </div>
          </div>
          <div class="form-row">
            <div class="field">
              <label for="f-email">{{ site.data.zh.form.email_label }}</label>
              <input id="f-email" name="email" type="email" autocomplete="email" required aria-describedby="err-email">
              <span class="field-error" id="err-email" hidden></span>
            </div>
            <div class="field">
              <label for="f-age">{{ site.data.zh.form.child_age_label }}</label>
              <input id="f-age" name="child_age" type="text" inputmode="numeric" pattern="[0-9]*" maxlength="2" required aria-describedby="err-age">
              <span class="field-error" id="err-age" hidden></span>
            </div>
          </div>
          <div class="field">
            <label for="f-pref">{{ site.data.zh.form.preferred_contact_label }}</label>
            <select id="f-pref" name="preferred_contact" required aria-describedby="err-pref">
              <option value="">{{ site.data.zh.form.preferred_contact_label }}</option>
              <option value="email">{{ site.data.zh.form.preferred_contact_email }}</option>
              <option value="phone">{{ site.data.zh.form.preferred_contact_phone }}</option>
              <option value="either">{{ site.data.zh.form.preferred_contact_either }}</option>
            </select>
            <span class="field-error" id="err-pref" hidden></span>
          </div>
          <div class="field">
            <label for="f-msg">{{ site.data.zh.form.message_label }}</label>
            <textarea id="f-msg" name="message" rows="5" required aria-describedby="err-msg" placeholder="{{ site.data.zh.form.message_placeholder }}"></textarea>
            <span class="field-error" id="err-msg" hidden></span>
          </div>
          <div class="form-foot">
            <button type="submit" class="btn btn-primary btn-block" id="submitBtn">{{ site.data.zh.form.submit }}</button>
            <p class="form-status" id="formStatus" role="status"></p>
          </div>
        </form>

        <div class="form-card form-success" id="formSuccess" hidden tabindex="-1">
          <span class="success-tick" aria-hidden="true">
            <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M8 16 14 22 24 10"/></svg>
          </span>
          <h3>{{ site.data.zh.form.success_title }}</h3>
          <p>{{ site.data.zh.form.success_body }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ CTA BAND ============ -->
  <section class="cta-band">
    <div class="wrap">
      <div>
        <h2>{{ site.data.zh.sections.cta_band.title }}</h2>
        <p>{{ site.data.zh.sections.cta_band.body }}</p>
      </div>
      <a class="btn btn-primary btn-sm" href="#contact">{{ site.data.zh.sections.cta_band.button }}</a>
    </div>
  </section>

</main>