/* =========================================================
   🎩 SMOOTH CRIMINAL MODE
   Plays the official music video from YouTube and makes the
   dancer run through a routine while it plays.
   ✏️  VIDEO_ID: the part after "v=" in the YouTube link.
   ✏️  START_AT: how many seconds into the video to start.
   ========================================================= */
const VIDEO_ID = "h_D3VFfhvs4";
const START_AT = 0;

/* ===== No need to edit below this line ===== */
(function () {
  const dancerEl = document.getElementById("dancer");
  const floorEl = document.getElementById("floor");
  const btn = document.getElementById("sc-btn");
  const tv = document.getElementById("tv");
  const note = document.getElementById("tv-note");
  const MOVES = ["moonwalk", "spin", "lean", "kick", "toe", "hattip"];

  // Group the hat shapes so the hat can tip on its own
  const svgEl = dancerEl.querySelector("svg");
  if (svgEl) {
    const hat = document.createElementNS("http://www.w3.org/2000/svg", "g");
    hat.setAttribute("class", "hat");
    [...svgEl.children].slice(-3).forEach(n => hat.appendChild(n));
    svgEl.appendChild(hat);
  }

  function doMove(move) {
    dancerEl.classList.remove(...MOVES);
    void dancerEl.offsetWidth;
    dancerEl.classList.add(move);
  }
  document.querySelectorAll("[data-sc-move]").forEach(b =>
    b.addEventListener("click", () => doMove(b.dataset.scMove)));
  dancerEl.addEventListener("animationend", e => {
    if (["lean", "toe"].includes(e.animationName) && e.target === dancerEl) dancerEl.classList.remove("lean", "toe");
    if (e.animationName === "kick") dancerEl.classList.remove("kick");
    if (e.animationName === "hattip") dancerEl.classList.remove("hattip");
  });

  // The routine: [move, how long it takes in ms]
  const ROUTINE = [["hattip", 1300], ["moonwalk", 3100], ["lean", 2300], ["spin", 1100],
                   ["kick", 1200], ["toe", 1300], ["lean", 2300], ["moonwalk", 3100]];
  let dancing = false, stepTimer = null, lightTimer = null, step = 0;
  const lightCols = ["#FF5FA2", "#9C6ADE", "#FFC53D", "#FF9CC8", "#FFFFFF"];

  function nextStep() {
    if (!dancing) return;
    const [move, ms] = ROUTINE[step % ROUTINE.length];
    doMove(move); step++;
    stepTimer = setTimeout(nextStep, ms + 150);
  }
  function startDancing() {
    if (dancing) return;
    dancing = true; step = 0; nextStep();
    lightTimer = setInterval(() => {
      [...floorEl.children].forEach(t => {
        t.classList.toggle("lit", Math.random() > .55);
        t.style.setProperty("--lit", lightCols[Math.floor(Math.random() * lightCols.length)]);
      });
    }, 430);
    btn.classList.add("on"); btn.textContent = "⏸ Stop the show";
  }
  function stopDancing() {
    dancing = false; clearTimeout(stepTimer); clearInterval(lightTimer);
    dancerEl.classList.remove(...MOVES);
    [...floorEl.children].forEach(t => t.classList.remove("lit"));
    btn.classList.remove("on"); btn.textContent = "🎩 Smooth Criminal mode";
  }

  // YouTube player
  let player = null, apiLoading = false;
  const watchLink = `<a href="https://www.youtube.com/watch?v=${VIDEO_ID}" target="_blank" rel="noopener">Watch it on YouTube instead</a>`;
  function makePlayer() {
    player = new YT.Player("yt-player", {
      videoId: VIDEO_ID,
      playerVars: { autoplay: 1, start: START_AT, playsinline: 1, rel: 0 },
      events: {
        onReady: e => e.target.playVideo(),
        onStateChange: e => {
          if (e.data === YT.PlayerState.PLAYING) { note.textContent = ""; startDancing(); }
          if (e.data === YT.PlayerState.PAUSED || e.data === YT.PlayerState.ENDED) stopDancing();
        },
        onError: () => { note.innerHTML = `The video can't play here. ${watchLink}`; }
      }
    });
  }
  window.onYouTubeIframeAPIReady = makePlayer;

  btn.addEventListener("click", () => {
    if (dancing) { stopDancing(); if (player && player.pauseVideo) player.pauseVideo(); return; }
    tv.hidden = false;
    startDancing();
    if (location.protocol === "file:") {
      tv.querySelector(".tv-screen").style.display = "none";
      note.innerHTML = `The music only plays once the site is online (on GitHub). ${watchLink}`;
      return;
    }
    if (player && player.playVideo) { player.playVideo(); return; }
    if (!apiLoading) {
      apiLoading = true;
      note.textContent = "If the music doesn't start, tap play on the video.";
      const s = document.createElement("script");
      s.src = "https://www.youtube.com/iframe_api";
      s.onerror = () => { note.innerHTML = `Couldn't load the video. ${watchLink}`; };
      document.head.appendChild(s);
    }
  });
})();
