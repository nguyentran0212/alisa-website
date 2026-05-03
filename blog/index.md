---
layout: default
title: "Blog"
description: "Articles on play therapy, child development, and more."
permalink: /blog/
---

<section id="blog-page" class="section">
  <div class="container">
    <div class="reveal">
      <div class="section-header">
        <span class="section-eyebrow">From the Blog</span>
        <h2 class="section-title">Recent Articles</h2>
        <p class="section-lead">Articles on play therapy, child development, and more.</p>
      </div>
      <div class="blog-list">
        {% for post in site.posts %}
          <article class="post-card">
            <h3><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h3>
            <p class="post-meta">{{ post.date | date: "%B %d, %Y" }}</p>
            {% if post.excerpt %}
              <p class="post-excerpt">{{ post.excerpt }}</p>
            {% endif %}
            <a href="{{ site.baseurl }}{{ post.url }}" class="post-read-more">Read more →</a>
          </article>
        {% endfor %}
      </div>
    </div>
  </div>
</section>
