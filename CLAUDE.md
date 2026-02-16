# Launchpad — Claude Code Guide

## Project Overview

Single-page portfolio launcher / dashboard. Vanilla HTML, CSS, and JavaScript — no frameworks, no build steps. Deploys to GitHub Pages.

**Live:** `https://watcheratthethreshold.github.io/launchpad/`

## File Structure

```
launchpad/
├── index.html                 # Single page entry point
├── css/style.css              # All styles (~400 lines)
├── js/script.js               # All logic (~475 lines)
├── audio/music/
│   ├── tracks.json            # Playlist manifest
│   └── *.mp3                  # Ambient music tracks
├── images/
│   ├── *.png / *.webp         # Card preview images
│   └── sigils/                # Card badge icons (per-app)
└── docs/
    ├── design-guide.md        # Full design system reference
    └── launch-pad*.md         # Planning docs
```

## Architecture

### Data-Driven Rendering

All content is defined in two arrays in `script.js`:

- **`APPS`** — each entry has `name`, `url`, `icon`, `category`, `desc`, optional `image` and `sigil`
- **`CATEGORIES`** — ordered list of `{ key, label }` defining section display order

The `render()` function iterates categories, filters apps, and builds the full dashboard HTML. Sections with no visible apps are omitted entirely.

### Category Order

1. `primary` — Daily Essentials (wider 240px cards)
2. `business` — Business (wider 240px cards)
3. `games` — Games
4. `links` — Links (external services)
5. `ai` — AI (chat assistants)
6. `sites` — Sites & Projects

### Music Player

IIFE-wrapped module with dual audio elements for crossfading. Key details:
- Loads tracks from `audio/music/tracks.json`
- Shuffles on page load, plays sequentially through shuffled order
- Crossfades 3 seconds before track end using `requestAnimationFrame`
- Volume persisted to `localStorage` key `lp-volume`

### Search (Currently Disabled)

Header with search bar and keyboard shortcuts (`/` to focus, `Escape` to clear) is commented out in both HTML and JS. Restore when the project list grows.

## CSS Conventions

### Layout

- All sections use `max-width: calc(100% - 14rem)` with `margin: auto` for consistent container width
- Card grids use `repeat(auto-fit, 180px)` by default; primary/business use `240px`
- Grid gap: `2rem`
- Single responsive breakpoint at `600px`

### Design System

Full reference in `docs/design-guide.md`. Key points:

- **Glassmorphism throughout** — semi-transparent `rgba()` backgrounds + `backdrop-filter: blur()`
- **No CSS custom properties** — all values are hardcoded
- **Color palette:** dark blue-grey base (`#1a1f2e`), warm off-white text (`#e8e6e1`), steel blue accents (`rgba(100, 140, 180, _)`)
- **Typography:** Cormorant Garamond (headings), Source Sans Pro (body) via Google Fonts
- **Border radius:** 15px (sections), 12px (cards), 8px (buttons/inputs)
- **Transitions:** `all 0.3s ease` (cards), `all 0.25s ease` (buttons)

### Card Depth Pattern

Cards use a consistent light-from-top-left shadow pattern:
- `border-top` + `border-left`: light highlight (`rgba(200, 210, 225, _)`)
- `border-right` + `border-bottom`: dark shadow (`rgba(0, 0, 0, _)`)
- Hover: lift with `translateY(-2px)`, brighter borders, deeper shadow
- Active/press: sink with `translateY(1px)`, inverted border lighting

## JavaScript Conventions

- Functional style, no classes
- `UPPER_CASE` for data constants (`APPS`, `CATEGORIES`, `MUSIC_PATH`)
- `camelCase` for functions and variables
- `requestAnimationFrame` for all animations (volume fading, crossfades)
- All external links open in new tab (`target="_blank" rel="noopener"`)
- Images use `loading="lazy"`

## Adding New Apps

Add an entry to the `APPS` array in `script.js`:

```js
{
  name: "App Name",
  url: "https://example.com",
  icon: "emoji",
  category: "category-key",    // must match a CATEGORIES key
  desc: "Short description",
  image: "images/preview.png", // optional — card preview image
  sigil: "images/sigils/app-sigil.png" // optional — badge icon
}
```

Place sigil PNGs in `images/sigils/` with the naming pattern `app-name-sigil.png`.

## Adding New Categories

1. Add a `{ key, label }` entry to `CATEGORIES` in `script.js` (order matters — it controls display order)
2. Assign the new key to app entries via their `category` field
3. If the category needs wider cards, add a CSS override: `.section[data-category="new-key"] .card-grid { grid-template-columns: repeat(auto-fit, 240px); }`
