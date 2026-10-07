/* =========================================================
   ✏️  EDIT THIS PART — names, messages, and photos
   ========================================================= */
const CONFIG = {
  herName: "Nela",        // ← put her name here
  fromName: "Dylan",

  // Each treat is a clickable icon. "photos" can hold as many pictures as you want.
  // Put the picture files inside the img/ folder and match the names here.
  // Videos work too, as long as they are .mp4 files.
  treats: [
    { icon: "gift", label: "A gift", title: "A gift for you",
      message: "Before anything else: you're my favorite present.",
      photos: [{ src: "img/gift-1.jpg", caption: "" },
               { src: "img/gift-2.jpg", caption: "" },
               { src: "img/gift-3.jpg", caption: "" }] },
    { icon: "balloon", label: "Twenty-two", title: "Twenty-two!",
      message: "22 looks really, really good on you.",
      photos: [{ src: "img/22-1.jpg", caption: "" },
               { src: "img/22-2.jpg", caption: "" },
               { src: "img/22-3.jpg", caption: "" }]  },
    { icon: "halohalo", label: "Halo-halo", title: "Halo-halo",
      message: "My sweetest dessert.",
      photos: [{ src: "img/halohalo-1.jpg", caption: "" },
               { src: "img/halohalo-2.jpg", caption: "" },
               { src: "img/halohalo-3.jpg", caption: "" }] },
    { icon: "pancit", label: "Pancit", title: "Pancit for long life",
      message: "Birthday noodles mean a long, happy life. I want to be there for all of it.",
      photos: [{ src: "img/pancit-1.jpg", caption: "" },
               { src: "img/pancit-2.jpg", caption: "" },
               { src: "img/pancit-3.jpg", caption: "" }] },
    { icon: "jeepney", label: "Adventures", title: "Our adventures",
      message: "Every trip is better with you riding next to me.",
      photos: [{ src: "img/adventure-1.jpg", caption: "" },
               { src: "img/adventure-2.jpg", caption: "" },
               { src: "img/adventure-3.jpg", caption: "" },
               { src: "img/adventure-video.mp4", caption: "" },
               { src: "img/adventure-4.jpg", caption: "" },
               { src: "img/adventure-5.jpg", caption: "" }] },
    { icon: "sampaguita", label: "Sampaguita", title: "Sampaguita",
      message: "The sweetest-smelling flower in the Philippines, and still not as sweet as you.",
      photos: [{ src: "img/sampaguita-1.jpg", caption: "" }] },
    { icon: "disco", label: "Dance", title: "Dance with me",
      message: "I don't know how to dance, but you make me look good while dancing.",
      photos: [{ src: "img/dance-1.jpg", caption: "" }] },
    { icon: "fedora", label: "Smooth", title: "Smooth criminal",
      message: "You've been stealing my heart this whole time.",
      photos: [{ src: "img/mj-1.jpg", caption: "" }] },
    { icon: "lumpia", label: "Lumpia", title: "The last lumpia",
      message: "I'd give you the last lumpia. That's how you know it's real.",
      photos: [{ src: "img/lumpia-1.jpg", caption: "" },
               { src: "img/lumpia-2.jpg", caption: "" }] },
  ],

  // Your letter. Each item in the list is its own paragraph.
  letter: [
    "Happy birthday, my love!",
    "Write your letter to her here. Talk about your favorite memories, what you love about her, and what you're excited for this year.",
    "Malipayong adlaw nga natawhan, palangga ko."
  ],
  cakeWish: "Wish made! 22 is going to be your best year yet 💖",
};

/* =========================================================
   Cartoon icons (no need to edit below this line)
   ========================================================= */
const B = "#6B1F45", PINK = "#FF5FA2", BUB = "#FF9CC8", UBE = "#9C6ADE", MANGO = "#FFC53D", LEAF = "#5DBB8A";
const S = `stroke="${B}" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"`;
const svg = (inner, vb = "0 0 100 100") => `<svg viewBox="${vb}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${inner}</svg>`;
const face = (x, y) => `
  <circle cx="${x - 8}" cy="${y}" r="2.8" fill="${B}"/><circle cx="${x + 8}" cy="${y}" r="2.8" fill="${B}"/>
  <path d="M${x - 4} ${y + 4} q4 4 8 0" fill="none" stroke="${B}" stroke-width="2.5" stroke-linecap="round"/>
  <ellipse cx="${x - 14}" cy="${y + 5}" rx="4" ry="2.3" fill="${BUB}"/><ellipse cx="${x + 14}" cy="${y + 5}" rx="4" ry="2.3" fill="${BUB}"/>`;
