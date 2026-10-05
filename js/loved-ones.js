/* =========================================================
   ✏️  A MESSAGE FROM THE LOVED ONES
   One line per person. Put each photo in the img/ folder
   and make the file name match "src".
   "name" and "message" are optional. Leave them as "" to hide them. Leave it as "" if you don't want one.
   To add someone, copy a line and paste it below the last one.
   If a group has nobody in it yet, it stays hidden.
   ========================================================= */
const FAMILY = [
  { name: "", message: "", src: "img/family-1.jpg" },
  { name: "", message: "", src: "img/family-2.jpg" },
  { name: "", message: "", src: "img/family-3.jpg" },
  { name: "", message: "", src: "img/family-4.jpg" },
  { name: "", message: "", src: "img/family-5.jpg" },
  { name: "", message: "", src: "img/family-6.jpg" },
  { name: "", message: "", src: "img/family-7.jpg" },
  { name: "", message: "", src: "img/family-8.jpg" },
  { name: "", message: "", src: "img/family-9.jpg" },
  { name: "", message: "", src: "img/family-10.jpg" },
  { name: "", message: "", src: "img/family-11.jpg" },
  { name: "", message: "", src: "img/family-12.jpg" },
  { name: "", message: "", src: "img/family-13.jpg" },
  { name: "", message: "", src: "img/family-14.jpg" },
];

const FRIENDS = [
  { name: "", message: "", src: "img/friend-1.jpg" },
  { name: "", message: "", src: "img/friend-2.jpg" },
  { name: "", message: "", src: "img/friend-3.jpg" },
  { name: "", message: "", src: "img/friend-4.jpg" },
  { name: "", message: "", src: "img/friend-5.jpg" },
  { name: "", message: "", src: "img/friend-6.jpg" },
  { name: "", message: "", src: "img/friend-7.jpg" },
  { name: "", message: "", src: "img/friend-8.jpg" },
];

const LOVED_CAPTION = "";

/* ===== No need to edit below this line ===== */
(function () {
  const tilts = [-3, 2, -1.5, 3, -2, 1.5];
  function fill(gridId, people) {
    const grid = document.getElementById(gridId);
    if (!people.length) { grid.closest(".loved-group").hidden = true; return; }
    people.forEach((p, i) => {
      const card = document.createElement("button");
      card.className = "loved-card";
      card.style.setProperty("--tilt", `${tilts[i % tilts.length]}deg`);

      const tape = document.createElement("span"); tape.className = "tape";
      const frame = document.createElement("span"); frame.className = "photo-frame"; frame.style.display = "block";
      const img = document.createElement("img"); img.src = p.src; img.alt = p.name ? `${p.name} saying happy birthday` : "A loved one saying happy birthday"; img.loading = "lazy";
      img.addEventListener("error", () => frame.classList.add("missing"));
      const missing = document.createElement("span"); missing.className = "photo-missing"; missing.textContent = `Add a photo at ${p.src}`;
      frame.append(img, missing);
      card.append(tape, frame);
      if (p.name) {
        const name = document.createElement("span"); name.className = "loved-name"; name.textContent = p.name;
        card.append(name);
      }
      if (p.message) {
        const msg = document.createElement("span"); msg.className = "loved-msg"; msg.textContent = p.message;
        card.append(msg);
      }
      card.addEventListener("click", () => openModal({
        icon: "sampaguita", title: p.name || "", message: p.message || "",
        photos: [{ src: p.src, caption: LOVED_CAPTION }]
      }, card));
      grid.appendChild(card);
    });
  }
  fill("family-grid", FAMILY);
  fill("friends-grid", FRIENDS);
})();
