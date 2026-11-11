/* ------------------------------------------------------------------
   Contact form
   Sends the Project and Info fields to FormSubmit, a free form service
   that forwards each message to the studio inbox. Keeping the request
   in the page means the visitor stays here and sees a confirmation.
   ------------------------------------------------------------------ */

(() => {
  const ENDPOINT = "https://formsubmit.co/ajax/bonitafilmworks@gmail.com";
  const form = document.querySelector("#contact-form");
  if (!form) return;

  const button = form.querySelector("button[type='submit']");
  const label = button ? button.querySelector(".button__label") : null;
  const status = document.querySelector("#contact-status");
  const subject = form.querySelector("input[name='_subject']");

  function setStatus(message, isError = false) {
    if (!status) return;
    status.textContent = message;
    status.classList.toggle("is-error", isError);
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (form.classList.contains("is-sending")) return;

    const project = form.elements.Project.value.trim();

    if (subject) {
      subject.value = project ? "Project: " + project : "Project enquiry";
    }

    form.classList.add("is-sending");
    if (button) button.disabled = true;
    if (label) label.textContent = "Sending…";
    setStatus("");

    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok || String(result.success) === "false") {
        throw new Error(result.message || "Submission failed");
      }

      form.classList.remove("is-sending");
      form.classList.add("is-sent");
      setStatus("Thank you — your message is on its way. We'll reply soon.");
    } catch (error) {
      form.classList.remove("is-sending");
      if (button) button.disabled = false;
      if (label) label.textContent = "Send";
      setStatus("Something went wrong. Please try again.", true);
    }
  });
})();
