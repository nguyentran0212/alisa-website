---
layout: default
title: "Alisa Play Therapy"
description: "Compassionate play therapy services for children. Helping children heal, grow, and thrive through the power of play."
---

<section id="hero" class="section" style="background-image: url('{{ site.hero_image }}');">
  <div class="container">
    <div class="reveal">
      <img src="{{ site.baseurl }}/assets/images/logo_vertical.png" alt="Alisa Play Therapy" class="hero-logo">
      <h1 class="hero-title">Healing <span>Through Play</span></h1>
      <p class="hero-subtitle">A safe, nurturing space where children can express themselves, work through difficult feelings, and build resilience — guided by a trained and compassionate therapist.</p>
      <div class="hero-actions">
        <a href="{{ site.baseurl }}/#contact" class="btn btn-primary">Get in Touch</a>
        <a href="{{ site.baseurl }}/#what-is-play-therapy" class="btn btn-outline">Learn More</a>
      </div>
    </div>
  </div>
</section>

---

<section id="what-is-play-therapy" class="section section--alt">
  <div class="container">
    <div class="reveal">
      <div class="section-header">
        <span class="section-eyebrow">Understanding Play Therapy</span>
        <h2 class="section-title">What is Play Therapy?</h2>
        <p class="section-lead">Play is children's natural language. Before they have words for complex emotions, they play them out.</p>
      </div>
      <p>Play Therapy is a evidence-based approach that uses the power of play to help children make sense of difficult experiences, develop healthier coping skills, and build self-esteem and emotional regulation.</p>
      <ul class="intro-list">
        <li>Make sense of difficult experiences and big feelings</li>
        <li>Develop healthier ways to cope with stress and anxiety</li>
        <li>Build self-esteem, emotional regulation, and social skills</li>
        <li>Heal from trauma, loss, or upheaval in a gentle, supported way</li>
      </ul>
      <p>In a Play Therapy session, your child is invited into a specially designed play space with a rich variety of materials — toys, art supplies, sand, and more. I observe and gently engage, following your child's lead while creating the safety and structure they need to explore at their own pace.</p>
      <p>Parents and caregivers are also an important part of the process. I meet with you separately to discuss progress, share observations, and explore ways to support your child's growth at home.</p>
    </div>
  </div>
</section>

---

<section id="is-it-right" class="section">
  <div class="container">
    <div class="reveal">
      <div class="section-header">
        <span class="section-eyebrow">Is It Right for My Child</span>
        <h2 class="section-title">Is Play Therapy Right for My Child?</h2>
        <p class="section-lead">Play Therapy can be helpful for children and families navigating a wide range of challenges.</p>
      </div>
      <div class="faq-list">
        <details class="faq-item">
          <summary class="faq-question">Difficulty managing big emotions</summary>
          <div class="faq-answer">
            <p>Does your child have intense tantrums, frequent meltdowns, or seem overwhelmed by emotions that feel too big to handle? Play Therapy gives children tools to understand and regulate their emotional world.</p>
          </div>
        </details>
        <details class="faq-item">
          <summary class="faq-question">Behavioral challenges</summary>
          <div class="faq-answer">
            <p>Aggression, defiance, withdrawal, or difficulty following routines — these behaviors often mask unmet needs or unprocessed feelings. Play Therapy addresses the root, not just the behavior.</p>
          </div>
        </details>
        <details class="faq-item">
          <summary class="faq-question">Life transitions and disruptions</summary>
          <div class="faq-answer">
            <p>A new sibling, a move, parental separation, starting school, or a loss — these events can stir up big feelings that children struggle to put into words. Play Therapy provides a contained space to process these experiences.</p>
          </div>
        </details>
        <details class="faq-item">
          <summary class="faq-question">Social difficulties</summary>
          <div class="faq-answer">
            <p>Challenges with sharing, making friends, or navigating peer relationships. Play Therapy can help children develop social skills, empathy, and confidence in relating to others.</p>
          </div>
        </details>
        <details class="faq-item">
          <summary class="faq-question">Anxiety or worry</summary>
          <div class="faq-answer">
            <p>Excessive worry, school avoidance, sleep difficulties, or physical symptoms driven by anxiety. Through play, children can explore and practice new ways of being in the world.</p>
          </div>
        </details>
        <details class="faq-item">
          <summary class="faq-question">Neurodevelopmental differences</summary>
          <div class="faq-answer">
            <p>Play Therapy is adapted to meet children where they are, including children with ADHD, autism spectrum differences, or developmental differences. The play space is flexible, sensory-aware, and tailored to your child's needs.</p>
          </div>
        </details>
      </div>
    </div>
  </div>
</section>

---

