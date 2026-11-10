/* ------------------------------------------------------------------
   Navigation hover highlight
   Draws a compact solid box over the hovered label, in a random
   colour from a four-colour red/brown/pink set.
   ------------------------------------------------------------------ */

(() => {
  const COLORS = [
    { hex: "#362304" }, // Vandyke Brown
    { hex: "#740909" }, // Vandyke Red
    { hex: "#a10b2b" }, // Carmine Red
    { hex: "#ff5ec4" }, // Eosine Pink
  ];

  const coarse = window.matchMedia("(hover: none), (pointer: coarse)");
  if (coarse.matches) return;

  const links = document.querySelectorAll(".brand, .work a, .back");
  const PAD_X = 7;
  const PAD_Y = 4;
  let previous = -1;

  function labelRect(link) {
    if (link.classList.contains("brand")) {
      const logo = link.querySelector(".brand__logo") || link;
      return logo.getBoundingClientRect();
    }

    if (link.matches(".work a")) {
      const name = link.querySelector(".work__name");
      if (name) {
        const range = document.createRange();
        range.selectNodeContents(name);
        const rect = range.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) return rect;
      }
    }

    return link.getBoundingClientRect();
  }

  function position(link, box) {
    const linkRect = link.getBoundingClientRect();
    const rect = labelRect(link);
    box.style.left = rect.left - linkRect.left - PAD_X + "px";
    box.style.top = rect.top - linkRect.top - PAD_Y + "px";
    box.style.width = rect.width + PAD_X * 2 + "px";
    box.style.height = rect.height + PAD_Y * 2 + "px";
  }

  function paint(link, box) {
    // Pick a random colour, avoiding the same one twice in a row.
    let index = Math.floor(Math.random() * COLORS.length);
    if (index === previous) {
      index = (index + 1 + Math.floor(Math.random() * (COLORS.length - 1))) %
        COLORS.length;
    }
    previous = index;

    const color = COLORS[index];
    link.style.setProperty("--hl", color.hex);
    position(link, box);
    link.classList.add("is-hover");
  }

  links.forEach((link) => {
    const box = document.createElement("span");
    box.className = "nav-hl";
    box.setAttribute("aria-hidden", "true");
    link.prepend(box);

    link.addEventListener("pointerenter", (event) => {
      if (event.pointerType && event.pointerType !== "mouse") return;
      paint(link, box);
    });

    link.addEventListener("pointerleave", () => {
      link.classList.remove("is-hover");
    });

    link.addEventListener("focus", () => {
      if (link.matches(":focus-visible")) paint(link, box);
    });

    link.addEventListener("blur", () => {
      link.classList.remove("is-hover");
    });
  });
})();
