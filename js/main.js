/* ═══════════════════════════════════════════════════
   KOSHI HOSPITAL — EDITORIAL INTERACTIONS
   Vanilla JS · one reveal system · purposeful motion
   ═══════════════════════════════════════════════════ */
(function () {
  "use strict";

  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover:hover) and (pointer:fine)").matches;

  /* ───────── REVEAL SYSTEM ───────── */
  const revealEls = $$("[data-reveal]");
  const heroLines = $$(".hero__line");

  if (reducedMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(el => el.classList.add("is-in"));
    heroLines.forEach(el => el.classList.add("is-in"));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        el.style.transitionDelay = Math.min(i * 60, 300) + "ms";
        el.classList.add("is-in");
        io.unobserve(el);
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });

    revealEls.forEach(el => io.observe(el));

    // hero lines animate on load
    heroLines.forEach((line, i) => {
      setTimeout(() => line.classList.add("is-in"), 250 + i * 160);
    });
  }

  /* ───────── HERO PHOTO PARALLAX ───────── */
  const heroPhoto = $(".hero__photo img");
  if (heroPhoto && !reducedMotion && finePointer) {
    let ticking = false;
    addEventListener("scroll", () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const rect = heroPhoto.parentElement.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > innerHeight) return;
        const progress = (rect.top + rect.height / 2 - innerHeight / 2) / innerHeight;
        heroPhoto.style.transform = `translateY(${progress * -34}px) scale(1.06)`;
        ticking = false;
      });
    }, { passive: true });
  }

  /* ───────── COUNTERS ───────── */
  const counterIO = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = +el.dataset.count;
      const dur = 1400, t0 = performance.now();
      (function step(t) {
        const k = Math.min((t - t0) / dur, 1);
        el.textContent = Math.round(target * (1 - Math.pow(1 - k, 3)));
        if (k < 1) requestAnimationFrame(step);
      })(t0);
      counterIO.unobserve(el);
    });
  }, { threshold: 0.6 });
  $$(".counter").forEach(c => counterIO.observe(c));

  /* ───────── SERVICES HOVER PREVIEW ───────── */
  const preview = $(".svc-preview");
  const previewImg = $("#svcPreviewImg");
  if (preview && previewImg && finePointer && !reducedMotion) {
    let px = 0, py = 0, tx = 0, ty = 0;
    $$(".svc-index li").forEach(item => {
      item.addEventListener("mouseenter", () => {
        previewImg.src = item.dataset.img;
        preview.classList.add("is-visible");
      });
      item.addEventListener("mouseleave", () => preview.classList.remove("is-visible"));
      item.addEventListener("mousemove", e => {
        tx = e.clientX + 24;
        ty = e.clientY - 150;
      });
    });
    (function movePreview() {
      px += (tx - px) * 0.12;
      py += (ty - py) * 0.12;
      preview.style.transform = `translate(${px}px, ${py}px)`;
      requestAnimationFrame(movePreview);
    })();
  }

  /* ───────── HEADER STATE + ACTIVE LINK ───────── */
  const header = $("#header");
  const navLinks = $$(".index-nav a");
  let lastY = 0;

  addEventListener("scroll", () => {
    const y = scrollY;
    header.classList.toggle("is-scrolled", y > 30);
    lastY = y;
    $("#toTop").classList.toggle("is-show", y > 700);
  }, { passive: true });

  const sectionIO = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(l =>
        l.classList.toggle("is-active", l.getAttribute("href") === "#" + entry.target.id));
    });
  }, { rootMargin: "-35% 0px -55% 0px" });
  ["about", "services", "doctors", "notices", "visit", "contact"].forEach(id => {
    const s = document.getElementById(id);
    if (s) sectionIO.observe(s);
  });

  /* ───────── MOBILE MENU ───────── */
  const burger = $("#burger"), mobileMenu = $("#mobileMenu");
  burger.addEventListener("click", () => {
    const open = mobileMenu.classList.toggle("is-open");
    burger.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", open);
    mobileMenu.setAttribute("aria-hidden", !open);
    document.body.classList.toggle("is-locked", open);
  });
  $$(".mobile-menu__nav a").forEach(a => a.addEventListener("click", () => {
    mobileMenu.classList.remove("is-open");
    burger.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
    mobileMenu.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-locked");
  }));

  /* ───────── LANGUAGE TOGGLE ───────── */
  const langToggle = $("#langToggle");
  langToggle.addEventListener("click", () => {
    const next = langToggle.dataset.lang === "en" ? "np" : "en";
    langToggle.dataset.lang = next;
    document.documentElement.lang = next === "np" ? "ne" : "en";
    $$("[data-en]").forEach(el => {
      const v = el.dataset[next];
      if (v != null) el.innerHTML = v;
    });
    $$(".lang-toggle__opt").forEach(o =>
      o.classList.toggle("is-active", o.dataset.lang === next));
  });

  /* ───────── APPOINTMENT FORM ───────── */
  const form = $("#apptForm");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      let valid = true;
      $$("#apptForm [required]").forEach(f => {
        const bad = !f.value.trim();
        f.classList.toggle("is-invalid", bad);
        if (bad) valid = false;
      });
      if (!valid) return;
      $("#formSuccess").classList.add("is-show");
      form.reset();
      setTimeout(() => $("#formSuccess").classList.remove("is-show"), 4500);
    });
    $$("#apptForm input, #apptForm select").forEach(f =>
      f.addEventListener("input", () => f.classList.remove("is-invalid")));
  }
})();
