/* ------------------------------------------------------------------
   Contact form
   Turns the Project and Info fields into the subject line and body of
   an email addressed to the studio.
   ------------------------------------------------------------------ */

(() => {
  const ADDRESS = "bonitafilmworks@gmail.com";
  const form = document.querySelector("#contact-form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const project = form.elements.project.value.trim();
    const info = form.elements.info.value.trim();
    const subject = project || "Project enquiry";
    const body = info;

    window.location.href =
      "mailto:" + ADDRESS +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);
  });
})();