const sparkle = (x, y, s = 1, c = MANGO) =>
  `<path transform="translate(${x} ${y}) scale(${s})" d="M0 -8 L2.2 -2.2 L8 0 L2.2 2.2 L0 8 L-2.2 2.2 L-8 0 L-2.2 -2.2 Z" fill="${c}"/>`;

const ICONS = {
  gift: svg(`
    <rect x="20" y="46" width="60" height="40" rx="6" fill="${PINK}" ${S}/>
    <rect x="15" y="34" width="70" height="14" rx="5" fill="${BUB}" ${S}/>
    <rect x="45" y="34" width="10" height="52" fill="${MANGO}" ${S}/>
    <path d="M50 34 C38 16 22 26 34 34 Z" fill="${MANGO}" ${S}/>
    <path d="M50 34 C62 16 78 26 66 34 Z" fill="${MANGO}" ${S}/>
    ${sparkle(86, 16)}${sparkle(12, 22, .7, UBE)}`),

  balloon: svg(`
    <path d="M50 70 q6 10 -3 24" fill="none" ${S}/>
    <ellipse cx="50" cy="40" rx="27" ry="31" fill="${PINK}" ${S}/>
    <path d="M45 70 l5 -5 l5 5 z" fill="${PINK}" ${S}/>
    <ellipse cx="37" cy="26" rx="5" ry="8" fill="#fff" opacity=".6"/>
    <text x="50" y="50" text-anchor="middle" font-family="Fredoka, sans-serif" font-weight="700" font-size="26" fill="#fff">22</text>
    ${sparkle(86, 20)}${sparkle(14, 60, .7, UBE)}`),

  halohalo: svg(`
    <path d="M32 72 L68 72 L66 90 L34 90 Z" fill="${UBE}"/>
    <path d="M29 52 L71 52 L68 72 L32 72 Z" fill="#FFE3EE"/>
    <circle cx="40" cy="80" r="2.5" fill="#fff"/><circle cx="58" cy="83" r="2.5" fill="#fff"/>
    <path d="M26 40 L74 40 L66 90 L34 90 Z" fill="none" ${S}/>
    <path d="M22 42 Q50 6 78 42 Z" fill="#fff" ${S}/>
    <circle cx="41" cy="27" r="9" fill="${UBE}" ${S}/>
    <rect x="52" y="22" width="16" height="11" rx="2" fill="${MANGO}" ${S}/>
    <path d="M72 28 L86 6" fill="none" stroke="${B}" stroke-width="4" stroke-linecap="round"/>
    ${face(50, 60)}`),

  pancit: svg(`
    <path d="M58 8 L42 50 M70 10 L52 50" fill="none" stroke="${B}" stroke-width="4" stroke-linecap="round"/>
    <path d="M20 52 q6 -16 12 0 q6 -16 12 0 q6 -16 12 0 q6 -16 12 0 q6 -14 12 0" fill="none" stroke="#E8A200" stroke-width="5" stroke-linecap="round"/>
    <circle cx="34" cy="44" r="3" fill="#FF8A3D"/><circle cx="60" cy="42" r="3" fill="${LEAF}"/>
    <path d="M12 52 L88 52 Q86 88 50 90 Q14 88 12 52 Z" fill="${BUB}" ${S}/>
    ${face(50, 68)}`),

  jeepney: svg(`
    <rect x="14" y="30" width="60" height="10" rx="3" fill="${MANGO}" ${S}/>
    <path d="M10 40 H76 L90 58 V78 H10 Z" fill="${PINK}" ${S}/>
    <rect x="16" y="45" width="15" height="12" rx="2" fill="#fff" ${S}/>
    <rect x="35" y="45" width="15" height="12" rx="2" fill="#fff" ${S}/>
    <rect x="54" y="45" width="15" height="12" rx="2" fill="#fff" ${S}/>
    <path d="M73 45 H77 L86 57 H73 Z" fill="#fff" ${S}/>
    <path d="M12 66 H88" stroke="${MANGO}" stroke-width="4"/>
    <circle cx="87" cy="70" r="3" fill="${MANGO}"/>
    <circle cx="28" cy="80" r="9" fill="${B}"/><circle cx="28" cy="80" r="3.5" fill="#fff"/>
    <circle cx="72" cy="80" r="9" fill="${B}"/><circle cx="72" cy="80" r="3.5" fill="#fff"/>
    ${sparkle(44, 20, .8)}`),

  sampaguita: svg(`
    <path d="M50 66 C30 68 22 84 18 92 C34 90 46 82 50 66 Z" fill="${LEAF}" ${S}/>
    <path d="M50 66 C70 68 78 84 82 92 C66 90 54 82 50 66 Z" fill="${LEAF}" ${S}/>
    ${[0, 1, 2, 3, 4].map(i => `<ellipse cx="50" cy="26" rx="11" ry="17" fill="#fff" ${S} transform="rotate(${i * 72} 50 44)"/>`).join("")}
    <circle cx="50" cy="44" r="8" fill="${MANGO}" ${S}/>`),

  disco: svg(`
    <path d="M50 4 V18" ${S}/>
    <circle cx="50" cy="52" r="34" fill="#EEDFFF"/>
    <g stroke="${UBE}" stroke-width="2" fill="none">
      <path d="M16 52 H84 M19 38 H81 M19 66 H81 M28 26 H72 M28 78 H72"/>
      <ellipse cx="50" cy="52" rx="12" ry="34"/><ellipse cx="50" cy="52" rx="25" ry="34"/>
    </g>
    <rect x="30" y="30" width="8" height="7" fill="#fff"/><rect x="56" y="60" width="8" height="6" fill="${BUB}"/>
    <circle cx="50" cy="52" r="34" fill="none" ${S}/>
    ${sparkle(86, 16)}${sparkle(12, 84, .8, PINK)}${sparkle(88, 86, .6, UBE)}`),

  fedora: svg(`
    <ellipse cx="50" cy="66" rx="42" ry="12" fill="#3B1B2E" ${S}/>
    <path d="M24 64 C24 40 30 26 50 31 C70 26 76 40 76 64 Z" fill="#3B1B2E" ${S}/>
    <path d="M40 36 Q50 44 60 36" stroke="#7A4262" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M25 54 Q50 60 75 54 L75 62 Q50 68 25 62 Z" fill="${PINK}"/>
    ${sparkle(14, 26)}${sparkle(88, 34, .8, PINK)}${sparkle(80, 88, .6)}`),

  lumpia: svg(`
    <g transform="rotate(-18 46 48)">
      <rect x="10" y="34" width="72" height="28" rx="14" fill="#F2B43D" ${S}/>
      <path d="M24 36 q-4 12 0 24 M68 36 q-4 12 0 24" stroke="#C98414" stroke-width="2.5" fill="none"/>
      ${face(46, 46)}
    </g>
    <path d="M64 76 H90 Q88 92 77 92 Q66 92 64 76 Z" fill="#fff" ${S}/>
    <ellipse cx="77" cy="76" rx="13" ry="3" fill="#FF6B6B"/>`),
};

