
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(".product-card, .about, .contact").forEach((el) => {
    el.classList.add("hidden");
    observer.observe(el);
  });
});
