/* =========================================================
   ✏️  EXTRA PHOTOS
   Adds a photo as the FIRST picture in a popup.
   Add a caption between the quotes if you want one.
   ========================================================= */
const EXTRA_PHOTOS = [
  { icon: "gift",   src: "img/gift-photo.jpg", caption: "" },
  { icon: "fedora", src: "img/mj-funko.jpg",   caption: "" },
];

/* ===== No need to edit below this line ===== */
(function () {
  EXTRA_PHOTOS.slice().reverse().forEach(x => {
    const t = CONFIG.treats.find(tr => tr.icon === x.icon);
    if (t && !t.photos.some(p => p.src === x.src)) t.photos.unshift({ src: x.src, caption: x.caption });
  });
})();