const PAROL = svg(`
  <path d="M100 0 V22" stroke="${B}" stroke-width="3"/>
  <path d="M84 150 C70 190 98 220 80 268" stroke="${PINK}" stroke-width="7" fill="none" stroke-linecap="round"/>
  <path d="M100 150 C92 200 110 232 100 288" stroke="${UBE}" stroke-width="7" fill="none" stroke-linecap="round"/>
  <path d="M116 150 C130 190 102 220 120 268" stroke="${MANGO}" stroke-width="7" fill="none" stroke-linecap="round"/>
  <circle cx="80" cy="270" r="6" fill="${PINK}"/><circle cx="100" cy="290" r="6" fill="${UBE}"/><circle cx="120" cy="270" r="6" fill="${MANGO}"/>
  <circle class="glow" cx="100" cy="100" r="92" fill="${MANGO}"/>
  <path d="M100 20 L120 72.5 L176.1 75.3 L132.3 110.5 L147 164.7 L100 134 L53 164.7 L67.7 110.5 L23.9 75.3 L80 72.5 Z" fill="${PINK}" stroke="${B}" stroke-width="5" stroke-linejoin="round"/>
  <path d="M100 20 L120 72.5 L176.1 75.3 L132.3 110.5 L147 164.7 L100 134 L53 164.7 L67.7 110.5 L23.9 75.3 L80 72.5 Z" fill="${BUB}" transform="translate(100 100) scale(.66) translate(-100 -100)"/>
  ${[[100,20],[176.1,75.3],[147,164.7],[53,164.7],[23.9,75.3]].map(([x,y]) => `<circle cx="${x}" cy="${y}" r="6" fill="${MANGO}" stroke="${B}" stroke-width="2.5"/>`).join("")}
  <circle cx="100" cy="101" r="28" fill="#fff" stroke="${B}" stroke-width="4"/>
  <text x="100" y="113" text-anchor="middle" font-family="Fredoka, sans-serif" font-weight="700" font-size="32" fill="${B}">22</text>
`, "0 0 200 300");

