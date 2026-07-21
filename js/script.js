const APPS = [
  // ── Primary ──
  {
    name: "Writers Workbench",
    url: "https://watcheratthethreshold.github.io/writer-workbench/",
    icon: "\u270D\uFE0F",
    category: "primary",
    desc: "Writing tools and workbench",
    image: "images/writers-workbench.png",
    sigil: "images/sigils/writer-workbench-sigil.png"
  },
 
  {
    name: "Markdown Editor",
    url: "https://watcheratthethreshold.github.io/markdown-editor/",
    icon: "\uD83D\uDCDD",
    category: "primary",
    desc: "Markdown editing tool",
    image: "images/markdown-editor.png",
    sigil: "images/sigils/markdown-editor-sigil.png"
  },

 {
    name: "Everything Planner",
    url: "https://watcheratthethreshold.github.io/Everything/",
    icon: "\uD83D\uDCCB",
    category: "primary",
    desc: "Productivity dashboard",
    image: "images/everything-planner.png",
    sigil: "images/sigils/everything-planner-sigil.png"
  },

  {
    name: "Sheet to MIDI",
    url: "https://watcheratthethreshold.github.io/music-maker/sheet-to-midi/",
    icon: "\uD83C\uDFBC",
    category: "primary",
    desc: "Sheet music to MIDI converter",
    image: "images/sheet-to-midi.png",
    sigil: "images/sigils/sheet-to-midi-sigil.png"
  },
  // ── Business ──
  {
    name: "Fairweather Productions",
    url: "https://watcheratthethreshold.github.io/fairweather-productions/",
    icon: "\uD83C\uDFAC",
    category: "business",
    desc: "Production site",
    image: "images/fairweather-productions.png",
    sigil: "images/sigils/fairweather-productions-sigil.png"
  },

  {
    name: "GitHub",
    url: "https://github.com",
    icon: "\uD83D\uDC19",
    category: "business",
    desc: "GitHub dashboard",
    image: "images/github.png",
    sigil: "images/sigils/github-sigil.png"
  },

  {
    name: "Fairweather Print Media",
    url: "https://watcheratthethreshold.github.io/fairweather-print-media/",
    icon: "\uD83D\uDDA8\uFE0F",
    category: "business",
    desc: "Print media site",
    image: "images/fairweather-print-media.png",
    sigil: "images/sigils/fairweather-print-media-sigil.png"
  },

  {
    name: "Google Docs",
    url: "https://docs.google.com",
    icon: "\uD83D\uDCC4",
    category: "business",
    desc: "Google Docs home",
    image: "images/google-docs.png",
    sigil: "images/sigils/google-docs-sigil.png"
  },


  // ── Sites ──




  // ── Games ──
    {
    name: "Chronicles",
    url: "https://watcheratthethreshold.github.io/chronicles/",
    icon: "\uD83D\uDCDC",
    category: "games",
    desc: "Narrative card/dice roguelike",
    sigil: "images/sigils/chronicles-sigil.png"
  },
  {
    name: "Cruxfade Micro",
    url: "https://watcheratthethreshold.github.io/cruxfade-micro/",
    icon: "\u2728",
    category: "games",
    desc: "Reference game repo",
    sigil: "images/sigils/cruxfade-micro-sigil.png"
  },
  {
    name: "Shadows of the Deck",
    url: "https://watcheratthethreshold.github.io/shadows-of-the-deck/",
    icon: "\uD83C\uDCCF",
    category: "games",
    desc: "Roguelike card game",
    sigil: "images/sigils/shadows-of-the-deck-sigil.png"
  },
  {
    name: "Rooks Gambit",
    url: "https://watcheratthethreshold.github.io/rooks-gambit/",
    icon: "\u265C",
    category: "games",
    desc: "Chess960 variant",
    sigil: "images/sigils/rooks-gambit-sigil.png"
  },

  {
     name: "Coherence",
    url: "https://watcheratthethreshold.github.io/coherence/",
    icon: "\uD83D\uDD2E",
    category: "games",
    desc: "Creative project",
    sigil: "images/sigils/coherence-sigil.png"
  },

  // ── Links ──
  {
    name: "YouTube",
    url: "https://www.youtube.com",
    icon: "▶",
    category: "links",
    desc: "Video streaming",
    sigil: "images/sigils/youtube-sigil.png"
  },
  {
    name: "Netflix",
    url: "https://www.netflix.com",
    icon: "🎬",
    category: "links",
    desc: "Movies & TV",
    sigil: "images/sigils/netflix.sigil.png"
  },
  {
    name: "Midjourney",
    url: "https://www.midjourney.com",
    icon: "🎨",
    category: "links",
    desc: "AI image generation",
    sigil: "images/sigils/midjourney-sigil.png"
  },
  {
    name: "Gmail",
    url: "https://mail.google.com",
    icon: "✉",
    category: "links",
    desc: "Email",
    sigil: "images/sigils/gmail-sigil.png"
  },
  {
    name: "Amazon",
    url: "https://www.amazon.com",
    icon: "📦",
    category: "links",
    desc: "Shopping",
    sigil: "images/sigils/amazon-sigil.png"
  },

  // ── AI ──
  {
    name: "Claude",
    url: "https://claude.ai",
    icon: "🤖",
    category: "ai",
    desc: "Anthropic AI assistant",
    sigil: "images/sigils/claude-sigil.png"
  },
  {
    name: "Gemini",
    url: "https://gemini.google.com",
    icon: "✦",
    category: "ai",
    desc: "Google AI assistant",
    sigil: "images/sigils/gemini-sigil.png"
  },
  {
    name: "DeepSeek",
    url: "https://chat.deepseek.com",
    icon: "🔍",
    category: "ai",
    desc: "DeepSeek AI assistant",
    sigil: "images/sigils/deepseek-sigil.png"
  },
  {
    name: "ChatGPT",
    url: "https://chat.openai.com",
    icon: "💬",
    category: "ai",
    desc: "OpenAI AI assistant",
    sigil: "images/sigils/chat-gpt-sigil.png"
  },
  {
    name: "Grok",
    url: "https://grok.com",
    icon: "⚡",
    category: "ai",
    desc: "xAI assistant",
    sigil: "images/sigils/grok-sigil.png"
  },
];

