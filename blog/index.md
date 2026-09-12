---
layout: default
title: "Blog"
description: "Articles on play therapy, child development, and more."
permalink: /blog/
---

<main id="main">
  <section>
    <div class="wrap">
      <header class="page-header center reveal" style="text-align: center; margin-inline: auto;">
        <p class="eyebrow">{{ site.data.en.blog.from_the_blog }}</p>
        <h1>{{ site.data.en.blog.recent_articles }}</h1>
        <p class="page-meta">Articles on play therapy, child development, and more.</p>
      </header>

      <div class="post-list">
        {%- assign en_posts = site.posts | where: "lang", "en" | sort: "featured_order" -%}
        {%- for post in en_posts -%}
        <article class="post-card reveal" style="--d: {{ forloop.index0 | times: 0.06 }}s">
          <h3><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h3>
          <p class="post-meta"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time></p>
          {%- if post.excerpt -%}
          <p class="post-excerpt">{{ post.excerpt }}</p>
          {%- endif -%}
          <a href="{{ site.baseurl }}{{ post.url }}" class="post-read-more">{{ site.data.en.blog.read_more | default: "Read more" }}</a>
        </article>
        {%- endfor -%}
      </div>
    </div>
  </section>
</main>