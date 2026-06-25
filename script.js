const year = document.querySelector("#year");
const forms = document.querySelectorAll(".lead-form");
const sliders = document.querySelectorAll("[data-slider]");

year.textContent = new Date().getFullYear();

sliders.forEach((slider) => {
  const slides = Array.from(slider.querySelectorAll(".slide"));
  const dots = Array.from(slider.querySelectorAll("[data-slider-dot]"));
  const previous = slider.querySelector("[data-slider-prev]");
  const next = slider.querySelector("[data-slider-next]");
  let activeIndex = 0;
  let timer;

  const showSlide = (index) => {
    activeIndex = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("active", slideIndex === activeIndex);
    });
    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle("active", dotIndex === activeIndex);
    });
  };

  const start = () => {
    window.clearInterval(timer);
    timer = window.setInterval(() => showSlide(activeIndex + 1), 5200);
  };

  previous?.addEventListener("click", () => {
    showSlide(activeIndex - 1);
    start();
  });

  next?.addEventListener("click", () => {
    showSlide(activeIndex + 1);
    start();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
      start();
    });
  });

  slider.addEventListener("mouseenter", () => window.clearInterval(timer));
  slider.addEventListener("mouseleave", start);
  start();
});

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