// Category display order and labels
const CATEGORIES = [
  { key: "primary", label: "Daily Essentials" },
  { key: "business", label: "Business" },
  { key: "games", label: "Games" },
  { key: "links", label: "Links" },
  { key: "ai", label: "AI" },
  { key: "sites", label: "Sites & Projects" }
];

// ── Render ──

function render(filter = "") {
  const dashboard = document.getElementById("dashboard");
  const term = filter.toLowerCase();

  dashboard.innerHTML = CATEGORIES.map(cat => {
    const apps = APPS.filter(app => app.category === cat.key);
    const visible = apps.filter(app =>
      app.name.toLowerCase().includes(term) ||
      (app.desc && app.desc.toLowerCase().includes(term))
    );

    if (visible.length === 0) return "";

    const cards = visible.map(app => {
      const hasPrev = !!app.image;
      const sigilHTML = app.sigil
        ? `<img class="card-sigil card-sigil-badge" src="${app.sigil}" alt="" loading="lazy">`
        : "";

      return `
        <a href="${app.url}" target="_blank" rel="noopener" class="card${hasPrev ? ' has-preview' : ''}">
          ${hasPrev ? `<div class="card-preview-wrap"><img class="card-preview" src="${app.image}" alt="${app.name}" loading="lazy"></div>` : ""}
          <span class="card-name">${app.name}</span>
          ${app.desc ? `<span class="card-desc">${app.desc}</span>` : ""}
          ${sigilHTML}
        </a>
      `;
    }).join("");

    return `
      <section class="section" data-category="${cat.key}">
        <h2 class="section-title">${cat.label}</h2>
        <div class="card-grid">${cards}</div>
      </section>
    `;
  }).join("");
}

// ── Search (disabled — restore when project list grows) ──

// const searchInput = document.getElementById("search");
//
// searchInput.addEventListener("input", () => {
//   render(searchInput.value);
// });
//
// document.addEventListener("keydown", (e) => {
//   if (e.key === "/" && document.activeElement !== searchInput) {
//     e.preventDefault();
//     searchInput.focus();
//   }
//   if (e.key === "Escape") {
//     searchInput.value = "";
//     searchInput.blur();
//     render();
//   }
// });

// ── Initial render ──

render();

// ── Music Player ──

