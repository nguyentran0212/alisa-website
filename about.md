---
layout: default
title: "About Alisa — Play Therapist in Adelaide"
title_tag: "About Alisa | Play Therapist in Adelaide | Master of Play Therapy"
description: "Alisa is a Registered Play Therapist (APPTA & PTPA) and early childhood teacher based in Adelaide, supporting children aged 3-8 and their families."
keywords: "Alisa play therapist Adelaide, Chunxiao Liao play therapy, registered play therapist APPTA, early childhood therapist Adelaide"
lang: en
permalink: /about/
---

<main id="main">
  <section>
    <div class="wrap">
      <div class="about-page-grid">
        <div class="about-art reveal">
          <img src="{{ site.baseurl }}/assets/images/alisa.png" alt="Alisa Liao, Registered Play Therapist">
        </div>
        <div class="about-bio">
          <p class="eyebrow">Meet Alisa</p>
          <h1>About Alisa</h1>
          <p>I am a play therapist and early childhood teacher, originally from China. I came to Australia in 2015 to study Teaching, and since then my work has centred around supporting young children aged 3–8 and their families.</p>
          <p>I have always been drawn to children who seem stuck — in big feelings, intense reactions, or patterns of behaviour that feel difficult to shift. Early in my teaching career, I found myself searching for ways to better understand and support these children. Through this process, I came to realise that behaviour rarely tells the whole story. What we see on the surface is often a child's best attempt to communicate something they do not yet have the words to express.</p>
          <p>As I continued searching for answers, I discovered Play Therapy. It brought together what I had been learning, and offered a way of understanding children that felt both intuitive and deeply respectful of their experience. My background in early childhood education, together with my specialised training in play therapy, gives me a strong foundation for understanding young children's development and emotional needs. It helps me recognise when a child's play, emotions, relationships, or responses may be communicating a need for additional support, while always keeping the child — not the behaviour — at the centre of my understanding.</p>
          <p>I believe children grow and heal within relationships where they feel safe, accepted, and genuinely understood. Through a warm and supportive therapeutic relationship, I provide children with a space where they can express themselves, explore their experiences, and discover their own strengths at their own pace.</p>
          <p>I also value collaborating with parents and caregivers throughout this journey. You hold the everyday moments, the history, and the small details that cannot always be seen in a session. My role is to come alongside you, gently exploring what your child may be communicating through their play and behaviour, and how we can best support their emotional growth and wellbeing.</p>
          <p>When we come to understand what sits beneath the surface, change can begin to unfold.</p>

          <div class="qualifications">
            <h2>Qualifications & Registration</h2>
            <ul>
              <li><strong>Registered Play Therapist</strong>Australasia Pacific Play Therapy Association (APPTA) &amp; Play Therapy Practitioners Association (PTPA)</li>
              <li><strong>Registered Teacher (Early Childhood)</strong>South Australia (SA)</li>
              <li><strong>Master of Play Therapy</strong></li>
              <li><strong>Master of Teaching (Early Childhood)</strong></li>
            </ul>
          </div>

          <div class="memberships" style="margin-top: var(--s-8);">
            <a href="https://appta.org.au" target="_blank" rel="noopener" aria-label="APPTA — Australasia Pacific Play Therapy Association">
              <img src="{{ site.baseurl }}/assets/images/appta-logo.png" alt="APPTA">
            </a>
            <a href="https://www.ptpa.org.au/adelaide/registered-play-therapist/chunxiao-liao?from=badge" target="_blank" rel="noopener" aria-label="PTPA — Registered Play Therapist">
              <img src="{{ site.baseurl }}/assets/images/ptpa-logo.png" alt="PTPA">
            </a>
          </div>

          <div style="margin-top: var(--s-10);">
            <a class="btn btn-primary" href="{{ site.baseurl }}/#contact">Get in Touch</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

<!-- JSON-LD: Person -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": ["Person", "MedicalBusiness"],
  "@id": {{ site.url | append: "/#alisa" | jsonify }},
  "name": {{ site.author.name | jsonify }},
  "alternateName": {{ site.author.alternate_name | jsonify }},
  "jobTitle": {{ site.author.role | jsonify }},
  "description": "Registered Play Therapist (APPTA & PTPA) and early childhood teacher based in Adelaide, supporting children aged 3-8 and their families through play therapy.",
  "url": {{ site.url | jsonify }},
  "email": {{ site.contact_email | jsonify }},
  "telephone": {{ site.contact_phone_e164 | jsonify }},
  "knowsLanguage": {{ site.practice_languages | jsonify }},
  "alumniOf": [
    { "@type": "EducationalOrganization", "name": "Master of Play Therapy" },
    { "@type": "EducationalOrganization", "name": "Master of Teaching (Early Childhood)" }
  ],
  "memberOf": [
    { "@type": "Organization", "name": "Australasia Pacific Play Therapy Association (APPTA)", "url": "https://appta.org.au" },
    { "@type": "Organization", "name": "Play Therapy Practitioners Association (PTPA)", "url": "https://www.ptpa.org.au" }
  ],
  "worksFor": { "@id": {{ site.url | append: "/#business" | jsonify }} },
  "areaServed": [
    { "@type": "City", "name": {{ site.practice_city | jsonify }} },
    { "@type": "State", "name": {{ site.practice_region | jsonify }} }
  ],
  "hasCredential": [
    { "@type": "EducationalOccupationalCredential", "credentialCategory": "registration", "name": "Registered Play Therapist — APPTA" },
    { "@type": "EducationalOccupationalCredential", "credentialCategory": "registration", "name": "Registered Play Therapist — PTPA" },
    { "@type": "EducationalOccupationalCredential", "credentialCategory": "registration", "name": "Registered Teacher (Early Childhood), South Australia" }
  ]
}
</script>