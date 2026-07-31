// Verifies feedback.js draft persistence: in-progress work survives track
// changes (auto-advance), page reloads, and is cleared on submit.
// Run: node tools/feedback-sim.mjs
import { readFileSync } from 'fs';
const src = readFileSync('js/feedback.js', 'utf8');

// ---- in-memory localStorage ----
const store = {};
const localStorage = {
  getItem: k => (k in store ? store[k] : null),
  setItem: (k, v) => { store[k] = String(v); },
  removeItem: k => { delete store[k]; }
};

// ---- registry so the test can "click" the rendered controls ----
let reg = { stars: [], chips: [], note: null, send: null, status: null };

function fakeBtn(props) {
  return Object.assign({
    _h: {},
    addEventListener(t, fn) { this._h[t] = fn; },
    click() { if (this._h.click) this._h.click(); },
    fire(t) { if (this._h[t]) this._h[t](); }
  }, props);
}

const NOTE_RE = /<textarea[^>]*id="fb-note"[^>]*>([\s\S]*?)<\/textarea>/;
const MOODS = ['haunting', 'warm', 'restless', 'hopeful', 'hypnotic', 'tender', 'melancholy', 'playful'];

function makeRoot() {
  return {
    classList: { add() {} },
    _inner: '',
    set innerHTML(v) { this._inner = v; },
    get innerHTML() { return this._inner; },
    querySelectorAll(sel) {
      if (sel === '.fb-star') { reg.stars = [1, 2, 3, 4, 5].map(n => fakeBtn({ dataset: { n: String(n) } })); return reg.stars; }
      if (sel === '.fb-chip') { reg.chips = MOODS.map(m => fakeBtn({ dataset: { m } })); return reg.chips; }
      return [];
    },
    querySelector(sel) {
      if (sel === '#fb-note') { const mt = (this._inner || '').match(NOTE_RE); reg.note = fakeBtn({ value: mt ? mt[1] : '' }); return reg.note; }
      if (sel === '#fb-send') { reg.send = fakeBtn({ disabled: false, textContent: '' }); return reg.send; }
      if (sel === '#fb-status') { reg.status = fakeBtn({ textContent: '' }); return reg.status; }
      return null;
    }
  };
}

const document = {
  getElementById: () => null,
  createElement: () => ({ id: '', textContent: '' }),
  head: { appendChild() {} }
};
const win = {};
const fetch = () => Promise.resolve({ ok: true, json: () => Promise.resolve({ success: 'true' }) });

function loadModule(tag) {
  new Function('window', 'document', 'localStorage', 'fetch', src + '\n; window["' + tag + '"] = window.Feedback;')(win, document, localStorage, fetch);
  return win[tag];
}

let fail = 0;
const ok = (c, m) => { console.log((c ? 'PASS  ' : 'FAIL  ') + m); if (!c) fail++; };
const draftsIn = () => JSON.parse(store['mp-feedback-marples-drafts'] || '{}');
const sentIn = () => JSON.parse(store['mp-feedback-marples'] || '{}');

const F = loadModule('__F');
const root = makeRoot();
F.init({ album: 'Marples', container: root });

// 1. Start rating a song, don't submit
F.setTrack('Avalon');
reg.stars[3].click();                                   // 4 stars
reg.chips[1].click();                                   // "warm"
reg.note.value = 'lovely bit at 1:20'; reg.note.fire('input');
ok(draftsIn()['Avalon'] && draftsIn()['Avalon'].rating === 4, 'in-progress rating persists while typing');
ok(draftsIn()['Avalon'].moods.includes('warm') && draftsIn()['Avalon'].note.includes('1:20'), 'mood + note captured in the draft');

// 2. Song auto-advances — the bug scenario
F.setTrack("Summer's Tale");
ok(draftsIn()['Avalon'], "Avalon's draft SURVIVES the auto-advance (bug fixed)");
ok(!draftsIn()["Summer's Tale"], 'the new song starts with a clean slate');

// 3. Come back to the unfinished song
F.setTrack('Avalon');
ok(reg.note.value === 'lovely bit at 1:20', 'returning restores the exact in-progress note');

// 4. Simulate a page reload: fresh module, same localStorage
const F2 = loadModule('__F2');
F2.init({ album: 'Marples', container: makeRoot() });
F2.setTrack('Avalon');
ok(draftsIn()['Avalon'] && draftsIn()['Avalon'].rating === 4, 'draft survives a page reload');

// 5. Submit clears the draft, records it sent
reg.send.click();
setTimeout(() => {
  ok(!draftsIn()['Avalon'], 'submitting clears the draft (no stray leftover)');
  ok(sentIn()['Avalon'] && sentIn()['Avalon'].sent === true, 'submission recorded as sent');
  console.log(fail === 0 ? '\nFEEDBACK DRAFTS OK' : '\n' + fail + ' CHECK(S) FAILED');
  process.exit(fail === 0 ? 0 : 1);
}, 10);
