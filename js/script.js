const APPS = [
  // ── Primary ──
  {
    name: "Writers Workbench",
    url: "https://watcheratthethreshold.github.io/writer-workbench/",
    icon: "\u270D\uFE0F",
    category: "primary",
    desc: "Writing tools and workbench",
    image: "images/writers-workbench.png"
  },
 
  {
    name: "Markdown Editor",
    url: "https://watcheratthethreshold.github.io/markdown-editor/",
    icon: "\uD83D\uDCDD",
    category: "primary",
    desc: "Markdown editing tool",
    image: "images/markdown-editor.png"
  },
  // ── Business ──
  {
    name: "Fairweather Print Media",
    url: "https://watcheratthethreshold.github.io/fairweather-print-media/",
    icon: "\uD83D\uDDA8\uFE0F",
    category: "business",
    desc: "Print media site",
    image: "images/fairweather-print-media.png"
  },
  {
    name: "Fairweather Productions",
    url: "https://watcheratthethreshold.github.io/fairweather-productions/",
    icon: "\uD83C\uDFAC",
    category: "business",
    desc: "Production site",
    image: "images/fairweather-productions.png"
  },
  {
    name: "GitHub",
    url: "https://github.com",
    icon: "\uD83D\uDC19",
    category: "business",
    desc: "GitHub dashboard",
    image: "images/github.png"
  },
  {
    name: "Google Docs",
    url: "https://docs.google.com",
    icon: "\uD83D\uDCC4",
    category: "business",
    desc: "Google Docs home",
    image: "images/google-docs.png"
  },
  {
    name: "Sheet to MIDI",
    url: "https://watcheratthethreshold.github.io/music-maker/sheet-to-midi/",
    icon: "\uD83C\uDFBC",
    category: "primary",
    desc: "Sheet music to MIDI converter",
    image: "images/sheet-to-midi.png"
  },
 
   {
    name: "Everything Planner",
    url: "https://watcheratthethreshold.github.io/Everything/",
    icon: "\uD83D\uDCCB",
    category: "primary",
    desc: "Productivity dashboard",
    image: "images/everything-planner.png"
  },

  // ── Sites ──




  // ── Games ──
    {
    name: "Chronicles",
    url: "https://watcheratthethreshold.github.io/chronicles/",
    icon: "\uD83D\uDCDC",
    category: "games",
    desc: "Narrative card/dice roguelike"
  },
  {
    name: "Cruxfade Micro",
    url: "https://watcheratthethreshold.github.io/cruxfade-micro/",
    icon: "\u2728",
    category: "games",
    desc: "Reference game repo"
  },
  {
    name: "Shadows of the Deck",
    url: "https://watcheratthethreshold.github.io/shadows-of-the-deck/shadows-of-the-deck/",
    icon: "\uD83C\uDCCF",
    category: "games",
    desc: "Roguelike card game"
  },
  {
    name: "Rooks Gambit",
    url: "https://watcheratthethreshold.github.io/rooks-gambit/",
    icon: "\u265C",
    category: "games",
    desc: "Chess960 variant"
  },

  {
     name: "Coherence",
    url: "https://watcheratthethreshold.github.io/coherence/",
    icon: "\uD83D\uDD2E",
    category: "games",
    desc: "Creative project"
  },
 


 
 
];

// Category display order and labels
const CATEGORIES = [
  { key: "primary", label: "Daily Essentials" },
  { key: "business", label: "Business" },
  { key: "games", label: "Games" },
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

    const cards = visible.map(app => `
      <a href="${app.url}" target="_blank" rel="noopener" class="card${app.image ? ' has-preview' : ''}">
        ${app.image ? `<img class="card-preview" src="${app.image}" alt="${app.name}" loading="lazy">` : `<span class="card-icon">${app.icon}</span>`}
        <span class="card-name">${app.name}</span>
        ${app.desc ? `<span class="card-desc">${app.desc}</span>` : ""}
      </a>
    `).join("");

    return `
      <section class="section" data-category="${cat.key}">
        <h2 class="section-title">${cat.label}</h2>
        <div class="card-grid">${cards}</div>
      </section>
    `;
  }).join("");
}

// ── Search ──

const searchInput = document.getElementById("search");

searchInput.addEventListener("input", () => {
  render(searchInput.value);
});

// ── Keyboard shortcuts ──

document.addEventListener("keydown", (e) => {
  // "/" focuses search (unless already in an input)
  if (e.key === "/" && document.activeElement !== searchInput) {
    e.preventDefault();
    searchInput.focus();
  }

  // Escape clears and blurs search
  if (e.key === "Escape") {
    searchInput.value = "";
    searchInput.blur();
    render();
  }
});

// ── Initial render ──

render();
