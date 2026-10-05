/* =========================================================
   ✏️  A MESSAGE FROM THE LOVED ONES
   One line per person. Put each photo in the img/ folder
   and make the file name match "src".
   "message" is optional. Leave it as "" if you don't want one.
   To add more people, copy a line and paste it below the last one.
   ========================================================= */
const LOVED_ONES = [
  { name: "Teresa & Dylinh", message: "Short note from them (optional)", src: "img/loved-1.jpg" },
  { name: "Dagny", message: "Short note from them (optional)", src: "img/loved-2.jpg" },
  { name: "Kevin", message: "Short note from them (optional)", src: "img/loved-3.jpg" },
  { name: "Mak", message: "Short note from them (optional)", src: "img/loved-4.jpg" },
  { name: "Tiff", message: "Short note from them (optional)", src: "img/loved-5.jpg" },
  { name: "Ateh KK & Mai", message: "Short note from them (optional)", src: "img/loved-5.jpg" },
  { name: "Mom & Dad", message: "Short note from them (optional)", src: "img/loved-6.jpg" },
];

/* ===== No need to edit below this line ===== */
(function () {
  const grid = document.getElementById("loved-grid");
  const tilts = [-3, 2, -1.5, 3, -2, 1.5];
  LOVED_ONES.forEach((p, i) => {
    const card = document.createElement("button");
    card.className = "loved-card";
    card.style.setProperty("--tilt", `${tilts[i % tilts.length]}deg`);

    const tape = document.createElement("span"); tape.className = "tape";
    const frame = document.createElement("span"); frame.className = "photo-frame"; frame.style.display = "block";
    const img = document.createElement("img"); img.src = p.src; img.alt = `${p.name} saying happy birthday`; img.loading = "lazy";
    img.addEventListener("error", () => frame.classList.add("missing"));
    const missing = document.createElement("span"); missing.className = "photo-missing"; missing.textContent = `Add a photo at ${p.src}`;
    frame.append(img, missing);
    const name = document.createElement("span"); name.className = "loved-name"; name.textContent = p.name;
    card.append(tape, frame, name);
    if (p.message) {
      const msg = document.createElement("span"); msg.className = "loved-msg"; msg.textContent = p.message;
      card.append(msg);
    }
    card.addEventListener("click", () => openModal({
      icon: "sampaguita", title: p.name, message: p.message || "",
      photos: [{ src: p.src, caption: "Happy Birthday Birthdaybun!" }]
    }, card));
    grid.appendChild(card);
  });
})();
