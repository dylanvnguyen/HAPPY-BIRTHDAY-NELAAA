/* =========================================================
   ✏️  YOUR LETTER
   This is the note inside the envelope.
   Each line in "paragraphs" is its own paragraph.
   (This replaces the letter text in script.js.)
   ========================================================= */
const LETTER = {
  photo: "img/letter-photo.jpg",
  paragraphs: [
    "Happy birthday 22nd my love, I hope you enjoyed this gift!",
    "Year 22…. who knows what God has in the books for you baby but I’m so proud of how much you’ve grown and how far you’ve come.",
    "You said you didn’t want to do anything for your birthday and even though I’m not there physically right now, I still wanted to make you feel extra special for your birthday.",
    "Everybody was so kind sending in their photos and I hope you get a good laugh looking at them.",
    "Happy birthday Nela I love you so much!",
  ],
  closing: "- With much love, Dylan",
};

/* ===== No need to edit below this line ===== */
(function () {
  const body = document.getElementById("letter-body");
  if (!body) return;
  body.innerHTML = "";

  if (LETTER.photo) {
    const fig = document.createElement("figure");
    fig.className = "letter-photo";
    const tape = document.createElement("span"); tape.className = "tape";
    const img = document.createElement("img");
    img.src = LETTER.photo; img.alt = "A photo from Dylan";
    img.addEventListener("error", () => fig.remove());
    fig.append(tape, img);
    body.appendChild(fig);
  }
  LETTER.paragraphs.forEach(text => {
    const p = document.createElement("p");
    p.textContent = text;
    body.appendChild(p);
  });
  const sign = document.createElement("p");
  sign.className = "sign";
  sign.textContent = LETTER.closing;
  body.appendChild(sign);
})();