function buildCake() {
  const colors = [PINK, UBE, MANGO];
  let candles = "";
  const rows = [{ y: 70, x0: 67 }, { y: 78, x0: 73 }];   // back row, front row
  rows.forEach((row, r) => {
    for (let i = 0; i < 11; i++) {
      const x = row.x0 + i * 12.4, c = colors[(i + r) % 3];
      candles += `
        <rect x="${x - 2.5}" y="${row.y}" width="5" height="22" rx="2" fill="${c}" stroke="${B}" stroke-width="1.5"/>
        <g class="flame"><path d="M${x} ${row.y - 14} C${x + 6} ${row.y - 6} ${x + 4} ${row.y - 1} ${x} ${row.y - 1} C${x - 4} ${row.y - 1} ${x - 6} ${row.y - 6} ${x} ${row.y - 14} Z" fill="#FFA62B"/>
        <path d="M${x} ${row.y - 8} C${x + 3} ${row.y - 4} ${x + 2} ${row.y - 2} ${x} ${row.y - 2} C${x - 2} ${row.y - 2} ${x - 3} ${row.y - 4} ${x} ${row.y - 8} Z" fill="#FFE66D"/></g>
        <circle class="smoke" cx="${x}" cy="${row.y - 8}" r="4" fill="#d9c6d0"/>`;
    }
  });
  let scallopsTop = "", scallopsBot = "";
  for (let x = 62; x <= 198; x += 14) scallopsTop += `<circle cx="${x}" cy="106" r="7" fill="#fff"/>`;
  for (let x = 38; x <= 222; x += 16) scallopsBot += `<circle cx="${x}" cy="156" r="8" fill="#fff"/>`;
  const sprinkles = [[80,125,PINK],[110,130,UBE],[150,124,MANGO],[180,132,PINK],[60,185,UBE],[200,180,MANGO],[100,195,PINK],[165,196,UBE]]
    .map(([x, y, c], i) => `<rect x="${x}" y="${y}" width="9" height="3.5" rx="1.7" fill="${c}" transform="rotate(${i * 37} ${x} ${y})"/>`).join("");
  return svg(`
    <ellipse cx="130" cy="216" rx="118" ry="14" fill="#fff" ${S}/>
    <rect x="30" y="144" width="200" height="68" rx="14" fill="${BUB}" ${S}/>
    <rect x="30" y="144" width="200" height="14" rx="7" fill="#fff"/>${scallopsBot}
    <rect x="55" y="92" width="150" height="56" rx="12" fill="#FFE3EE" ${S}/>
    <rect x="55" y="92" width="150" height="14" rx="7" fill="#fff"/>${scallopsTop}
    ${sprinkles}
    <text x="130" y="192" text-anchor="middle" font-family="Fredoka, sans-serif" font-weight="700" font-size="20" fill="${B}">Happy 22nd!</text>
    ${candles}`, "0 0 260 240");
}

