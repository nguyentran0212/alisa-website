/* Alisa Play Therapy — site behaviours.
 *
 * Single inline-ready script. Plain ES2017, no build step.
 *   1. Scroll reveals (IntersectionObserver).
 *   2. Sticky header hairline on scroll.
 *   3. Mobile nav toggle (with Escape + click-outside).
 *   4. Active-section nav underline.
 *   5. Enquiry form validation, submit, success state, bfcache reset.
 *
 * Patterns adapted from freetobeplay.com.au, the design reference.
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------
  // 1. Scroll reveals
  //
  // .reveal items start hidden (opacity: 0, translateY 10px). The observer
  // adds .in when they enter the viewport; once revealed, the .reveal class
  // comes off so it can't fight with later hover/focus transitions.
  // Stagger via inline style="--d: 0.08s" on the element.
  // --------------------------------------------------------------------
  function initReveals() {
    var els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          var el = e.target;
          el.classList.add('in');
          io.unobserve(el);
          setTimeout(function () { el.classList.remove('reveal'); }, 800);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
    els.forEach(function (el) { io.observe(el); });
  }

  // --------------------------------------------------------------------
  // 2. Header hairline on scroll
  // --------------------------------------------------------------------
  // The header now wears its "scrolled" look from page load (translucent
  // background, soft shadow, hairline) — no JS toggling needed. The
  // function stays as a hook in case future tweaks want to react to
  // scroll position.
  function initHeader() {}

  // --------------------------------------------------------------------
  // 3. Mobile nav
  // --------------------------------------------------------------------
  function initNav() {
    var toggle = document.getElementById('navToggle');
    var links = document.getElementById('navLinks');
    if (!toggle || !links) return;

    function setOpen(open, returnFocus) {
      links.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      if (!open && returnFocus) toggle.focus();
    }

    toggle.addEventListener('click', function () {
      setOpen(!links.classList.contains('open'));
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') setOpen(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && links.classList.contains('open')) {
        setOpen(false, true);
      }
    });
    document.addEventListener('click', function (e) {
      if (!links.classList.contains('open')) return;
      if (!links.contains(e.target) && !toggle.contains(e.target)) setOpen(false);
    });
  }

  // --------------------------------------------------------------------
  // 4. Active-section nav underline
  //
  // For each nav link whose href is "#id", observe the corresponding
  // section. The section holding the most viewport share wins; that link
  // gets .is-active.
  // --------------------------------------------------------------------
  function initActiveNav() {
    var links = Array.prototype.slice.call(
      document.querySelectorAll('.nav-links a:not(.btn):not(.lang-link)')
    );
    var maps = links
      .map(function (a) {
        var href = a.getAttribute('href') || '';
        var hash = href.indexOf('#');
        if (hash < 0) return null;
        var id = href.slice(hash + 1);
        var section = document.getElementById(id);
        return section ? { link: a, section: section } : null;
      })
      .filter(Boolean);
    if (!maps.length || !('IntersectionObserver' in window)) return;

    var visible = {};
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        visible[e.target.id] = e.isIntersecting ? e.intersectionRatio : 0;
      });
      var best = null, bestRatio = 0;
      maps.forEach(function (m) {
        var r = visible[m.section.id] || 0;
        if (r > bestRatio) { bestRatio = r; best = m; }
      });
      maps.forEach(function (m) {
        if (m.link) m.link.classList.toggle('is-active', m === best);
      });
    }, { threshold: [0.15, 0.35, 0.6], rootMargin: '-88px 0px -45% 0px' });

    maps.forEach(function (m) { io.observe(m.section); });
  }

  // --------------------------------------------------------------------
  // 5. Enquiry form
  //
  // Posts to Formspree (endpoint in _config.yml). Validation is
  // hand-rolled — only triggered on submit, and re-checks only flagged
  // fields on input. On success, the form swaps to a thank-you panel
  // with an animated tick. bfcache restore resets everything.
  // --------------------------------------------------------------------
  function initForm() {
    var form = document.getElementById('enquiryForm');
    if (!form) return;
    var status = document.getElementById('formStatus');
    var success = document.getElementById('formSuccess');
    var button = document.getElementById('submitBtn');
    // Capture the localised button text so we can restore it after an error.
    // Hardcoding 'Send enquiry' here would clobber the Chinese version.
    var buttonLabel = button.textContent;
    // Fallback email for the error message — comes from a data-attribute
    // rendered by Liquid (main.js itself isn't a Liquid template).
    var fallbackEmail = form.getAttribute('data-fallback-email') || '';

    var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/;

    var rules = {
      name: {
        el: document.getElementById('f-name'),
        err: document.getElementById('err-name'),
        test: function (v) {
          if (!v) return 'Please enter your name.';
          if (v.length < 2) return 'Please enter your full name.';
          return '';
        }
      },
      phone: {
        el: document.getElementById('f-phone'),
        err: document.getElementById('err-phone'),
        test: function (v) {
          if (!v) return '';   // the only optional field
          var digits = v.replace(/\D/g, '');
          if (digits.length === 0) return 'Please enter a phone number, or leave this blank.';
          if (digits.length < 6) return 'That number looks a little short.';
          if (digits.length > 20) return 'That number looks a little long.';
          return '';
        }
      },
      email: {
        el: document.getElementById('f-email'),
        err: document.getElementById('err-email'),
        test: function (v) {
          if (!v) return 'Please enter your email address.';
          if (!EMAIL_RE.test(v)) return "That email address doesn't look quite right.";
          return '';
        }
      },
      childAge: {
        el: document.getElementById('f-age'),
        err: document.getElementById('err-age'),
        test: function (v) {
          if (!v) return "Please enter your child's age.";
          if (!/^\d{1,2}$/.test(v)) return 'Please enter the age as a whole number, e.g. 6.';
          return '';
        }
      },
      preferredContact: {
        el: document.getElementById('f-pref'),
        err: document.getElementById('err-pref'),
        test: function (v) {
          return v ? '' : "Please choose how you'd like to be contacted.";
        }
      },
      message: {
        el: document.getElementById('f-msg'),
        err: document.getElementById('err-msg'),
        test: function (v) {
          if (!v) return 'Please tell us a little about what you’re looking for.';
          if (v.length < 10) return 'Could you add a little more detail?';
          return '';
        }
      }
    };

    function showError(rule, msg) {
      if (msg) {
        rule.err.textContent = msg;
        rule.err.hidden = false;
        rule.el.setAttribute('aria-invalid', 'true');
      } else {
        rule.err.hidden = true;
        rule.err.textContent = '';
        rule.el.removeAttribute('aria-invalid');
      }
    }

    function validateField(key) {
      var rule = rules[key];
      var msg = rule.test(rule.el.value.trim());
      showError(rule, msg);
      return !msg;
    }

    function firstInvalid() {
      var bad = null;
      Object.keys(rules).forEach(function (key) {
        if (!validateField(key) && !bad) bad = rules[key].el;
      });
      return bad;
    }

    // Re-check only flagged fields on input — never introduce a new error
    // until the user submits.
    Object.keys(rules).forEach(function (key) {
      var el = rules[key].el;
      function recheckIfFlagged() {
        if (el.getAttribute('aria-invalid') === 'true') validateField(key);
      }
      el.addEventListener('input', recheckIfFlagged);
      el.addEventListener('change', recheckIfFlagged);
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var bad = firstInvalid();
      if (bad) { bad.focus(); return; }

      status.textContent = '';
      status.classList.remove('show', 'is-error');
      button.setAttribute('aria-busy', 'true');
      button.disabled = true;
      button.textContent = 'Sending…';

      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      }).then(function (res) {
        return res.json().catch(function () {
          throw new Error('The server sent an unexpected response.');
        });
      }).then(function (data) {
        if (!data || !data.ok) {
          throw new Error((data && data.error) || 'Something went wrong.');
        }
        form.hidden = true;
        success.hidden = false;
        success.focus();
      }).catch(function (err) {
        var fallback = fallbackEmail
          ? 'Sorry, the message could not be sent. Please email ' + fallbackEmail + ' directly.'
          : 'Sorry, the message could not be sent.';
        status.textContent = err.message || fallback;
        status.classList.add('show', 'is-error');
        button.removeAttribute('aria-busy');
        button.disabled = false;
        button.textContent = buttonLabel;
      });
    });

    // bfcache restore: re-show the form, drop the success panel, clear
    // errors. Safari does this aggressively.
    window.addEventListener('pageshow', function (e) {
      if (!e.persisted) return;
      form.hidden = false;
      success.hidden = true;
      form.reset();
      Object.keys(rules).forEach(function (key) { showError(rules[key], ''); });
      status.textContent = '';
      status.classList.remove('show', 'is-error');
      button.disabled = false;
      button.removeAttribute('aria-busy');
      button.textContent = buttonLabel;
    });
  }

  // --------------------------------------------------------------------
  // current year in footer
  // --------------------------------------------------------------------
  function setYear() {
    var y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
  }

  // --------------------------------------------------------------------
  // boot
  // --------------------------------------------------------------------
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initReveals();
      initHeader();
      initNav();
      initActiveNav();
      initForm();
      setYear();
    });
  } else {
    initReveals();
    initHeader();
    initNav();
    initActiveNav();
    initForm();
    setYear();
  }
})();