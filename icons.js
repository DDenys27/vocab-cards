// Hand-drawn line icons shown on the card front for words that have one
// (card.icon references a key in this object). Purely optional — any card
// without a matching icon just shows no picture. Same stroke style as the
// rest of the app's icons (24x24 viewBox, currentColor stroke).
//
// New words added via the "Add words" page won't get an icon automatically
// (these are hand-authored, not something Claude generates reliably) — tell
// Claude in chat which icon a new word should use, or leave it unillustrated.
const ICONS = {
  doctor: `<circle cx="12" cy="12" r="9"/><path d="M9 9.5a3 3 0 0 0 6 0V6M12 12.5v3a3 3 0 0 0 3 3"/><circle cx="17.5" cy="11" r="1.4"/>`,

  nurse: `<path d="M4 14a8 8 0 0 1 16 0"/><rect x="3" y="14" width="18" height="5" rx="2"/><path d="M12 8v4M10 10h4"/>`,

  actor: `<circle cx="9" cy="10" r="6"/><path d="M6.5 12c.7.8 1.6 1.2 2.5 1.2s1.8-.4 2.5-1.2" /><circle cx="15" cy="15" r="6"/><path d="M12.5 14c.7-.8 1.6-1.2 2.5-1.2s1.8.4 2.5 1.2"/>`,

  policeOfficer: `<path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3z"/><path d="M9.5 12l1.8 1.8L15 10"/>`,

  shopAssistant: `<path d="M6 8h12l-1 12H7L6 8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>`,

  singer: `<rect x="9.5" y="3" width="5" height="9" rx="2.5"/><path d="M6 11a6 6 0 0 0 12 0M12 17v3M9 20h6"/>`,

  engineer: `<circle cx="12" cy="12" r="3"/><path d="M12 3v2.5M12 18.5V21M21 12h-2.5M5.5 12H3M18.4 5.6l-1.8 1.8M7.4 16.6l-1.8 1.8M18.4 18.4l-1.8-1.8M7.4 7.4L5.6 5.6"/>`,

  lawyer: `<path d="M12 3v18M6 7l-3 5a3 3 0 0 0 6 0l-3-5zM18 7l-3 5a3 3 0 0 0 6 0l-3-5z"/><path d="M4 21h16M6 7h12"/>`,

  pilot: `<path d="M21 3L10 14"/><path d="M21 3l-6.5 18-4-8.5L2 8.5 21 3z"/>`,

  politician: `<path d="M4 20h16M6 20V10l6-4 6 4v10"/><path d="M10 20v-5h4v5"/><path d="M9 9h.01M12 9h.01M15 9h.01"/>`,

  scientist: `<path d="M10 3h4M10 3v5l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3"/><path d="M8.5 14h7"/>`,

  writer: `<path d="M4 20l3.5-1 10-10a1.7 1.7 0 0 0-2.5-2.5l-10 10L4 20z"/><path d="M13 6.5L16.5 10"/>`,

  digitalDesigner: `<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/><path d="M8.5 12l2-2-2-2M12.5 8h2.5"/>`,

  retired: `<circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M3 12h2M19 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/>`,

  unemployed: `<rect x="3" y="8" width="18" height="12" rx="2"/><path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M10 14h.01M14 14h.01"/>`
};