const DANCER = svg(`
  <g class="leg leg-l"><rect x="42" y="118" width="13" height="32" rx="6" fill="#3B1B2E"/><rect x="42" y="140" width="13" height="7" fill="#fff"/><ellipse cx="44" cy="153" rx="13" ry="6" fill="#3B1B2E"/></g>
  <g class="leg leg-r"><rect x="65" y="118" width="13" height="32" rx="6" fill="#3B1B2E"/><rect x="65" y="140" width="13" height="7" fill="#fff"/><ellipse cx="76" cy="153" rx="13" ry="6" fill="#3B1B2E"/></g>
  <path d="M28 94 q-16 6 -18 22" stroke="${BUB}" stroke-width="10" fill="none" stroke-linecap="round"/>
  <path d="M92 90 q16 -6 18 -26" stroke="${BUB}" stroke-width="10" fill="none" stroke-linecap="round"/>
  <ellipse cx="60" cy="94" rx="38" ry="37" fill="${BUB}" ${S}/>
  <circle cx="111" cy="60" r="9" fill="#fff" ${S}/>
  ${sparkle(111, 60, .6, MANGO)}${sparkle(124, 46, .7)}
  ${face(60, 96)}
  <ellipse cx="60" cy="62" rx="34" ry="7" fill="#3B1B2E" ${S}/>
  <path d="M40 61 C40 42 46 32 60 36 C74 32 80 42 80 61 Z" fill="#3B1B2E" ${S}/>
  <path d="M41 53 Q60 58 79 53 L79 59 Q60 64 41 59 Z" fill="${PINK}"/>
`, "0 0 130 165");

/* =========================================================
   Confetti
   ========================================================= */
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let parts = [], running = false;

function resize() { canvas.width = innerWidth * devicePixelRatio; canvas.height = innerHeight * devicePixelRatio; }
addEventListener("resize", resize); resize();

function burst(x, y, count = 80) {
  if (reduceMotion) count = Math.min(count, 15);
  const cols = [PINK, BUB, UBE, MANGO, "#fff", LEAF];
  for (let i = 0; i < count; i++) {
    const a = Math.random() * Math.PI * 2, sp = 3 + Math.random() * 7;
    parts.push({ x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 4, r: 5 + Math.random() * 6,
      rot: Math.random() * 6, vr: (Math.random() - .5) * .3, c: cols[i % cols.length],
      shape: ["heart", "circle", "rect"][i % 3], life: 0 });
  }
  if (!running) { running = true; requestAnimationFrame(tick); }
}
function heart(r) {
  ctx.beginPath(); ctx.moveTo(0, r * .35);
  ctx.bezierCurveTo(-r, -r * .4, -r * .4, -r * 1.1, 0, -r * .45);
  ctx.bezierCurveTo(r * .4, -r * 1.1, r, -r * .4, 0, r * .35); ctx.fill();
}
function tick() {
  const d = devicePixelRatio;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  parts = parts.filter(p => p.life < 160 && p.y < innerHeight + 40);
  for (const p of parts) {
    p.vy += .18; p.vx *= .99; p.x += p.vx; p.y += p.vy; p.rot += p.vr; p.life++;
    ctx.save(); ctx.setTransform(d, 0, 0, d, p.x * d, p.y * d); ctx.rotate(p.rot);
    ctx.globalAlpha = Math.max(0, 1 - p.life / 160); ctx.fillStyle = p.c;
    if (p.shape === "heart") heart(p.r * 1.3);
    else if (p.shape === "circle") { ctx.beginPath(); ctx.arc(0, 0, p.r / 2, 0, 7); ctx.fill(); }
    else ctx.fillRect(-p.r / 2, -p.r / 4, p.r, p.r / 2);
    ctx.restore();
  }
  if (parts.length) requestAnimationFrame(tick);
  else { running = false; ctx.clearRect(0, 0, canvas.width, canvas.height); }
}
const centerOf = el => { const r = el.getBoundingClientRect(); return [r.left + r.width / 2, r.top + r.height / 2]; };

/* =========================================================
   Setup
   ========================================================= */
