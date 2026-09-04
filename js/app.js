/* ═══════════════════════════════════════════════════════════════
   RIDU'S BIRTHDAY SCRAPBOOK — interactions ♡
   vanilla JS, no dependencies. respectful of reduced motion.
   ═══════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $ = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));

  /* ── global lightbox collection ───────────── */
  const LB_ITEMS = [];
  function lbRegister(src, cap, video) {
    LB_ITEMS.push({ src, cap, video: video || null });
    return LB_ITEMS.length - 1;
  }

  /* ═══════════ 1 · BUNTING FLAGS ═══════════ */
  (function bunting() {
    const g = $("#flags");
    const path = $(".bunting path");
    if (!g || !path) return;
    const total = path.getTotalLength();
    const colors = ["#ff8fb8", "#ffd76e", "#8ab6d6", "#b49ad6", "#7fc79a"];
    const N = 22;
    for (let i = 0; i < N; i++) {
      const p = path.getPointAtLength((i + 0.5) * (total / N));
      const c = colors[i % colors.length];
      const flag = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
      flag.setAttribute("points", `${p.x - 16},${p.y} ${p.x + 16},${p.y} ${p.x},${p.y + 34}`);
      flag.setAttribute("fill", c);
      flag.setAttribute("opacity", "0.92");
      flag.setAttribute("class", "flag");
      flag.style.animationDelay = (i * 0.18) + "s";
      g.appendChild(flag);
    }
  })();

  /* ═══════════ 2 · ENVELOPE → HERO CARD ═══════════ */
  (function envelope() {
    const scene = $("#envelopeScene");
    const btn = $("#envelopeBtn");
    const card = $("#heroCard");
    if (!scene || !btn || !card) return;

    function open() {
      if (scene.classList.contains("open")) return;
      scene.classList.add("open");
      heartBurst(scene);
      setTimeout(() => { card.hidden = false; }, REDUCED ? 50 : 800);
      btn.setAttribute("aria-label", "Envelope opened — happy birthday!");
    }
    btn.addEventListener("click", open);
    btn.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); }
    });

    function heartBurst(host) {
      if (REDUCED) return;
      for (let i = 0; i < 14; i++) {
        const h = document.createElement("span");
        h.textContent = "♡";
        h.style.cssText = `position:absolute;left:50%;top:46%;color:#ff8fb8;font-size:${(12 + Math.random() * 20).toFixed(0)}px;pointer-events:none;z-index:7;`;
        host.appendChild(h);
        const ang = (Math.random() * 360) * (Math.PI / 180);
        const dist = 120 + Math.random() * 160;
        h.animate(
          [
            { transform: "translate(-50%,-50%) scale(.4)", opacity: 1 },
            { transform: `translate(calc(-50% + ${Math.cos(ang) * dist}px), calc(-50% + ${Math.sin(ang) * dist - 80}px)) scale(1.15) rotate(${Math.random() * 60 - 30}deg)`, opacity: 0 },
          ],
          { duration: 1400 + Math.random() * 600, easing: "cubic-bezier(.2,.8,.3,1)" }
        ).onfinish = () => h.remove();
      }
    }
  })();

  /* ═══════════ 3 · LETTER ═══════════ */
  (function letter() {
    const sal = $("#letterSalutation");
    const body = $("#letterBody");
    const sign = $("#letterSign");
    if (!body || typeof SITE === "undefined" || !SITE.LETTER) return;
    sal.textContent = SITE.LETTER.salutation;
    SITE.LETTER.paragraphs.forEach((p) => {
      const el = document.createElement("p");
      if (typeof p === "object" && p.placeholder) {
        el.className = "letter-para-placeholder";
        el.textContent = p.placeholder;
      } else {
        el.textContent = typeof p === "object" ? p.text : p;
      }
      body.appendChild(el);
    });
    sign.textContent = SITE.LETTER.sign;
  })();

  /* ═══════════ 4 · POLAROID COLLAGE ═══════════ */
  (function collage() {
    const grid = $("#collageGrid");
    if (!grid || !SITE.COLLAGE) return;
    SITE.COLLAGE.forEach((p) => {
      const idx = lbRegister(p.src, p.cap);
      const card = document.createElement("button");
      card.type = "button";
      card.className = "polaroid";
      card.style.transform = `rotate(${p.tilt}deg)`;
      card.setAttribute("aria-label", `Photo: ${p.cap}`);
      card.dataset.lb = idx;

      const tape = document.createElement("span");
      tape.className = `p-tape ${p.tape}`;
      card.appendChild(tape);

      const img = document.createElement("img");
      img.src = p.src;
      img.alt = p.cap;
      img.loading = "lazy";
      img.decoding = "async";
      card.appendChild(img);

      const cap = document.createElement("span");
      cap.className = "polaroid-caption";
      cap.textContent = p.cap;
      card.appendChild(cap);

      const stickers = ["♡", "⭐", "🌙", "🌸"];
      const st = document.createElement("span");
      st.className = "p-sticker";
      st.textContent = stickers[idx % stickers.length];
      st.setAttribute("aria-hidden", "true");
      card.appendChild(st);

      card.addEventListener("click", () => lbOpen(idx));
      grid.appendChild(card);
    });
  })();

  /* ═══════════ 5 · TIMELINE ═══════════ */
  (function timeline() {
    const wrap = $("#timelineWrap");
    if (!wrap || !SITE.TIMELINE) return;
    SITE.TIMELINE.forEach((m) => {
      const item = document.createElement("div");
      item.className = "moment reveal";

      const dot = document.createElement("span");
      dot.className = "moment-dot";
      dot.textContent = m.icon;
      dot.setAttribute("aria-hidden", "true");
      item.appendChild(dot);

      const card = document.createElement("div");
      card.className = "moment-card";

      const when = document.createElement("span");
      when.className = "moment-when";
      when.textContent = m.when;
      card.appendChild(when);

      const title = document.createElement("h3");
      title.className = "moment-title";
      title.textContent = m.title;
      card.appendChild(title);

      if (m.text) {
        const text = document.createElement("p");
        text.className = "moment-text";
        text.textContent = m.text;
        card.appendChild(text);
      }

      if (m.media) {
        const idx = lbRegister(m.media.src, m.media.cap, m.media.video);
        const media = document.createElement("div");
        media.className = "moment-media";
        media.dataset.lb = idx;
        media.setAttribute("role", "button");
        media.setAttribute("tabindex", "0");
        media.setAttribute("aria-label", `Open media: ${m.media.cap}`);
        const img = document.createElement("img");
        img.src = m.media.src;
        img.alt = m.media.cap;
        img.loading = "lazy";
        media.appendChild(img);
        const badge = document.createElement("span");
        badge.className = "video-tag";
        badge.textContent = m.media.video ? "▶ watch" : "view ♡";
        media.appendChild(badge);
        media.addEventListener("click", () => lbOpen(idx));
        media.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") { e.preventDefault(); lbOpen(idx); }
        });
        card.appendChild(media);
      }

      item.appendChild(card);
      wrap.appendChild(item);
    });
  })();

  /* ═══════════ 6 · OUR LOVE STORY (CHAT BUBBLES) ═══════════ */
  (function story() {
    const wrap = $("#storyWrap");
    if (!wrap || !SITE.STORY) return;
    SITE.STORY.forEach((m) => {
      const item = document.createElement("article");
      item.className = "story-item reveal" + (m.big ? " big" : "");

      const card = document.createElement("div");
      card.className = "story-card";

      const when = document.createElement("span");
      when.className = "story-when";
      when.textContent = m.when;
      card.appendChild(when);

      if (m.title) {
        const t = document.createElement("h3");
        t.className = "story-title";
        t.textContent = m.title;
        card.appendChild(t);
      }

      if (m.lines && m.lines.length) {
        const chat = document.createElement("div");
        chat.className = "story-chat";
        let prevWho = null;
        m.lines.forEach((ln) => {
          if (ln.who !== prevWho) {
            const who = document.createElement("span");
            who.className = "bubble-who" + (ln.who === "him" ? " who-him" : "");
            who.textContent = ln.who === "him" ? "me" : "ridu ♡";
            chat.appendChild(who);
            prevWho = ln.who;
          }
          const b = document.createElement("p");
          b.className = "bubble " + (ln.who === "him" ? "bubble-him" : "bubble-her");
          b.textContent = ln.text;
          chat.appendChild(b);
        });
        card.appendChild(chat);
      }

      if (m.note) {
        const n = document.createElement("p");
        n.className = "story-note";
        n.textContent = m.note;
        card.appendChild(n);
      }

      if (m.quote) {
        const q = document.createElement("div");
        q.className = "story-quote";
        const big = document.createElement("p");
        big.className = "story-quote-big";
        big.textContent = m.quote.big;
        const sub = document.createElement("p");
        sub.className = "story-quote-sub";
        sub.textContent = m.quote.sub;
        q.append(big, sub);
        card.appendChild(q);
      }

      item.appendChild(card);
      wrap.appendChild(item);
    });
  })();

  /* ═══════════ 7 · VIDEOS ═══════════ */
  (function videos() {
    const grid = $("#videosGrid");
    if (!grid || !SITE.VIDEOS) return;
    SITE.VIDEOS.forEach((v) => {
      const card = document.createElement("div");
      card.className = "video-card";
      card.style.setProperty("--tilt", v.tilt + "deg");

      const frame = document.createElement("div");
      frame.className = "video-frame";

      const cover = document.createElement("button");
      cover.type = "button";
      cover.className = "video-cover";
      cover.setAttribute("aria-label", `Play video: ${v.title}`);

      const poster = document.createElement("img");
      poster.src = v.poster;
      poster.alt = v.title + " — video poster";
      poster.loading = "lazy";
      cover.appendChild(poster);

      const tag = document.createElement("span");
      tag.className = "video-tag";
      tag.textContent = v.title;
      cover.appendChild(tag);

      const play = document.createElement("span");
      play.className = "video-play";
      play.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l11-6.5z" fill="currentColor"/></svg>';
      cover.appendChild(play);

      cover.addEventListener("click", () => {
        const vid = document.createElement("video");
        vid.src = v.src;
        vid.controls = true;
        vid.autoplay = true;
        vid.playsInline = true;
        vid.preload = "metadata";
        vid.setAttribute("aria-label", v.title);
        cover.replaceWith(vid);
        vid.play().catch(() => { /* autoplay blocked — controls are there */ });
      });
      frame.appendChild(cover);
      card.appendChild(frame);

      const meta = document.createElement("div");
      meta.className = "video-meta";
      const t = document.createElement("h3");
      t.className = "video-title";
      t.textContent = v.title;
      const c = document.createElement("p");
      c.className = "video-cap";
      c.textContent = v.cap;
      meta.appendChild(t);
      meta.appendChild(c);
      card.appendChild(meta);

      grid.appendChild(card);
    });
  })();

  /* ═══════════ 7 · FULL ALBUM ═══════════ */
  (function album() {
    const wrap = $("#albumWrap");
    if (!wrap || !SITE.ALBUM) return;
    const tilts = [-1.6, 1.2, -0.8, 1.8, -1.2, 0.9];
    SITE.ALBUM.forEach((chap) => {
      const section = document.createElement("div");
      section.className = "album-chapter";

      const head = document.createElement("div");
      head.className = "reveal";
      const h = document.createElement("h3");
      h.className = "album-chapter-title";
      const badge = document.createElement("span");
      badge.className = "chap-badge";
      badge.textContent = chap.badge;
      h.appendChild(document.createTextNode(chap.chapter + " "));
      h.appendChild(badge);
      const sub = document.createElement("p");
      sub.className = "album-chapter-sub";
      sub.textContent = chap.sub;
      head.appendChild(h);
      head.appendChild(sub);
      section.appendChild(head);

      const grid = document.createElement("div");
      grid.className = "album-grid";
      chap.photos.forEach((p, i) => {
        const idx = lbRegister(p.src, p.cap);
        const ph = document.createElement("button");
        ph.type = "button";
        ph.className = "album-photo";
        ph.style.setProperty("--tilt", tilts[i % tilts.length] + "deg");
        ph.setAttribute("aria-label", `Photo: ${p.cap}`);
        ph.dataset.lb = idx;
        const img = document.createElement("img");
        img.src = p.src;
        img.alt = p.cap;
        img.loading = "lazy";
        img.decoding = "async";
        ph.appendChild(img);
        const cap = document.createElement("span");
        cap.className = "a-cap";
        cap.textContent = p.cap;
        ph.appendChild(cap);
        ph.addEventListener("click", () => lbOpen(idx));
        grid.appendChild(ph);
      });
      section.appendChild(grid);
      wrap.appendChild(section);
    });
  })();

  /* ═══════════ 8 · HER FAVOURITE THINGS ═══════════ */
  (function favourites() {
    const grid = $("#favsGrid");
    if (!grid || !SITE.FAVOURITES) return;
    SITE.FAVOURITES.forEach((f) => {
      const item = document.createElement("div");
      item.className = "fav-item reveal";

      const card = document.createElement("div");
      card.className = "fav-card";

      const em = document.createElement("span");
      em.className = "fav-emoji";
      em.textContent = f.emoji;
      em.setAttribute("aria-hidden", "true");

      const label = document.createElement("span");
      label.className = "fav-label";
      label.textContent = f.label;

      const text = document.createElement("p");
      text.className = "fav-text";
      text.textContent = f.text;

      card.append(em, label, text);
      item.appendChild(card);
      grid.appendChild(item);
    });
  })();

  /* ═══════════ 9 · LOVE CARDS ═══════════ */
  (function loveCards() {
    const grid = $("#loveGrid");
    if (!grid || !SITE.LOVE_CARDS) return;
    SITE.LOVE_CARDS.forEach((c) => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "love-card";
      card.setAttribute("aria-label", `Thing I love: ${c.label}. Tap to reveal.`);

      const inner = document.createElement("div");
      inner.className = "love-inner";

      const front = document.createElement("div");
      front.className = "love-face love-front";
      const em = document.createElement("span");
      em.className = "love-emoji";
      em.textContent = c.emoji;
      const label = document.createElement("span");
      label.className = "love-label";
      label.textContent = c.label;
      const hint = document.createElement("span");
      hint.className = "love-hint";
      hint.textContent = "tap ♡";
      front.append(em, label, hint);

      const back = document.createElement("div");
      back.className = "love-face love-back";
      const text = document.createElement("span");
      text.className = "love-text";
      text.textContent = c.text;
      back.appendChild(text);

      inner.append(front, back);
      card.appendChild(inner);
      card.addEventListener("click", () => card.classList.toggle("flipped"));
      grid.appendChild(card);
    });
  })();

  /* ═══════════ 10 · SECRET MODAL ═══════════ */
  (function secret() {
    const latch = $("#secretLatch");
    const modal = $("#secretModal");
    if (!latch || !modal || !SITE.SECRET) return;
    $("#secretText").textContent = SITE.SECRET.text;
    $("#secretSmall").textContent = SITE.SECRET.small;

    let lastFocus = null;
    function openModal() {
      lastFocus = document.activeElement;
      modal.hidden = false;
      $("#secretClose").focus();
    }
    function closeModal() {
      modal.hidden = true;
      if (lastFocus) lastFocus.focus();
    }
    latch.addEventListener("click", openModal);
    latch.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openModal(); }
    });
    $("#secretClose").addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !modal.hidden) closeModal();
    });
  })();

  /* ═══════════ 11 · FINAL MESSAGE + FLOATING HEARTS ═══════════ */
  (function final() {
    const t = $("#finalText");
    const ps = $("#finalPs");
    if (t && SITE.FINAL) {
      t.textContent = SITE.FINAL.text;
      ps.textContent = SITE.FINAL.ps;
      const motto = $("#finalMotto");
      if (motto) {
        motto.textContent = "";
        if (SITE.FINAL.motto) {
          const mo = document.createElement("p");
          mo.className = "final-motto-line";
          mo.textContent = SITE.FINAL.motto;
          motto.appendChild(mo);
        }
        if (SITE.FINAL.mottoSub) {
          const ms = document.createElement("p");
          ms.className = "final-motto-sub";
          ms.textContent = SITE.FINAL.mottoSub;
          motto.appendChild(ms);
        }
      }
      const foot = $(".final-footer");
      if (foot) foot.textContent = SITE.FINAL.footer;
    }
    const float = $("#finalFloat");
    if (float && !REDUCED) {
      const glyph = ["♡", "✿", "★"];
      const n = 16;
      for (let i = 0; i < n; i++) {
        const h = document.createElement("span");
        h.className = "f-heart";
        h.textContent = glyph[i % glyph.length];
        h.style.left = (4 + Math.random() * 92) + "%";
        h.style.fontSize = (12 + Math.random() * 16) + "px";
        const dur = 9 + Math.random() * 9;
        h.style.animationDuration = dur + "s";
        h.style.animationDelay = (Math.random() * dur) + "s";
        h.style.opacity = ".0";
        float.appendChild(h);
      }
    }
    const replay = $("#replayBtn");
    if (replay) {
      replay.addEventListener("click", () => {
        document.querySelector(".envelope-scene").classList.remove("open");
        $("#heroCard").hidden = true;
        window.scrollTo({ top: 0, behavior: REDUCED ? "auto" : "smooth" });
      });
    }
  })();

  /* ═══════════ 12 · LIGHTBOX ═══════════ */
  const lb = $("#lightbox");
  const lbMedia = $("#lbMedia");
  const lbCaption = $("#lbCaption");
  let lbIndex = 0;
  let lbLastFocus = null;

  function lbRender() {
    const item = LB_ITEMS[lbIndex];
    lbMedia.innerHTML = "";
    lbMedia.style.setProperty("--lb-tilt", (lbIndex % 2 ? 1 : -1) + "deg");
    if (item.video) {
      const v = document.createElement("video");
      v.src = item.video;
      v.controls = true;
      v.autoplay = true;
      v.playsInline = true;
      v.setAttribute("aria-label", item.cap);
      lbMedia.appendChild(v);
      v.play().catch(() => {});
    } else {
      const img = document.createElement("img");
      img.src = item.src;
      img.alt = item.cap;
      lbMedia.appendChild(img);
    }
    lbCaption.textContent = item.cap;
    let counter = $("#lbCounter");
    if (!counter) {
      counter = document.createElement("div");
      counter.id = "lbCounter";
      counter.className = "lb-counter";
      lb.appendChild(counter);
    }
    counter.textContent = `${lbIndex + 1} / ${LB_ITEMS.length}`;
  }

  function lbOpen(i) {
    lbIndex = i;
    lbLastFocus = document.activeElement;
    lb.hidden = false;
    document.body.style.overflow = "hidden";
    lbRender();
    $("#lbClose").focus();
  }
  function lbCloseFn() {
    lb.hidden = true;
    document.body.style.overflow = "";
    const v = lbMedia.querySelector("video");
    if (v) v.pause();
    if (lbLastFocus) lbLastFocus.focus();
  }
  function lbStep(d) {
    lbIndex = (lbIndex + d + LB_ITEMS.length) % LB_ITEMS.length;
    lbRender();
  }

  window.lbOpen = lbOpen; // used by collage/timeline/album closures
  $("#lbClose").addEventListener("click", lbCloseFn);
  $("#lbPrev").addEventListener("click", () => lbStep(-1));
  $("#lbNext").addEventListener("click", () => lbStep(1));
  lb.addEventListener("click", (e) => { if (e.target === lb) lbCloseFn(); });
  document.addEventListener("keydown", (e) => {
    if (lb.hidden) return;
    if (e.key === "Escape") lbCloseFn();
    if (e.key === "ArrowLeft") lbStep(-1);
    if (e.key === "ArrowRight") lbStep(1);
  });

  /* ═══════════ 13 · SCROLL REVEALS ═══════════ */
  (function reveals() {
    const els = $$(".reveal");
    if (REDUCED || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const stagger = {};
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          const parent = en.target.parentElement;
          const key = parent ? Array.prototype.indexOf.call(parent.children, en.target) : 0;
          const delay = (key % 4) * 90;
          setTimeout(() => en.target.classList.add("in"), delay);
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach((el) => io.observe(el));
  })();

  /* ═══════════ 14 · MUSIC BOX (WebAudio) ═══════════ */
  (function musicBox() {
    const btn = $("#musicToggle");
    if (!btn) return;
    let ctx = null;
    let playing = false;
    let loopTimer = null;

    // Happy Birthday, music-box register (G major-ish, C4 base)
    const N = { G4: 392.0, A4: 440.0, B4: 493.9, C5: 523.3, D5: 587.3, E5: 659.3, F5: 698.5, G5: 784.0, E4: 329.6, F4: 349.2, C4: 261.6, D4: 293.7, G3: 196.0 };
    const beat = 0.46;
    const song = [
      // happy birthday to you
      [N.G4, 0.5], [N.G4, 0.5], [N.A4, 1], [N.G4, 1], [N.C5, 1], [N.B4, 1.8],
      // happy birthday to you
      [N.G4, 0.5], [N.G4, 0.5], [N.A4, 1], [N.G4, 1], [N.D5, 1], [N.C5, 1.8],
      // happy birthday dear ridu
      [N.G4, 0.5], [N.G4, 0.5], [N.G5, 1], [N.E5, 1], [N.C5, 1], [N.B4, 1], [N.A4, 1.8],
      // happy birthday to you
      [N.F5, 0.5], [N.F5, 0.5], [N.E5, 1], [N.C5, 1], [N.D5, 1], [N.C5, 2.2],
    ];

    function playSong() {
      if (!ctx) return;
      let t = ctx.currentTime + 0.05;
      song.forEach(([freq, dur]) => {
        chime(freq, t, dur * beat);
        t += dur * beat;
      });
      // schedule next loop
      const total = t - ctx.currentTime + 2.8;
      loopTimer = setTimeout(() => { if (playing) playSong(); }, total * 1000);
    }

    function chime(freq, at, dur) {
      const o = ctx.createOscillator();
      const o2 = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = "sine";
      o.frequency.value = freq;
      o2.type = "sine";
      o2.frequency.value = freq * 3; // music-box overtone shimmer
      const g2 = ctx.createGain();
      g2.gain.value = 0.14;
      const master = ctx.createGain();
      master.gain.setValueAtTime(0.0001, at);
      master.gain.exponentialRampToValueAtTime(0.22, at + 0.012);
      master.gain.exponentialRampToValueAtTime(0.0001, at + Math.min(dur + 1.1, 1.6));
      o.connect(master);
      o2.connect(g2).connect(master);
      master.connect(ctx.destination);
      o.start(at); o.stop(at + 1.7);
      o2.start(at); o2.stop(at + 1.7);
    }

    function start() {
      if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
      if (ctx.state === "suspended") ctx.resume();
      playing = true;
      playSong();
    }
    function stop() {
      playing = false;
      if (loopTimer) clearTimeout(loopTimer);
      if (ctx) { ctx.close(); ctx = null; }
    }

    btn.addEventListener("click", () => {
      const on = btn.getAttribute("aria-pressed") !== "true";
      btn.setAttribute("aria-pressed", on ? "true" : "false");
      btn.setAttribute("aria-label", on ? "Pause birthday music box" : "Play birthday music box");
      on ? start() : stop();
    });
  })();
})();
