const year = document.querySelector("#year");
const forms = document.querySelectorAll(".lead-form");

year.textContent = new Date().getFullYear();

forms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const status = form.querySelector(".form-note");

    if (!form.checkValidity()) {
      status.textContent = "Please complete the required fields so our team can follow up properly.";
      status.className = "form-note error";
      form.reportValidity();
      return;
    }

    const data = new FormData(form);
    const details = Array.from(data.entries())
      .filter(([, value]) => String(value).trim())
      .map(([key, value]) => `${formatLabel(key)}: ${value}`)
      .join("\n");

    const subject = encodeURIComponent("New Loukosvky strategy call request");
    const body = encodeURIComponent(
      [
        "New Loukosvky Morisset strategy call request:",
        "",
        details,
        "",
        "Reminder: do not send sensitive personal, medical, financial, account, or confidential details by email.",
      ].join("\n"),
    );

    status.textContent = "Opening your email app with the request details. Replace this with a CRM or secure scheduling backend before launch.";
    status.className = "form-note success";
    window.location.href = `mailto:info@loukosvky.com?subject=${subject}&body=${body}`;
  });
});

function formatLabel(key) {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (letter) => letter.toUpperCase())
    .trim();
}