document.querySelectorAll(".her-name").forEach(el => el.textContent = CONFIG.herName);
document.getElementById("from-name").textContent = CONFIG.fromName;

// Bouncy title letters
const title = document.getElementById("hero-title");
title.textContent = `Happy 22nd birthday, ${CONFIG.herName}!`;
let n = 0;
title.innerHTML = title.textContent.split(" ").map(w =>
  `<span class="word">${[...w].map(ch => `<span class="char" style="--i:${n++}">${ch}</span>`).join("")}</span>`
).join(" ");
title.setAttribute("aria-label", `Happy 22nd birthday, ${CONFIG.herName}!`);

// Floating hearts
const floaties = document.getElementById("floaties");
const floatCols = [BUB, PINK, UBE, MANGO];
for (let i = 0; i < 16; i++) {
  const s = document.createElement("span");
  s.className = "floaty";
  s.textContent = i % 3 === 0 ? "✦" : "♥";
  s.style.cssText = `left:${Math.random() * 100}%;--size:${14 + Math.random() * 18}px;--c:${floatCols[i % 4]};--dur:${12 + Math.random() * 12}s;--delay:${-Math.random() * 20}s`;
  floaties.appendChild(s);
}

// Parol
const parol = document.getElementById("parol");
parol.innerHTML = PAROL;
parol.addEventListener("click", () => {
  parol.classList.remove("wiggle"); void parol.offsetWidth; parol.classList.add("wiggle");
  burst(...centerOf(parol), 120);
});
parol.addEventListener("animationend", e => { if (e.animationName === "wiggle") parol.classList.remove("wiggle"); });

/* ===== Treats + popup ===== */
const treatsEl = document.getElementById("treats");
CONFIG.treats.forEach((t, i) => {
  const b = document.createElement("button");
  b.className = "treat";
  b.style.setProperty("--tilt", `${[-3, 2, -1, 3, -2, 1][i % 6]}deg`);
  b.innerHTML = `${ICONS[t.icon] || ICONS.gift}<span>${t.label}</span>`;
  b.addEventListener("click", () => { openModal(t, b); b.classList.add("seen"); });
  treatsEl.appendChild(b);
});

const modal = document.getElementById("modal");
const img = document.getElementById("modal-img");
const video = document.getElementById("modal-video");
const frame = img.parentElement;
let current = null, idx = 0, lastFocus = null;

function showPhoto() {
  const p = current.photos[idx];
  const isVideo = /\.mp4$/i.test(p.src);
  frame.classList.remove("missing");
  frame.classList.toggle("is-video", isVideo);
  frame.style.aspectRatio = "";
  if (isVideo) {
    img.removeAttribute("src");
    video.src = p.src;
  } else {
    video.pause(); video.removeAttribute("src"); video.load();
    img.src = p.src; img.alt = p.caption || current.title;
  }
  document.getElementById("photo-missing").textContent = `Add a photo at ${p.src}`;
  document.getElementById("modal-caption").textContent = p.caption || "";
  document.getElementById("counter").textContent = `${idx + 1} / ${current.photos.length}`;
}
// Match the frame to the photo's shape so sideways photos don't get cropped
const fitFrame = (w, h) => { if (w && h) frame.style.aspectRatio = `${w} / ${Math.min(h, w * 1.6)}`; };
img.addEventListener("load", () => fitFrame(img.naturalWidth, img.naturalHeight));
video.addEventListener("loadedmetadata", () => fitFrame(video.videoWidth, video.videoHeight));
img.addEventListener("error", () => { if (img.getAttribute("src")) frame.classList.add("missing"); });
video.addEventListener("error", () => { if (video.getAttribute("src")) frame.classList.add("missing"); });

