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
    url: "https://watcheratthethreshold.github.io/shadows-of-the-deck/shadows-of-the-deck/",
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
  const MUSIC_PATH = "audio/music/";
  const FADE_MS = 2000;
  const CROSSFADE_MS = 3000;
  const CROSSFADE_OFFSET = 3; // seconds before end to start crossfade

  const toggleBtn = document.getElementById("player-toggle");
  const trackLabel = document.getElementById("player-track");
  const volumeSlider = document.getElementById("player-volume");

  let tracks = [];
  let trackIndex = 0;
  let isPlaying = false;
  let masterVolume = parseFloat(localStorage.getItem("lp-volume") || "0.5");
  let audioA = new Audio();
  let audioB = new Audio();
  let activeAudio = audioA;
  let nextAudio = audioB;
  let fadeRAF = null;
  let crossfading = false;

  volumeSlider.value = masterVolume;

  // Shuffle array in place
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // Format filename for display
  function displayName(filename) {
    return filename.replace(/\.mp3$/i, "").replace(/-/g, " ");
  }

  // Set volume on an audio element, clamped
  function setVol(audio, v) {
    audio.volume = Math.max(0, Math.min(1, v));
  }

  // Fade an audio element's volume from start to end over duration ms
  function fade(audio, from, to, duration, onDone) {
    const startTime = performance.now();
    setVol(audio, from);

    function step(now) {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / duration, 1);
      setVol(audio, from + (to - from) * t);
      if (t < 1) {
        fadeRAF = requestAnimationFrame(step);
      } else {
        if (onDone) onDone();
      }
    }
    fadeRAF = requestAnimationFrame(step);
  }

  // Load a track into an audio element
  function loadTrack(audio, index) {
    audio.src = MUSIC_PATH + tracks[index];
    audio.load();
  }

  // Advance to next track index (wraps)
  function nextIndex() {
    return (trackIndex + 1) % tracks.length;
  }

  // Update the track name display
  function updateLabel() {
    trackLabel.textContent = displayName(tracks[trackIndex]);
  }

  // Start crossfade near end of current track
  function onTimeUpdate() {
    if (crossfading) return;
    const remaining = activeAudio.duration - activeAudio.currentTime;
    if (remaining <= CROSSFADE_OFFSET && remaining > 0 && tracks.length > 1) {
      crossfading = true;
      const ni = nextIndex();
      loadTrack(nextAudio, ni);
      setVol(nextAudio, 0);
      nextAudio.play().catch(() => {});

      // Fade out active, fade in next
      const startTime = performance.now();
      const fromVol = activeAudio.volume;

      function crossStep(now) {
        const elapsed = now - startTime;
        const t = Math.min(elapsed / CROSSFADE_MS, 1);
        setVol(activeAudio, fromVol * (1 - t));
        setVol(nextAudio, masterVolume * t);
        if (t < 1) {
          fadeRAF = requestAnimationFrame(crossStep);
        } else {
          activeAudio.pause();
          activeAudio.removeEventListener("timeupdate", onTimeUpdate);
          // Swap
          const temp = activeAudio;
          activeAudio = nextAudio;
          nextAudio = temp;
          trackIndex = ni;
          updateLabel();
          crossfading = false;
          activeAudio.addEventListener("timeupdate", onTimeUpdate);
        }
      }
      fadeRAF = requestAnimationFrame(crossStep);
    }
  }

  // Handle track ending naturally (fallback if crossfade didn't trigger)
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
  }

  // Play
  function play() {
    isPlaying = true;
    toggleBtn.innerHTML = "&#9646;&#9646;"; // pause icon
    toggleBtn.title = "Pause music";
    updateLabel();
    setVol(activeAudio, 0);
    activeAudio.play().catch(() => {});
    if (fadeRAF) cancelAnimationFrame(fadeRAF);
    fade(activeAudio, 0, masterVolume, FADE_MS);
    activeAudio.addEventListener("timeupdate", onTimeUpdate);
    activeAudio.addEventListener("ended", onEnded);
  }

  // Pause with fade out
  function pause() {
    isPlaying = false;
    toggleBtn.innerHTML = "&#9654;"; // play icon
    toggleBtn.title = "Play music";
    if (fadeRAF) cancelAnimationFrame(fadeRAF);
    const currentVol = activeAudio.volume;
    fade(activeAudio, currentVol, 0, 1000, () => {
      activeAudio.pause();
      activeAudio.removeEventListener("timeupdate", onTimeUpdate);
    });
  }

  // Toggle
  toggleBtn.addEventListener("click", () => {
    if (!tracks.length) return;
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  });

  // Volume slider
  volumeSlider.addEventListener("input", () => {
    masterVolume = parseFloat(volumeSlider.value);
    localStorage.setItem("lp-volume", masterVolume);
    if (isPlaying && !crossfading) {
      setVol(activeAudio, masterVolume);
    }
  });

  // Load tracks
  fetch(MUSIC_PATH + "tracks.json")
    .then(r => r.json())
    .then(list => {
      tracks = shuffle(list);
      trackIndex = 0;
      loadTrack(activeAudio, trackIndex);
      updateLabel();
    })
    .catch(() => {
      trackLabel.textContent = "No tracks found";
    });
})();
