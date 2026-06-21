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

    const isAgentForm = form.id === "agentForm";
    const subject = encodeURIComponent(isAgentForm ? "New agent interest request" : "New consultation request");
    const body = encodeURIComponent(
      [
        isAgentForm ? "New CarribeanMajesty agent interest request:" : "New CarribeanMajesty consultation request:",
        "",
        details,
        "",
        "Reminder: do not send SSN, medical history, financial account details, or policy numbers by email.",
      ].join("\n"),
    );

    status.textContent = "Opening your email app with the request details. Replace this with a CRM or secure form backend before launch.";
    status.className = "form-note success";
    window.location.href = `mailto:info@carribeanmajesty.com?subject=${subject}&body=${body}`;
  });
});

function formatLabel(key) {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (letter) => letter.toUpperCase())
    .trim();
}
