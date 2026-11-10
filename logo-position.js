/* ------------------------------------------------------------------
   Centre the top logo vertically between the top of the frame and
   the first navigation label ("Us"). Index page only.
   ------------------------------------------------------------------ */

(() => {
  const logo = document.querySelector(".brand__logo");
  const firstNav = document.querySelector(".work .work__name");
  if (!logo || !firstNav) return;

  function place() {
    // Measure from the logo's untransformed position every time so
    // recalculating on resize does not stack shifts.
    logo.style.transform = "none";

    const logoRect = logo.getBoundingClientRect();
    const navRect = firstNav.getBoundingClientRect();
    const logoCentre = logoRect.top + logoRect.height / 2;
    // Halfway between the top of the frame and the top of the first label.
    const gapCentre = navRect.top / 2;

    logo.style.transform = "translateY(" + (gapCentre - logoCentre) + "px)";
  }

  place();
  window.addEventListener("resize", place, { passive: true });
  window.addEventListener("orientationchange", place, { passive: true });

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(place);
  }
})();
