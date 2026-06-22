/* ============================================================
   Nawabi Hyderabad House — site behaviour
   Vanilla JS, no framework. Progressive: every feature guards
   for its own elements, so the same file runs on every page.
   ============================================================ */
(function () {
  "use strict";

  /* ---- Shared header and footer ------------------------------------- */
  var logoUrl = "https://quseprdus1.blob.core.windows.net/kora-business-images/user-media/911e874e-7fd0-4305-8294-da62055246d1/de8c94d8-887e-4625-825f-ec262dbc28df/1782133436_vmokbw.png";
  var navItems = [
    { href: "index.html", label: "Home" },
    { href: "menu.html", label: "Menu" },
    { href: "about.html", label: "About" },
    { href: "catering.html", label: "Catering" },
    { href: "contact.html", label: "Contact" }
  ];

  function currentPage() {
    var page = window.location.pathname.split("/").pop();
    if (!page) return "index.html";
    return page.indexOf(".") === -1 ? page + ".html" : page;
  }

  function navLink(item) {
    var isActive = item.href === currentPage();
    return '<a href="' + item.href + '" class="nav-link"' + (isActive ? ' aria-current="page"' : "") + ">" + item.label + "</a>";
  }

  function mobileNavLink(item, isLast) {
    return '<a href="' + item.href + '" class="py-2.5' + (isLast ? "" : " border-b border-clay-100") + '">' + item.label + "</a>";
  }

  function renderHeader() {
    return [
      '<header data-site-header class="site-header sticky top-0 z-50 bg-cream-50/90 backdrop-blur border-b border-clay-200/70">',
      '  <div class="mx-auto max-w-7xl flex items-center justify-between gap-4 px-5 lg:px-8" style="height:76px">',
      '    <a href="index.html" class="flex items-center shrink-0" aria-label="Nawabi Hyderabad House — home">',
      '      <img src="' + logoUrl + '" alt="Nawabi Hyderabad House logo" width="160" height="62" class="h-12 w-auto" />',
      "    </a>",
      '    <nav class="hidden md:flex items-center gap-8 text-[15px] font-semibold text-clay-700" aria-label="Primary">',
      navItems.map(navLink).join(""),
      "    </nav>",
      '    <div class="flex items-center gap-2 sm:gap-3">',
      '      <a href="tel:+16302360600" class="hidden lg:inline-flex items-center gap-2 text-[15px] font-bold text-green-600 hover:text-green-700">',
      '        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>',
      "        (630) 236-0600",
      "      </a>",
      '      <a href="https://order.toasttab.com/online/hhnaperville" target="_blank" rel="noopener" class="inline-flex items-center gap-2 rounded-full bg-saffron-500 px-5 py-2.5 text-sm font-bold text-white shadow-[var(--shadow-glow)] hover:bg-saffron-600 transition-colors">Order Online</a>',
      '      <button data-menu-btn aria-expanded="false" aria-label="Open menu" class="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border border-clay-200 text-clay-800">',
      '        <svg data-icon-open width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
      '        <svg data-icon-close class="hidden" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><line x1="6" y1="6" x2="18" y2="18"/><line x1="6" y1="18" x2="18" y2="6"/></svg>',
      "      </button>",
      "    </div>",
      "  </div>",
      '  <div data-mobile-menu class="hidden md:hidden border-t border-clay-200/70 bg-cream-50">',
      '    <nav class="px-5 py-3 flex flex-col text-[15px] font-semibold text-clay-700" aria-label="Mobile">',
      navItems.map(function (item, index) { return mobileNavLink(item, index === navItems.length - 1); }).join(""),
      '      <a href="tel:+16302360600" class="mt-3 mb-2 inline-flex items-center justify-center gap-2 rounded-full border-2 border-green-500 px-5 py-2.5 text-green-600 font-bold">Call (630) 236-0600</a>',
      "    </nav>",
      "  </div>",
      "</header>"
    ].join("");
  }

  function renderFooter() {
    return [
      '<footer class="bg-clay-800 text-cream-100">',
      '  <div class="mx-auto max-w-7xl grid md:grid-cols-4 gap-10 px-5 lg:px-8 pt-14 pb-10">',
      '    <div class="md:col-span-1">',
      '      <span class="inline-block bg-white rounded-xl p-3">',
      '        <img src="' + logoUrl + '" alt="Nawabi Hyderabad House logo" width="160" height="62" class="h-16 w-auto" />',
      "      </span>",
      '      <p class="mt-4 text-sm leading-relaxed text-cream-200/80 max-w-xs">Authentic Hyderabadi biryani, dum-cooked daily since 2006. 100% halal. Taste the best.</p>',
      '      <a href="https://www.facebook.com/hhnaperville/" target="_blank" rel="noopener" class="mt-4 inline-flex items-center gap-2 text-sm text-cream-200/80 hover:text-white">',
      '        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z"/></svg>',
      "        Facebook",
      "      </a>",
      "    </div>",
      "    <div>",
      '      <h2 class="font-display text-lg text-white mb-4">Explore</h2>',
      '      <ul class="space-y-2.5 text-sm text-cream-200/80">',
      '        <li><a href="index.html" class="hover:text-white">Home</a></li>',
      '        <li><a href="menu.html" class="hover:text-white">Menu</a></li>',
      '        <li><a href="about.html" class="hover:text-white">About Us</a></li>',
      '        <li><a href="catering.html" class="hover:text-white">Catering</a></li>',
      '        <li><a href="contact.html" class="hover:text-white">Contact</a></li>',
      "      </ul>",
      "    </div>",
      "    <div>",
      '      <h2 class="font-display text-lg text-white mb-4">Visit</h2>',
      '      <address class="not-italic space-y-2.5 text-sm text-cream-200/80">',
      "        <p>4448 E New York St,<br />Aurora, IL 60504</p>",
      '        <p><a href="tel:+16302360600" class="hover:text-white">(630) 236-0600</a></p>',
      '        <p><a href="mailto:HHNaperville@gmail.com" class="hover:text-white">HHNaperville@gmail.com</a></p>',
      "      </address>",
      "    </div>",
      "    <div>",
      '      <h2 class="font-display text-lg text-white mb-4">Hours</h2>',
      '      <ul class="space-y-1.5 text-sm text-cream-200/80">',
      "        <li>Mon–Thu: 11:30am–3pm, 5:30–10pm</li>",
      "        <li>Fri: 11:30am–3pm, 5:30–10:30pm</li>",
      "        <li>Sat: 11:30am–10:30pm</li>",
      "        <li>Sun: 11:30am–9:30pm</li>",
      "      </ul>",
      '      <a href="https://order.toasttab.com/online/hhnaperville" target="_blank" rel="noopener" class="mt-4 inline-flex items-center gap-2 rounded-full bg-saffron-500 px-5 py-2.5 text-sm font-bold text-white hover:bg-saffron-600 transition-colors">Order Online</a>',
      "    </div>",
      "  </div>",
      '  <div class="border-t border-white/10 py-5 text-center text-xs text-cream-200/60 px-5">',
      "    © <span data-year>2026</span> Nawabi Hyderabad House — Biryani Place · Since 2006. All rights reserved.",
      "  </div>",
      "</footer>"
    ].join("");
  }

  var sharedHeader = document.getElementById("site-header");
  if (sharedHeader) sharedHeader.outerHTML = renderHeader();

  var sharedFooter = document.getElementById("site-footer");
  if (sharedFooter) sharedFooter.outerHTML = renderFooter();

  /* ---- Header scrolled state ---- */
  var header = document.querySelector("[data-site-header]");
  function onScrollHeader() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 40);
  }
  window.addEventListener("scroll", onScrollHeader, { passive: true });
  onScrollHeader();

  /* ---- Mobile menu ---- */
  var menuBtn = document.querySelector("[data-menu-btn]");
  var mobilePanel = document.querySelector("[data-mobile-menu]");
  var iconOpen = document.querySelector("[data-icon-open]");
  var iconClose = document.querySelector("[data-icon-close]");
  function setMobile(open) {
    if (!mobilePanel) return;
    mobilePanel.classList.toggle("hidden", !open);
    if (menuBtn) menuBtn.setAttribute("aria-expanded", String(open));
    if (iconOpen) iconOpen.classList.toggle("hidden", open);
    if (iconClose) iconClose.classList.toggle("hidden", !open);
  }
  if (menuBtn && mobilePanel) {
    menuBtn.addEventListener("click", function () {
      setMobile(mobilePanel.classList.contains("hidden"));
    });
    mobilePanel.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { setMobile(false); });
    });
  }

  /* ---- Smooth in-page anchors (offset for sticky header) ---- */
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var hash = link.getAttribute("href");
      if (!hash || hash === "#") return;
      var target = document.getElementById(hash.slice(1));
      if (!target) return;
      e.preventDefault();
      var h = header ? header.getBoundingClientRect().height : 0;
      var top = window.pageYOffset + target.getBoundingClientRect().top - h - 12;
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
      if (history.pushState) history.pushState(null, "", hash);
    });
  });

  /* ---- Reveal on scroll ---- */
  var reveals = document.querySelectorAll(".js-reveal");
  if (reveals.length && "IntersectionObserver" in window) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("is-visible");
          obs.unobserve(en.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { obs.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---- Menu category tabs ---- */
  var menuRoot = document.querySelector("[data-menu-root]");
  if (menuRoot) {
    var tabs = menuRoot.querySelectorAll("[data-menu-tab]");
    var panels = menuRoot.querySelectorAll("[data-menu-panel]");
    function activate(id) {
      tabs.forEach(function (t) {
        var on = t.getAttribute("data-menu-tab") === id;
        t.classList.toggle("bg-green-500", on);
        t.classList.toggle("text-white", on);
        t.classList.toggle("border-green-500", on);
        t.classList.toggle("bg-white", !on);
        t.classList.toggle("text-clay-700", !on);
        t.classList.toggle("border-clay-200", !on);
        t.setAttribute("aria-selected", String(on));
      });
      panels.forEach(function (p) {
        p.classList.toggle("is-active", p.getAttribute("data-menu-panel") === id);
      });
    }
    tabs.forEach(function (t) {
      t.addEventListener("click", function () { activate(t.getAttribute("data-menu-tab")); });
    });
    var hash = (location.hash || "").slice(1);
    var fromHash = hash && menuRoot.querySelector('[data-menu-tab="' + hash + '"]');
    var first = tabs[0];
    var initial = fromHash ? hash : (first ? first.getAttribute("data-menu-tab") : null);
    if (initial) {
      activate(initial);
      if (fromHash) {
        var h = header ? header.getBoundingClientRect().height : 0;
        var top = window.pageYOffset + menuRoot.getBoundingClientRect().top - h - 12;
        window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
      }
    }
  }

  /* ---- FAQ accordion ---- */
  document.querySelectorAll("[data-faq-q]").forEach(function (q) {
    q.addEventListener("click", function () {
      var ans = q.nextElementSibling;
      if (!ans) return;
      var open = !ans.classList.contains("hidden");
      q.classList.toggle("is-open", !open);
      q.setAttribute("aria-expanded", String(!open));
      ans.classList.toggle("hidden");
    });
  });

  /* ---- Scroll-to-top ---- */
  var toTop = document.querySelector("[data-to-top]");
  function onToTop() {
    if (!toTop) return;
    var show = window.scrollY > 500;
    toTop.classList.toggle("opacity-0", !show);
    toTop.classList.toggle("pointer-events-none", !show);
    toTop.classList.toggle("translate-y-3", !show);
  }
  if (toTop) {
    window.addEventListener("scroll", onToTop, { passive: true });
    onToTop();
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---- Scroll parallax for floating spice accents ---- */
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var parallaxEls = reduceMotion ? [] : Array.prototype.slice.call(document.querySelectorAll("[data-parallax]"));
  var rotateEls = reduceMotion ? [] : Array.prototype.slice.call(document.querySelectorAll("[data-rotate]"));
  if (parallaxEls.length || rotateEls.length) {
    var ticking = false;
    function applyScrollFx() {
      var vh = window.innerHeight;
      parallaxEls.forEach(function (el) {
        var r = el.getBoundingClientRect();
        var center = r.top + r.height / 2;
        var speed = parseFloat(el.getAttribute("data-parallax")) || 0.15;
        var offset = (center - vh / 2) * -speed;
        el.style.setProperty("--py", offset.toFixed(1) + "px");
      });
      rotateEls.forEach(function (el) {
        var r = el.getBoundingClientRect();
        // progress of the element travelling through the viewport, -1 .. 1
        var progress = (vh / 2 - (r.top + r.height / 2)) / vh;
        var deg = parseFloat(el.getAttribute("data-rotate")) || 90;
        el.style.transform = "rotate(" + (progress * deg).toFixed(2) + "deg)";
      });
      ticking = false;
    }
    function onScrollFx() {
      if (!ticking) { window.requestAnimationFrame(applyScrollFx); ticking = true; }
    }
    window.addEventListener("scroll", onScrollFx, { passive: true });
    window.addEventListener("resize", onScrollFx, { passive: true });
    applyScrollFx();
  }

  /* ---- Hero entrance ---- */
  var hero = document.querySelector(".hero-inner");
  if (hero) requestAnimationFrame(function () { hero.classList.add("is-loaded"); });

  /* ---- Current year in footer ---- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
