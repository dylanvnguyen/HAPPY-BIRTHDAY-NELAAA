/* =========================================================
   ✏️  ICON UPDATES
   These replace two of the treat icons:
   - pancit  → sinigang
   - sampaguita → peonies & lilies
   Change the words for those two icons HERE (not in script.js).
   Their photos and captions still live in script.js like before.
   ========================================================= */
const ICON_UPDATES = {
  pancit: {
    label: "Sinigang",
    title: "Sinigang",
    message: "A little sour sometimes, always warm, and my absolute favorite. Just like you."
  },
  sampaguita: {
    label: "Peonies & lilies",
    title: "Peonies & lilies",
    message: "Your favorite flowers, and still not as pretty as you."
  },
};

/* ===== No need to edit below this line ===== */
(function () {
  /* ---- New drawings ---- */
  const peonyParts = `
    ${[0,1,2,3,4,5,6].map(i => `<ellipse cx="50" cy="24" rx="14" ry="18" fill="${BUB}" ${S} transform="rotate(${i * 51.4} 50 44)"/>`).join("")}
    ${[0,1,2,3,4].map(i => `<ellipse cx="50" cy="33" rx="10" ry="12" fill="${PINK}" ${S} transform="rotate(${i * 72 + 36} 50 44)"/>`).join("")}
    <circle cx="50" cy="44" r="10" fill="#FFD6E7" ${S}/>
    <path d="M44 45 q6 -8 12 0 M46 49 q4 -4 8 0" fill="none" stroke="${B}" stroke-width="2" stroke-linecap="round"/>`;
  const lilyPetal = `<path d="M0 0 C7 -8 7 -20 0 -27 C-7 -20 -7 -8 0 0 Z" fill="#fff" ${S}/><path d="M0 -4 L0 -19" stroke="${BUB}" stroke-width="2.5" stroke-linecap="round"/>`;
  const stamens = [0,1,2,3,4].map(i => {
    const a = (i * 72 - 90) * Math.PI / 180, x = (Math.cos(a) * 9).toFixed(1), y = (Math.sin(a) * 9).toFixed(1);
    return `<path d="M0 0 L${x} ${y}" stroke="${LEAF}" stroke-width="1.8"/><ellipse cx="${x}" cy="${y}" rx="2.6" ry="1.8" fill="#E8761E"/>`;
  }).join("");

  ICONS.sampaguita = svg(`
    <path d="M46 70 C30 72 20 84 14 94 C32 94 44 86 46 70 Z" fill="${LEAF}" ${S}/>
    <path d="M54 70 C70 72 80 84 86 94 C68 94 56 86 54 70 Z" fill="${LEAF}" ${S}/>
    <path d="M50 92 L50 66" stroke="${LEAF}" stroke-width="4" stroke-linecap="round"/>
    <g transform="translate(69 36)">${[0,1,2,3,4,5].map(i => `<g transform="rotate(${i * 60 + 30})">${lilyPetal}</g>`).join("")}${stamens}</g>
    <g transform="translate(34 54) scale(.64) translate(-50 -44)">${peonyParts}</g>
    ${sparkle(88, 80, .7)}${sparkle(12, 14, .7, PINK)}`);

  const steam = x => `<path d="M${x} ${x === 50 ? 24 : 22} q-5 -6 0 -12 q5 -6 0 -12" stroke="#E7B7CC" stroke-width="3" fill="none" stroke-linecap="round"/>`;
  ICONS.pancit = svg(`
    ${steam(36)}${steam(50)}${steam(64)}
    <path d="M10 50 L90 50 Q88 88 50 90 Q12 88 10 50 Z" fill="#fff" ${S}/>
    <path d="M13 62 Q50 70 87 62" stroke="${PINK}" stroke-width="4" fill="none"/>
    <ellipse cx="50" cy="50" rx="40" ry="9" fill="#F2C57C" ${S}/>
    <ellipse cx="30" cy="46" rx="12" ry="5" fill="${LEAF}" ${S} transform="rotate(-22 30 46)"/>
    <ellipse cx="70" cy="45" rx="12" ry="5" fill="${LEAF}" ${S} transform="rotate(20 70 45)"/>
    <path d="M41 50 a9 9 0 0 1 18 0 Z" fill="#FF6B6B" ${S}/>
    <circle cx="22" cy="51" r="5" fill="#fff" ${S}/>
    <circle cx="62" cy="52" r="4.5" fill="#fff" ${S}/>
    <rect x="73" y="47" width="9" height="7" rx="2" fill="#F7B2A0" ${S}/>
    ${face(50, 75)}`);

  /* ---- Remove placeholder captions (only ones Claude wrote) ---- */
  const AUTO_CAPTIONS = new Set(["Caption goes here", "Us under the string lights", "Take two",
    "And one more for good luck", "Baby Birthdaybun", "Grad night"]);
  CONFIG.treats.forEach(t => t.photos.forEach(ph => { if (AUTO_CAPTIONS.has(ph.caption)) ph.caption = ""; }));

  /* ---- Apply to the treat tiles ---- */
  const tiles = document.querySelectorAll("#treats .treat");
  CONFIG.treats.forEach((t, i) => {
    const u = ICON_UPDATES[t.icon];
    if (!u || !tiles[i]) return;
    Object.assign(t, u);
    tiles[i].innerHTML = `${ICONS[t.icon]}<span>${u.label}</span>`;
  });

  /* ---- Little cute stickers around the page ---- */
  const STICKERS = {
    bun: `
      <path d="M14 76 C8 50 26 32 50 32 C74 32 92 50 86 76 C70 86 30 86 14 76 Z" fill="#FFF6EC" ${S}/>
      <ellipse cx="30" cy="48" rx="5" ry="3" fill="#fff" transform="rotate(-30 30 48)"/>
      <path d="M50 4 L63 34 L37 34 Z" fill="${PINK}" ${S}/>
      <circle cx="47" cy="25" r="2.4" fill="#fff"/><circle cx="54" cy="17" r="2" fill="#fff"/>
      <circle cx="50" cy="5" r="5" fill="${MANGO}" ${S}/>
      ${face(50, 60)}`,
    strawberry: `
      <path d="M50 90 C24 72 16 46 28 35 C36 28 64 28 72 35 C84 46 76 72 50 90 Z" fill="#FF6B8B" ${S}/>
      <path d="M50 34 L38 22 L47 27 L50 14 L53 27 L62 22 Z" fill="${LEAF}" ${S}/>
      ${[[34,64],[64,64],[42,76],[58,76],[30,48],[70,48]].map(([x, y]) => `<ellipse cx="${x}" cy="${y}" rx="1.6" ry="2.4" fill="${MANGO}"/>`).join("")}
      ${face(50, 52)}`,
    bow: `
      <path d="M50 50 C36 30 12 30 14 50 C12 70 36 70 50 50 Z" fill="${PINK}" ${S}/>
      <path d="M50 50 C64 30 88 30 86 50 C88 70 64 70 50 50 Z" fill="${PINK}" ${S}/>
      <path d="M46 56 L36 86 L44 82 L48 90 Z" fill="${PINK}" ${S}/>
      <path d="M54 56 L64 86 L56 82 L52 90 Z" fill="${PINK}" ${S}/>
      <path d="M28 44 q6 -6 12 0" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <rect x="42" y="42" width="16" height="16" rx="5" fill="${BUB}" ${S}/>`,
    heart: `
      <path d="M50 86 C20 66 8 48 16 32 C24 18 44 20 50 34 C56 20 76 18 84 32 C92 48 80 66 50 86 Z" fill="${BUB}" ${S}/>
      <ellipse cx="30" cy="34" rx="5" ry="3" fill="#fff" transform="rotate(-35 30 34)"/>
      ${face(50, 50)}`,
  };

  // [where, which sticker, position, size in px, tilt]
  const PLACES = [
    ["#top", "bun", "top:9%;left:7%", 104, -8],
    ["#top", "strawberry", "top:14%;right:8%", 78, 10],
    ["#top", "bow", "bottom:16%;left:11%", 64, -12],
    ["#top", "heart", "bottom:20%;right:12%", 58, 8],
    ["#surprises", "bow", "top:4rem;left:4%", 56, -10],
    ["#surprises", "bun", "top:3.4rem;right:4%", 70, 8],
    ["#cake", "strawberry", "top:4.5rem;left:6%", 62, -8],
    ["#cake", "heart", "top:5rem;right:6%", 54, 10],
    ["#dance", "bun", "top:3.6rem;right:4%", 70, -6],
    ["#dance", "bow", "top:4.4rem;left:4%", 54, 12],
    ["#loved-ones", "heart", "top:4rem;left:4%", 54, -10],
    ["#loved-ones", "strawberry", "top:3.6rem;right:4%", 60, 8],
    ["#letter", "bun", "top:4.2rem;left:6%", 70, -8],
    ["#letter", "bow", "top:4.6rem;right:6%", 52, 10],
  ];
  PLACES.forEach(([sel, kind, pos, size, tilt], i) => {
    const host = document.querySelector(sel);
    if (!host) return;
    const el = document.createElement("span");
    el.className = "sticker";
    el.setAttribute("aria-hidden", "true");
    el.style.cssText = `${pos};--s:${size}px;--r:${tilt}deg;--d:${-(i * 0.37) % 3}s`;
    el.innerHTML = svg(STICKERS[kind]);
    host.appendChild(el);
  });
})();
