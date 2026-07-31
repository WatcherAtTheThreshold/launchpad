// ================================================================
// LAUNCHPAD — feedback.js
// Drop-in song feedback panel for the mixtape pages. One panel that
// always targets the currently-playing track: a star rating, optional
// mood chips, an optional note. Remembers each visitor's ratings in
// localStorage and delivers new ones to you.
//
// USAGE (per page):
//   <script src="js/feedback.js"></script>
//   Feedback.init({ album: "Marples", container: document.getElementById("feedback-panel") });
//   ...and call Feedback.setTrack(displayName) whenever the track changes.
// ================================================================

window.Feedback = (function () {
  // ── DELIVERY CONFIG ─────────────────────────────────────────────
  // Leave ENDPOINT empty to use the email fallback (opens the
  // listener's mail app, pre-addressed to you). Paste a Formspree
  // endpoint — "https://formspree.io/f/xxxxxxxx" — to collect silently
  // in-page instead. That single line is the only change needed.
  const ENDPOINT = "";
  const EMAIL = "monahanhunt@gmail.com";
  // ────────────────────────────────────────────────────────────────

  const MOODS = [
    "haunting", "warm", "restless", "hopeful",
    "hypnotic", "tender", "melancholy", "playful"
  ];

  let album = "";
  let currentSong = "";
  let root = null;
  let saved = {};                 // per-song saved feedback (localStorage)
  let draft = blankDraft();       // the panel's live working state

  function blankDraft() { return { rating: 0, moods: [], note: "" }; }
  function storeKey() { return "mp-feedback-" + album.toLowerCase().replace(/\s+/g, "-"); }

  function loadSaved() {
    try { saved = JSON.parse(localStorage.getItem(storeKey()) || "{}"); }
    catch (e) { saved = {}; }
  }
  function persist() {
    try { localStorage.setItem(storeKey(), JSON.stringify(saved)); } catch (e) {}
  }

  function injectStyles() {
    if (document.getElementById("feedback-styles")) return;
    const css = `
      .feedback-panel {
        display: flex; flex-direction: column; gap: 0.9rem;
        padding: 2rem 1.5rem; overflow-y: auto; min-height: 0;
        color: rgba(162, 154, 205, 0.85);
        font-family: 'Source Sans Pro', sans-serif;
      }
      .fb-eyebrow {
        font-size: 0.68rem; text-transform: uppercase; letter-spacing: 0.12em;
        color: rgba(162, 154, 205, 0.45);
      }
      .fb-song {
        font-size: 1.05rem; color: #c3bce7; letter-spacing: 0.04em;
        text-transform: uppercase; line-height: 1.3;
      }
      .fb-stars { display: flex; gap: 0.35rem; }
      .fb-star {
        background: none; border: none; padding: 0; cursor: pointer;
        font-size: 1.7rem; line-height: 1;
        color: rgba(162, 154, 205, 0.28);
        transition: color 0.15s ease, transform 0.1s ease;
      }
      .fb-star:hover { transform: translateY(-1px); }
      .fb-star.on { color: #c3bce7; text-shadow: 0 0 8px rgba(195, 188, 231, 0.4); }
      .fb-chips { display: flex; flex-wrap: wrap; gap: 0.4rem; }
      .fb-chip {
        background: transparent; cursor: pointer;
        border: 1px solid rgba(162, 154, 205, 0.28);
        color: rgba(162, 154, 205, 0.6);
        font-family: inherit; font-size: 0.72rem;
        padding: 0.28rem 0.6rem; border-radius: 999px;
        text-transform: lowercase; letter-spacing: 0.03em;
        transition: all 0.15s ease;
      }
      .fb-chip:hover { border-color: rgba(195, 188, 231, 0.6); color: #c3bce7; }
      .fb-chip.on {
        background: rgba(195, 188, 231, 0.85); border-color: rgba(195, 188, 231, 0.85);
        color: #1a1f2e; font-weight: 600;
      }
      .fb-note {
        width: 100%; min-height: 64px; resize: vertical;
        background: rgba(0, 0, 0, 0.25);
        border: 1px solid rgba(162, 154, 205, 0.2); border-radius: 6px;
        color: #d9d5ec; font-family: inherit; font-size: 0.85rem;
        padding: 0.6rem 0.7rem; line-height: 1.5;
      }
      .fb-note::placeholder { color: rgba(162, 154, 205, 0.35); }
      .fb-note:focus { outline: none; border-color: rgba(195, 188, 231, 0.5); }
      .fb-send {
        align-self: flex-start; cursor: pointer;
        background: rgba(195, 188, 231, 0.85); border: none; border-radius: 6px;
        color: #1a1f2e; font-family: inherit; font-weight: 600;
        font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em;
        padding: 0.5rem 1.3rem; transition: opacity 0.2s ease, transform 0.1s ease;
      }
      .fb-send:hover { transform: translateY(-1px); }
      .fb-send:disabled { opacity: 0.3; cursor: default; transform: none; }
      .fb-status {
        font-size: 0.72rem; color: rgba(140, 200, 150, 0.85); min-height: 1em;
        letter-spacing: 0.04em; transition: opacity 0.3s ease;
      }
      .fb-saved-note { font-size: 0.68rem; color: rgba(162, 154, 205, 0.4); font-style: italic; }
      @media (max-width: 600px) {
        .feedback-panel { padding: 1rem 0.75rem; gap: 0.6rem; }
        .fb-star { font-size: 1.4rem; }
      }
    `;
    const style = document.createElement("style");
    style.id = "feedback-styles";
    style.textContent = css;
    document.head.appendChild(style);
  }

  function hasInput() {
    return draft.rating > 0 || draft.moods.length > 0 || draft.note.trim().length > 0;
  }

  function render() {
    if (!root) return;
    const prior = saved[currentSong];
    const priorLine = prior && prior.sent
      ? `<div class="fb-saved-note">you rated this ${"★".repeat(prior.rating)}${"☆".repeat(5 - prior.rating)}${prior.moods && prior.moods.length ? " · " + prior.moods.join(", ") : ""}</div>`
      : "";

    root.innerHTML = `
      <div class="fb-eyebrow">how did this land?</div>
      <div class="fb-song">${currentSong || "—"}</div>
      <div class="fb-stars" id="fb-stars">
        ${[1, 2, 3, 4, 5].map(n =>
          `<button class="fb-star${n <= draft.rating ? " on" : ""}" data-n="${n}" aria-label="${n} star${n > 1 ? "s" : ""}">★</button>`
        ).join("")}
      </div>
      <div class="fb-eyebrow">what did it evoke?</div>
      <div class="fb-chips" id="fb-chips">
        ${MOODS.map(m =>
          `<button class="fb-chip${draft.moods.includes(m) ? " on" : ""}" data-m="${m}">${m}</button>`
        ).join("")}
      </div>
      <textarea class="fb-note" id="fb-note" placeholder="a note, if you like… (good or bad, all welcome)">${draft.note}</textarea>
      <button class="fb-send" id="fb-send"${hasInput() ? "" : " disabled"}>send</button>
      <div class="fb-status" id="fb-status"></div>
      ${priorLine}
    `;

    root.querySelectorAll(".fb-star").forEach(btn => {
      btn.addEventListener("click", () => {
        const n = parseInt(btn.dataset.n, 10);
        draft.rating = (draft.rating === n) ? 0 : n; // click same star to clear
        render();
      });
    });
    root.querySelectorAll(".fb-chip").forEach(btn => {
      btn.addEventListener("click", () => {
        const m = btn.dataset.m;
        const i = draft.moods.indexOf(m);
        if (i >= 0) draft.moods.splice(i, 1); else draft.moods.push(m);
        render();
      });
    });
    const noteEl = root.querySelector("#fb-note");
    noteEl.addEventListener("input", () => {
      draft.note = noteEl.value;
      const send = root.querySelector("#fb-send");
      send.disabled = !hasInput();
    });
    root.querySelector("#fb-send").addEventListener("click", submit);
  }

  function submit() {
    if (!hasInput()) return;
    const payload = {
      album: album,
      song: currentSong,
      rating: draft.rating,
      moods: draft.moods.slice(),
      note: draft.note.trim(),
      when: new Date().toISOString()
    };
    saved[currentSong] = Object.assign({}, payload, { sent: true });
    persist();
    deliver(payload);

    const status = root.querySelector("#fb-status");
    if (status) status.textContent = ENDPOINT
      ? "✓ sent — thank you, truly."
      : "✓ opening your mail app to send… thank you.";
    const send = root.querySelector("#fb-send");
    if (send) { send.disabled = true; send.textContent = "sent"; }
  }

  function deliver(p) {
    if (ENDPOINT) {
      fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(p)
      }).catch(() => {});
      return;
    }
    // Email fallback — composes a pre-filled message to you
    const stars = p.rating ? "★".repeat(p.rating) + "☆".repeat(5 - p.rating) : "(no rating)";
    const lines = [
      "Album: " + p.album,
      "Song:  " + p.song,
      "Rating: " + stars,
      "Mood:   " + (p.moods.length ? p.moods.join(", ") : "(none)"),
      "",
      p.note || "(no note)"
    ];
    const subject = encodeURIComponent(p.album + " feedback — " + p.song);
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = "mailto:" + EMAIL + "?subject=" + subject + "&body=" + body;
  }

  function init(opts) {
    album = opts.album || "";
    root = opts.container;
    if (!root) return;
    root.classList.add("feedback-panel");
    injectStyles();
    loadSaved();
    render();
  }

  function setTrack(name) {
    currentSong = name;
    const prior = saved[name];
    draft = prior
      ? { rating: prior.rating || 0, moods: (prior.moods || []).slice(), note: prior.note || "" }
      : blankDraft();
    render();
  }

  return { init, setTrack, MOODS };
})();