<section id="services" class="section section--alt">
  <div class="container">
    <div class="reveal">
      <div class="section-header">
        <span class="section-eyebrow">What I Offer</span>
        <h2 class="section-title">Services</h2>
      </div>
      <div class="services-grid">
        <div class="service-card">
          <div class="service-card__icon">🎨</div>
          <h3>Individual Play Therapy</h3>
          <p>Weekly one-on-one sessions tailored to your child's needs. Sessions are 50 minutes for children aged 3–12, with frequency agreed together with parents.</p>
        </div>
        <div class="service-card">
          <div class="service-card__icon">👨‍👩‍👧</div>
          <h3>Parent Consultations</h3>
          <p>Separate sessions for parents and caregivers to discuss progress, explore strategies for supporting the child at home, and process feelings that arise on the parenting journey.</p>
        </div>
        <div class="service-card">
          <div class="service-card__icon">🏫</div>
          <h3>School &amp; Clinic-Based</h3>
          <p>I work as a contractor in different settings — schools, community health clinics, and other agencies. Sessions may be available in your area.</p>
        </div>
        <div class="service-card">
          <div class="service-card__icon">⚡</div>
          <h3>Intensive Therapy Blocks</h3>
          <p>Focused periods of work for children who benefit from condensed sessions — a series close together over a shorter time to build momentum and depth.</p>
        </div>
      </div>
      <p style="margin-top: 36px; font-size: 0.9rem; color: var(--text-muted); text-align: center;">Sessions are offered in [your area] and surrounding areas. Please reach out to find what is available near you.</p>
    </div>
  </div>
</section>

{% assign featured_posts = site.posts | where: "featured", true | where: "lang", "en" | sort: "featured_order" | limit: 3 %}
{% if featured_posts.size > 0 %}
<section id="blog" class="section">
  <div class="container">
    <div class="reveal">
      <div class="section-header">
        <span class="section-eyebrow">{{ site.data.en.blog.from_the_blog }}</span>
        <h2 class="section-title">{{ site.data.en.blog.recent_articles }}</h2>
      </div>
      <div class="blog-list">
        {% for post in featured_posts %}
          <article class="post-card">
            <h3><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h3>
            <p class="post-meta">{{ post.date | date: "%B %d, %Y" }}</p>
            {% if post.excerpt %}
              <p class="post-excerpt">{{ post.excerpt }}</p>
            {% endif %}
            <a href="{{ site.baseurl }}{{ post.url }}" class="post-read-more">{{ site.data.en.blog.read_more | default: "Read more" }} →</a>
          </article>
        {% endfor %}
      </div>
      <p style="text-align:center; margin-top: 32px;">
        <a href="{{ site.baseurl }}/blog" class="btn btn-outline">{{ site.data.en.blog.view_all }}</a>
      </p>
    </div>
  </div>
</section>
{% endif %}

---

<section id="about" class="section">
  <div class="container">
    <div class="reveal about-grid">
      <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop&crop=face" alt="Alisa" class="about-image">
      <div class="about-text">
        <h2>About Alisa</h2>
        <p>[Bio and qualifications from Alisa go here. This section will be replaced with her actual content when she's ready to provide it.]</p>
        <h3>Qualifications</h3>
        <p>[List of relevant qualifications — e.g., Master of Play Therapy, registered with relevant professional body, etc.]</p>
        <h3>Approach</h3>
        <p>[Brief description of her therapeutic approach and philosophy — e.g., child-centered, attachment-informed, trauma-sensitive...]</p>
        <a href="/about" class="btn btn-primary" style="margin-top: 32px;">Read Full Bio</a>
      </div>
    </div>
  </div>
</section>

---

<section id="contact" class="section section--alt">
  <div class="container">
    <div class="reveal">
      <div class="section-header">
        <span class="section-eyebrow">Get in Touch</span>
        <h2 class="section-title">Let's Talk</h2>
      </div>
      <p class="contact-lead">If you'd like to find out whether Play Therapy might be right for your child, or if you have any questions, reach out. A brief conversation can help us figure out if we're the right fit.</p>
      <div class="contact-methods">
        <a href="mailto:{{ site.contact_email }}" class="contact-method">
          <span class="contact-method__icon">
            <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </span>
          {{ site.contact_email }}
        </a>
        <a href="tel:{{ site.contact_phone }}" class="contact-method">
          <span class="contact-method__icon">
            <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </span>
          {{ site.contact_phone }}
        </a>
        <span class="contact-method">
          <span class="contact-method__icon">
            <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          </span>
          {{ site.contact_location }}
        </span>
      </div>
      <form class="contact-form" id="contact-form" method="POST" action="{{ site.formspree_url }}">
        <div class="form-field" style="display:none;">
          <input type="text" name="_gotcha" tabindex="-1" autocomplete="off">
        </div>
        <div class="form-field">
          <label for="name">Your Name</label>
          <input type="text" id="name" name="name" required>
        </div>
        <div class="form-field">
          <label for="email">Email Address</label>
          <input type="email" id="email" name="email" required>
        </div>
        <div class="form-field">
          <label for="message">Message</label>
          <textarea id="message" name="message" rows="5" placeholder="Tell me a little about your child and what you're hoping to explore..." required></textarea>
        </div>
        <button type="submit" class="btn btn-primary" style="width: 100%;">Send Message</button>
        <p class="form-status form-success" style="display:none; margin-top:16px; color:var(--green); text-align:center;">Thank you — your message has been sent. I'll be in touch soon.</p>
        <p class="form-status form-error" style="display:none; margin-top:16px; color:#c0392b; text-align:center;">Something went wrong. Please try again or email me directly at <a href="mailto:{{ site.contact_email }}">{{ site.contact_email }}</a>.</p>
      </form>
    </div>
  </div>
</section>
