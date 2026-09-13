---
layout: default
title: "Meet Alisa — Play Therapist in Adelaide"
title_tag: "Meet Alisa | Play Therapist in Adelaide | Master of Play Therapy"
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
          <p class="eyebrow">About</p>
          <h1>Meet Alisa</h1>
          <p>I am a play therapist and early childhood teacher, originally from China. I came to Australia in 2015 to study Teaching and have since spent my career supporting young children aged 3–8 and their families.</p>
          <p>My background in early childhood education, together with specialised training in play therapy, helps me understand children's behaviour within the context of their development and experiences, and meet each child where they are.</p>
          <p>I believe children grow within relationships where they feel safe, accepted, and genuinely understood. I provide a warm and supportive space where children can express themselves, explore their experiences, and discover their own strengths at their own pace.</p>
          <p>I also value collaborating with parents and caregivers throughout this journey. You hold the everyday moments, the history, and the small details that cannot always be seen in a session. My role is to come alongside you, gently exploring what your child may be communicating through their play and behaviour, and how we can best support their emotional growth and wellbeing.</p>

          <div class="qualifications">
            <h2>Qualifications & Registration</h2>
            <ul>
              <li class="qual-pair">
                <strong>Master of Play Therapy</strong>
                <strong>Master of Teaching (Early Childhood)</strong>
              </li>
              <li><strong>Registered Play Therapist</strong>
                <ul>
                  <li>Australasia Pacific Play Therapy Association (APPTA)</li>
                  <li>Play Therapy Practitioners Association (PTPA)</li>
                </ul>
              </li>
            </ul>
          </div>

          <div class="memberships" style="margin-top: var(--s-8);">
            <a href="https://appta.org.au/member-directory/#!biz/id/690804f90c14a6a502038664" target="_blank" rel="noopener" aria-label="APPTA — Australasia Pacific Play Therapy Association">
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