(function () {
  const SOUNDS_PATH = "audio/tape-player-sounds/";
  const TAPE_PATH = "images/tape-graphic/";
  const FADE_MS = 2000;
  const CROSSFADE_MS = 3000;
  const CROSSFADE_OFFSET = 3;
  const TAPE_FRAME_MS = 75;

  const ALBUM_PATHS = {
    winter:    "audio/music/winter/",
    spring:    "audio/music/spring-mix/",
    interlude: "audio/music/interlude/",
    marples:   "audio/music/marples/"
  };

  const ALBUM_TAPE_FRAMES = {
    winter: [
      TAPE_PATH + "tape-playing/tape-playing1.png",
      TAPE_PATH + "tape-playing/tape-playing2.png",
      TAPE_PATH + "tape-playing/tape-playing3.png",
      TAPE_PATH + "tape-playing/tape-playing4.png"
    ],
    spring: [
      TAPE_PATH + "tape-playing/seasons/spring-mixtape-small1.png",
      TAPE_PATH + "tape-playing/seasons/spring-mixtape-small2.png",
      TAPE_PATH + "tape-playing/seasons/spring-mixtape-small3.png",
      TAPE_PATH + "tape-playing/seasons/spring-mixtape-small4.png"
    ],
    interlude: [
      TAPE_PATH + "tape-playing/interlude/interlude-mixtape1.png",
      TAPE_PATH + "tape-playing/interlude/interlude-mixtape2.png",
      TAPE_PATH + "tape-playing/interlude/interlude-mixtape3.png",
      TAPE_PATH + "tape-playing/interlude/interlude-mixtape4.png"
    ],
    marples: [
      TAPE_PATH + "tape-playing/marples/marples-tape1.png",
      TAPE_PATH + "tape-playing/marples/marples-tape2.png",
      TAPE_PATH + "tape-playing/marples/marples-tape3.png",
      TAPE_PATH + "tape-playing/marples/marples-tape4.png"
    ]
  };

  const ALL_TRACKS = [
    // Winter
    { file: "sunday-new-launchpad.mp3",   album: "winter" },
    { file: "ambient.mp3",                album: "winter" },
    { file: "ambient2.mp3",               album: "winter" },
    { file: "meander-fin.mp3",            album: "winter" },
    { file: "coherence.mp3",              album: "winter" },
    { file: "coherence-threshold.mp3",    album: "winter" },
    { file: "daily-routine.mp3",          album: "winter" },
    { file: "jaunt.mp3",                  album: "winter" },
    { file: "soft-drift.mp3",             album: "winter" },
    { file: "stroll.mp3",                 album: "winter" },
    { file: "stroll2.mp3",                album: "winter" },
    { file: "sunday-lofi-launchpad2.mp3", album: "winter" },
    { file: "sunday-launchpad.mp3",       album: "winter" },
    { file: "sunday-new-launchpad2.mp3",  album: "winter" },
    { file: "sunday-lofi-launchpad.mp3",  album: "winter" },
    { file: "sunday-chill-launchpad.mp3", album: "winter" },
    // Spring
    { file: "MothersDayInG.mp3",          album: "spring" },
    { file: "InTheGarden.mp3",            album: "spring" },
    { file: "LaterSundayInB.mp3",         album: "spring" },
    { file: "TheBirchesInC.mp3",          album: "spring" },
    { file: "MondayInC.mp3",              album: "spring" },
    { file: "Phase2-C-2.mp3",             album: "spring" },
    { file: "PluieEtGris.mp3",            album: "spring" },
    { file: "TheBreeze.mp3",              album: "spring" },
    { file: "FrissonObscur.mp3",          album: "spring" },
    { file: "SilverSurfer.mp3",           album: "spring" },
    { file: "WaitingOnSpring.mp3",        album: "spring" },
    { file: "Forest.mp3",                 album: "spring" },
    // Interlude
    { file: "AsinaMundi.mp3",             album: "interlude" },
    { file: "ForestWindAndRain.mp3",      album: "interlude" },
    { file: "Jupiter.mp3",                album: "interlude" },
    { file: "Lament.mp3",                 album: "interlude" },
    { file: "EponaMundi.mp3",             album: "interlude" },
    { file: "Venus.mp3",                  album: "interlude" },
    { file: "gallery.mp3",                album: "interlude" },
    { file: "mix.mp3",                    album: "interlude" },
    { file: "refrain.mp3",                album: "interlude" },
    { file: "picaroPicante.mp3",          album: "interlude" },
    { file: "inversions.mp3",             album: "interlude" },
    { file: "Saturn.mp3",                 album: "interlude" },
    { file: "stackingTriads.mp3",         album: "interlude" },
    // Marples
    { file: "Marples.mp3",               album: "marples" },
    { file: "Bizmuth.mp3",               album: "marples" },
    { file: "Turples.mp3",               album: "marples" },
    { file: "Stack.mp3",                 album: "marples" },
    { file: "AMurderOfCrows.mp3",        album: "marples" },
    { file: "TheValley.mp3",             album: "marples" },
    { file: "Violet.mp3",                album: "marples" },
    { file: "threshold-deep.mp3",        album: "marples" },
    { file: "happyGast.mp3",             album: "marples" },
    { file: "Travels.mp3",               album: "marples" }
  ];

  // DOM refs
  const toggleBtn = document.getElementById("player-toggle");
  const trackLabel = document.getElementById("player-track");
  const tapeControlsImg = document.getElementById("tape-controls-img");
  const tapeAnimImg = document.getElementById("tape-anim-img");
  const volHandle = document.getElementById("tape-vol-handle");

  // Control image states
  const CTRL_IDLE = TAPE_PATH + "tape-controls/tape-controls1.png";
  const CTRL_PLAY = TAPE_PATH + "tape-controls/tape-controls2.png";
  const CTRL_BACK = TAPE_PATH + "tape-controls/tape-controls3.png";
  const CTRL_FWD  = TAPE_PATH + "tape-controls/tape-controls4.png";
  const CTRL_STOP = TAPE_PATH + "tape-controls/tape-controls5.png";

  let TAPE_FRAMES = ALBUM_TAPE_FRAMES.winter.slice();

  // Music audio
  let tracks = [];
  let trackIndex = 0;
  let isPlaying = false;
  let masterVolume = parseFloat(localStorage.getItem("lp-volume") || "0.5");
  const audioA = new Audio();
  const audioB = new Audio();
  let activeAudio = audioA;
  let nextAudio = audioB;
  let fadeRAF = null;
  let crossfading = false;

  // Sound effects
  const btnPress = new Audio(SOUNDS_PATH + "button-press.mp3");
  const tapeHiss = new Audio(SOUNDS_PATH + "tape-hiss.mp3");
  let hissRAF = null;

  // Tape animation state
  let tapeFrame = 0;
  let tapeAnimRAF = null;
  let lastFrameTime = 0;

  // ── Helpers ──

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function displayName(filename) {
    return filename
      .replace(/\.mp3$/i, "")
      .replace(/-/g, " ")
      .replace(/([a-z])([A-Z])/g, "$1 $2");
  }

  function setVol(audio, v) {
    audio.volume = Math.max(0, Math.min(1, v));
  }

  function fade(audio, from, to, duration, onDone) {
    const startTime = performance.now();
    setVol(audio, from);
    function step(now) {
      const t = Math.min((now - startTime) / duration, 1);
      setVol(audio, from + (to - from) * t);
      if (t < 1) {
        fadeRAF = requestAnimationFrame(step);
      } else {
        if (onDone) onDone();
      }
    }
    fadeRAF = requestAnimationFrame(step);
  }

  function loadTrack(audio, index) {
    const t = tracks[index];
    audio.src = ALBUM_PATHS[t.album] + t.file;
    audio.load();
  }

  function nextIndex() {
    return (trackIndex + 1) % tracks.length;
  }

  function updateLabel() {
    trackLabel.textContent = displayName(tracks[trackIndex].file);
    updateTapeFrames();
  }

  function updateTapeFrames() {
    TAPE_FRAMES = ALBUM_TAPE_FRAMES[tracks[trackIndex].album];
    tapeFrame = 0;
    if (!isPlaying) tapeAnimImg.src = TAPE_FRAMES[0];
  }

  // ── Tape animation ──

  function stepTape(now) {
    if (now - lastFrameTime >= TAPE_FRAME_MS) {
      tapeFrame = (tapeFrame + 1) % TAPE_FRAMES.length;
      tapeAnimImg.src = TAPE_FRAMES[tapeFrame];
      lastFrameTime = now;
    }
    tapeAnimRAF = requestAnimationFrame(stepTape);
  }

  function startTapeAnim() {
    lastFrameTime = performance.now();
    tapeAnimRAF = requestAnimationFrame(stepTape);
  }

  function stopTapeAnim() {
    if (tapeAnimRAF) {
      cancelAnimationFrame(tapeAnimRAF);
      tapeAnimRAF = null;
    }
    tapeAnimImg.src = TAPE_FRAMES[0];
  }

  // ── Tape hiss — plays once on play, fades out over 2s ──

  function playHiss() {
    if (hissRAF) cancelAnimationFrame(hissRAF);
    tapeHiss.currentTime = 0;
    tapeHiss.volume = 0.6;
    tapeHiss.play().catch(() => {});
    const start = performance.now();
    const duration = 2000;
    function hissStep(now) {
      const t = Math.min((now - start) / duration, 1);
      tapeHiss.volume = Math.max(0, 0.6 * (1 - t));
      if (t < 1) {
        hissRAF = requestAnimationFrame(hissStep);
      } else {
        tapeHiss.pause();
      }
    }
    hissRAF = requestAnimationFrame(hissStep);
  }

  function stopHiss() {
    if (hissRAF) { cancelAnimationFrame(hissRAF); hissRAF = null; }
    tapeHiss.pause();
  }

  // ── Button press sound ──

  function playBtnPress() {
    btnPress.currentTime = 0;
    btnPress.play().catch(() => {});
  }

  // ── Volume handle drag ──

  function positionHandle(vol) {
    const slotH = volHandle.parentElement.offsetHeight;
    const handleH = volHandle.offsetHeight;
    const usable = slotH - handleH;
    volHandle.style.top = ((1 - vol) * usable) + "px";
  }

  let dragging = false;

  volHandle.addEventListener("mousedown", (e) => {
    dragging = true;
    e.preventDefault();
    e.stopPropagation();
  });

  volHandle.addEventListener("touchstart", (e) => {
    dragging = true;
    e.stopPropagation();
  }, { passive: true });

  document.addEventListener("mousemove", (e) => {
    if (!dragging) return;
    const slotRect = volHandle.parentElement.getBoundingClientRect();
    const handleH = volHandle.offsetHeight;
    const usable = slotRect.height - handleH;
    let relY = e.clientY - slotRect.top - handleH / 2;
    relY = Math.max(0, Math.min(usable, relY));
    masterVolume = 1 - relY / usable;
    localStorage.setItem("lp-volume", masterVolume);
    if (isPlaying && !crossfading) setVol(activeAudio, masterVolume);
    positionHandle(masterVolume);
  });

  document.addEventListener("touchmove", (e) => {
    if (!dragging) return;
    const slotRect = volHandle.parentElement.getBoundingClientRect();
    const handleH = volHandle.offsetHeight;
    const usable = slotRect.height - handleH;
    let relY = e.touches[0].clientY - slotRect.top - handleH / 2;
    relY = Math.max(0, Math.min(usable, relY));
    masterVolume = 1 - relY / usable;
    localStorage.setItem("lp-volume", masterVolume);
    if (isPlaying && !crossfading) setVol(activeAudio, masterVolume);
    positionHandle(masterVolume);
  }, { passive: true });

  document.addEventListener("mouseup", () => { dragging = false; });
  document.addEventListener("touchend", () => { dragging = false; });

  // ── Crossfade ──

  function onTimeUpdate() {
    if (crossfading) return;
    const remaining = activeAudio.duration - activeAudio.currentTime;
    if (remaining <= CROSSFADE_OFFSET && remaining > 0 && tracks.length > 1) {
      crossfading = true;
      activeAudio.removeEventListener("ended", onEnded);
      const ni = nextIndex();
      loadTrack(nextAudio, ni);
      setVol(nextAudio, 0);
      nextAudio.play().catch(() => {});
      const startTime = performance.now();
      const fromVol = activeAudio.volume;
      function crossStep(now) {
        const t = Math.min((now - startTime) / CROSSFADE_MS, 1);
        setVol(activeAudio, fromVol * (1 - t));
        setVol(nextAudio, masterVolume * t);
        if (t < 1) {
          fadeRAF = requestAnimationFrame(crossStep);
        } else {
          activeAudio.pause();
          activeAudio.removeEventListener("timeupdate", onTimeUpdate);
          const temp = activeAudio;
          activeAudio = nextAudio;
          nextAudio = temp;
          trackIndex = ni;
          updateLabel();
          crossfading = false;
          activeAudio.addEventListener("timeupdate", onTimeUpdate);
          activeAudio.addEventListener("ended", onEnded);
        }
      }
      fadeRAF = requestAnimationFrame(crossStep);
    }
  }

  function onEnded() {
    activeAudio.removeEventListener("timeupdate", onTimeUpdate);
    crossfading = false;
    trackIndex = nextIndex();
    loadTrack(activeAudio, trackIndex);
    updateLabel();
    setVol(activeAudio, 0);
    activeAudio.play().catch(() => {});
    fade(activeAudio, 0, masterVolume, FADE_MS);
    activeAudio.addEventListener("timeupdate", onTimeUpdate);
    activeAudio.addEventListener("ended", onEnded);
  }

  // ── Play / Pause ──

  function play() {
    isPlaying = true;
    tapeControlsImg.src = CTRL_PLAY;
    startTapeAnim();
    playHiss();
    updateLabel();
    setVol(activeAudio, 0);
    activeAudio.play().catch(() => {});
    if (fadeRAF) cancelAnimationFrame(fadeRAF);
    fade(activeAudio, 0, masterVolume, FADE_MS);
    activeAudio.addEventListener("timeupdate", onTimeUpdate);
    activeAudio.addEventListener("ended", onEnded);
  }

  function pause() {
    isPlaying = false;
    tapeControlsImg.src = CTRL_IDLE;
    stopTapeAnim();
    stopHiss();
    if (fadeRAF) cancelAnimationFrame(fadeRAF);
    const currentVol = activeAudio.volume;
    fade(activeAudio, currentVol, 0, 1000, () => {
      activeAudio.pause();
      activeAudio.removeEventListener("timeupdate", onTimeUpdate);
    });
  }

  // Briefly flash a control image then settle on the post-action state
  function flashControl(flashSrc, settleSrc) {
    tapeControlsImg.src = flashSrc;
    setTimeout(() => { tapeControlsImg.src = settleSrc; }, 200);
  }

  // Skip to a specific track index, respecting play state
  function skipTo(index) {
    crossfading = false;
    activeAudio.removeEventListener("timeupdate", onTimeUpdate);
    activeAudio.removeEventListener("ended", onEnded);
    if (fadeRAF) cancelAnimationFrame(fadeRAF);
    activeAudio.pause();
    trackIndex = index;
    loadTrack(activeAudio, trackIndex);
    updateLabel();
    if (isPlaying) {
      setVol(activeAudio, 0);
      activeAudio.play().catch(() => {});
      fade(activeAudio, 0, masterVolume, FADE_MS);
      activeAudio.addEventListener("timeupdate", onTimeUpdate);
      activeAudio.addEventListener("ended", onEnded);
    }
  }

  toggleBtn.addEventListener("click", () => {
    if (!tracks.length) return;
    playBtnPress();
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  });

  document.getElementById("tape-btn-back").addEventListener("click", () => {
    if (!tracks.length) return;
    playBtnPress();
    const pi = (trackIndex - 1 + tracks.length) % tracks.length;
    flashControl(CTRL_BACK, isPlaying ? CTRL_PLAY : CTRL_IDLE);
    skipTo(pi);
  });

  document.getElementById("tape-btn-fwd").addEventListener("click", () => {
    if (!tracks.length) return;
    playBtnPress();
    flashControl(CTRL_FWD, isPlaying ? CTRL_PLAY : CTRL_IDLE);
    skipTo(nextIndex());
  });

  document.getElementById("tape-btn-stop").addEventListener("click", () => {
    if (!tracks.length || !isPlaying) return;
    playBtnPress();
    pause();
    flashControl(CTRL_STOP, CTRL_IDLE);
  });

  // ── Init ──

  window.addEventListener("load", () => {
    positionHandle(masterVolume);
  });

  tracks = shuffle([...ALL_TRACKS]);
  trackIndex = 0;
  loadTrack(activeAudio, trackIndex);
  updateLabel();
})();
