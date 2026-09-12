---
layout: default
title: "博客"
description: "关于游戏治疗、儿童发展等的文章。"
lang: zh
permalink: /zh/blog/
---

<main id="main">
  <section>
    <div class="wrap">
      <header class="page-header center reveal" style="text-align: center; margin-inline: auto;">
        <p class="eyebrow">{{ site.data.zh.blog.from_the_blog }}</p>
        <h1>{{ site.data.zh.blog.recent_articles }}</h1>
        <p class="page-meta">关于游戏治疗、儿童发展和更多主题的文章。</p>
      </header>

      <div class="post-list">
        {%- assign zh_posts = site.posts | where: "lang", "zh" | sort: "featured_order" -%}
        {%- for post in zh_posts -%}
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
    </div>
  </section>
</main>