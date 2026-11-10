/* ------------------------------------------------------------------
   Cursor trail
   Small versions of the ant logo in three Sanzo Wada colours.
   Skipped on touch devices and when reduced motion is requested.
   ------------------------------------------------------------------ */

(() => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  const coarse = window.matchMedia("(hover: none), (pointer: coarse)");
  if (reduce.matches || coarse.matches) return;

  const assets = [
    "assets/trail-rosolanc.png", // Rosolanc Purple  #b319ab
    "assets/trail-lyons.png",    // Deep Lyons Blue  #0024cc
    "assets/trail-jasper.png",   // Jasper Red       #fa2b00
  ];

  // Warm the cache so the first ants appear instantly.
  assets.forEach((src) => {
    const img = new Image();
    img.src = src;
  });

  const MAX_ACTIVE = 36;
  let active = 0;
  let lastTime = 0;
  let lastX = 0;
  let lastY = 0;

  function spawn(x, y) {
    if (active >= MAX_ACTIVE) return;

    const img = document.createElement("img");
    const size = 18 + Math.random() * 24;
    const rotation = Math.random() * 140 - 70;
    const driftX = Math.random() * 26 - 13;
    const driftY = Math.random() * 22 - 2;

    img.className = "cursor-trail";
    img.src = assets[Math.floor(Math.random() * assets.length)];
    img.alt = "";
    img.setAttribute("aria-hidden", "true");
    img.decoding = "async";
    img.draggable = false;
    img.style.left = x + "px";
    img.style.top = y + "px";
    img.style.width = size + "px";
    img.style.height = size + "px";
    img.style.setProperty("--rot", rotation.toFixed(1) + "deg");
    img.style.setProperty("--dx", driftX.toFixed(1) + "px");
    img.style.setProperty("--dy", driftY.toFixed(1) + "px");

    document.body.appendChild(img);
    active += 1;

    img.addEventListener(
      "animationend",
      () => {
        img.remove();
        active -= 1;
      },
      { once: true }
    );
  }

  window.addEventListener(
    "pointermove",
    (event) => {
      if (event.pointerType !== "mouse") return;

      const now = performance.now();
      const dx = event.clientX - lastX;
      const dy = event.clientY - lastY;
      if (now - lastTime < 32 || dx * dx + dy * dy < 36) return;

      lastTime = now;
      lastX = event.clientX;
      lastY = event.clientY;
      spawn(event.clientX, event.clientY);
    },
    { passive: true }
  );
})();