function openModal(t, from) {
  current = t; idx = 0; lastFocus = from;
  document.getElementById("modal-icon").innerHTML = ICONS[t.icon] || "";
  document.getElementById("modal-title").textContent = t.title;
  document.getElementById("modal-message").textContent = t.message;
  document.getElementById("gallery-nav").hidden = t.photos.length < 2;
  showPhoto();
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  modal.querySelector(".modal-close").focus();
  burst(...centerOf(from), 50);
}
function closeModal() {
  modal.hidden = true; document.body.style.overflow = "";
  video.pause();
  if (lastFocus) lastFocus.focus();
}
const step = d => { idx = (idx + d + current.photos.length) % current.photos.length; showPhoto(); };
modal.querySelectorAll("[data-close]").forEach(el => el.addEventListener("click", closeModal));
document.getElementById("prev").addEventListener("click", () => step(-1));
document.getElementById("next").addEventListener("click", () => step(1));
document.addEventListener("keydown", e => {
  if (modal.hidden) return;
  if (e.key === "Escape") closeModal();
  if (e.key === "ArrowLeft" && current.photos.length > 1) step(-1);
  if (e.key === "ArrowRight" && current.photos.length > 1) step(1);
});

/* ===== Cake ===== */
const cakeBtn = document.getElementById("cake-btn");
const wish = document.getElementById("wish");
cakeBtn.innerHTML = buildCake();
let blown = false;
cakeBtn.addEventListener("click", () => {
  const flames = cakeBtn.querySelectorAll(".flame"), smokes = cakeBtn.querySelectorAll(".smoke");
  if (!blown) {
    flames.forEach((f, i) => setTimeout(() => { f.classList.add("out"); smokes[i].classList.add("puff"); }, i * 35));
    setTimeout(() => { burst(...centerOf(cakeBtn), 160); wish.textContent = CONFIG.cakeWish; }, flames.length * 35 + 150);
    cakeBtn.setAttribute("aria-label", "Light the candles again");
  } else {
    flames.forEach(f => f.classList.remove("out"));
    smokes.forEach(s => s.classList.remove("puff"));
    wish.textContent = "";
    cakeBtn.setAttribute("aria-label", "Blow out the candles");
  }
  blown = !blown;
});

/* ===== Dance floor ===== */
const floor = document.getElementById("floor");
const litCols = [PINK, UBE, MANGO, BUB, "#FFFFFF", LEAF];
for (let i = 0; i < 24; i++) {
  const t = document.createElement("button");
  t.className = "tile"; t.setAttribute("aria-label", `Light tile ${i + 1}`);
  t.addEventListener("click", () => {
    t.style.setProperty("--lit", litCols[Math.floor(Math.random() * litCols.length)]);
    t.classList.toggle("lit");
  });
  floor.appendChild(t);
}
const dancer = document.getElementById("dancer");
dancer.innerHTML = DANCER;
let lightsTimer = null;
function partyLights() {
  clearInterval(lightsTimer);
  const tiles = [...floor.children]; let ticks = 0;
  lightsTimer = setInterval(() => {
    tiles.forEach(t => {
      t.classList.toggle("lit", Math.random() > .5);
      t.style.setProperty("--lit", litCols[Math.floor(Math.random() * litCols.length)]);
    });
    if (++ticks > 16) { clearInterval(lightsTimer); tiles.forEach(t => t.classList.remove("lit")); }
  }, 250);
}
document.querySelectorAll("[data-move]").forEach(btn => btn.addEventListener("click", () => {
  const move = btn.dataset.move;
  if (move === "lights") { partyLights(); return; }
  dancer.classList.remove("moonwalk", "spin"); void dancer.offsetWidth;
  dancer.classList.add(move);
  if (move === "spin") burst(...centerOf(dancer), 40);
}));
dancer.addEventListener("animationend", e => {
  if (e.target === dancer && (e.animationName === "moonwalk" || e.animationName === "spin")) dancer.classList.remove("moonwalk", "spin");
});

/* ===== Letter ===== */
const env = document.getElementById("envelope");
const letterBody = document.getElementById("letter-body");
letterBody.innerHTML = CONFIG.letter.map(p => `<p>${p}</p>`).join("") + `<p class="sign">Love, ${CONFIG.fromName} 💗</p>`;
env.addEventListener("click", () => {
  const open = env.classList.toggle("open");
  env.setAttribute("aria-expanded", open);
  env.querySelector(".env-label").textContent = open ? "Close" : "Open me";
  letterBody.hidden = !open;
  if (open) burst(...centerOf(env), 60);
});
