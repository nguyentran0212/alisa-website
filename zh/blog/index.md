---
layout: default
title: "博客"
description: "关于游戏治疗、儿童发展等的文章。"
lang: zh
permalink: /zh/blog/
---

<section id="blog-page" class="section">
  <div class="container">
    <div class="reveal">
      <div class="section-header">
        <span class="section-eyebrow">{{ site.data.zh.blog.from_the_blog }}</span>
        <h2 class="section-title">{{ site.data.zh.blog.recent_articles }}</h2>
        <p class="section-lead">关于游戏治疗、儿童发展和更多主题的文章。</p>
      </div>
      <div class="blog-list">
        {% assign zh_posts = site.posts | where: "lang", "zh" | sort: "date" | reverse %}
        {% for post in zh_posts %}
          <article class="post-card">
            <h3><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h3>
            <p class="post-meta">{{ post.date | date: "%Y年%m月%d日" }}</p>
            {% if post.excerpt %}
              <p class="post-excerpt">{{ post.excerpt }}</p>
            {% endif %}
            <a href="{{ site.baseurl }}{{ post.url }}" class="post-read-more">{{ site.data.zh.blog.read_more }} →</a>
          </article>
        {% endfor %}
      </div>
    </div>
  </div>
</section>
