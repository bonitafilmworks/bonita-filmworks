/* ------------------------------------------------------------------
   Contact form
   Sends the Project and Info fields to FormSubmit, a free form service
   that forwards each message to the studio inbox. When the mailing-list
   box is ticked, the same email address is posted to Kit, which stores
   the subscriber and sends a confirmation email.
   ------------------------------------------------------------------ */

(() => {
  const ENDPOINT = "https://formsubmit.co/ajax/bonitafilmworks@gmail.com";
  const form = document.querySelector("#contact-form");
  if (!form) return;

  const button = form.querySelector("button[type='submit']");
  const label = button ? button.querySelector(".button__label") : null;
  const status = document.querySelector("#contact-status");
  const subject = form.querySelector("input[name='_subject']");
  const subscribeBox = form.querySelector("input[name='subscribe']");
  const subscribeForm = document.querySelector("#subscribe-form");
  const subscribeEmail = subscribeForm
    ? subscribeForm.querySelector("input[name='email_address']")
    : null;
  const kitReady = Boolean(
    subscribeForm &&
      subscribeEmail &&
      /^https:\/\/app\.kit\.com\/forms\/\d+\/subscriptions$/.test(
        subscribeForm.action
      )
  );

  function setStatus(message, isError = false) {
    if (!status) return;
    status.textContent = message;
    status.classList.toggle("is-error", isError);
  }

  function addToMailingList(email) {
    if (!kitReady || !email) return false;
    try {
      subscribeEmail.value = email;
      subscribeForm.submit();
      return true;
    } catch (error) {
      return false;
    }
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (form.classList.contains("is-sending")) return;

    const project = form.elements.Project.value.trim();
    const email = form.elements.email.value.trim();
    const wantsList = Boolean(subscribeBox && subscribeBox.checked);

    if (subject) {
      subject.value = project ? "Project: " + project : "Project enquiry";
    }

    form.classList.add("is-sending");
    if (button) button.disabled = true;
    if (label) label.textContent = "Sending…";
    setStatus("");

    // Start the mailing-list signup first so it does not depend on the
    // message service being available or activated.
    const subscribed = wantsList && addToMailingList(email);

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
      setStatus(
        subscribed
          ? "Thank you — your message is on its way. Check your inbox to confirm your mailing-list subscription."
          : "Thank you — your message is on its way. We'll reply soon."
      );
    } catch (error) {
      form.classList.remove("is-sending");
      if (button) button.disabled = false;
      if (label) label.textContent = "Send";
      setStatus(
        subscribed
          ? "You're on the mailing list — check your inbox to confirm. Your message could not be sent, so please email bonitafilmworks@gmail.com directly."
          : "Something went wrong. Please try again.",
        true
      );
    }
  });
})();
