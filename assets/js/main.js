// ── Smooth scroll ──────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;

    const anchorId = href.slice(1);

    if (window.location.pathname === '/' || window.location.pathname.endsWith('/index.html')) {
      // On home page — scroll to element if it exists
      const target = document.getElementById(anchorId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // On another page — navigate to home page with anchor
      e.preventDefault();
      window.location.href = '/#' + anchorId;
    }

    // Close mobile nav
    navLinksEl.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ── Sticky nav shadow ───────────────────────────────────────
const nav = document.getElementById('site-nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });
}

// ── Active nav link on scroll ──────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(link => {
        const linkId = link.getAttribute('href').slice(1);
        link.classList.toggle('active', linkId === id);
      });
    }
  });
}, { threshold: 0.35, rootMargin: '-80px 0px -40% 0px' });

sections.forEach(section => observer.observe(section));

// ── Reveal on scroll ───────────────────────────────────────
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

reveals.forEach(el => revealObserver.observe(el));

// ── Mobile nav toggle ──────────────────────────────────────
const navToggle = document.querySelector('.nav-toggle');
const navLinksEl = document.querySelector('.nav-links');
if (navToggle && navLinksEl) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinksEl.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });
}

// ── Contact form submission ───────────────────────────────
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    const submitBtn = this.querySelector('button[type="submit"]');
    const successMsg = this.querySelector('.form-success');
    const errorMsg = this.querySelector('.form-error');

    const formspreeUrl = this.getAttribute('action');
    if (!formspreeUrl) {
      errorMsg.style.display = 'block';
      return;
    }

    // Reset states
    successMsg.style.display = 'none';
    errorMsg.style.display = 'none';
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    const formData = new FormData(this);

    try {
      const res = await fetch(formspreeUrl, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' }
      });
      if (res.ok) {
        successMsg.style.display = 'block';
        this.reset();
      } else {
        errorMsg.style.display = 'block';
      }
    } catch {
      errorMsg.style.display = 'block';
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
    }
  });
}
