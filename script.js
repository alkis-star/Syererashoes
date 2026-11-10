// JavaScript untuk menu navigasi versi HP dan tahun otomatis di footer.
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Tutup menu" : "Buka menu");
      menuToggle.textContent = isOpen ? "×" : "☰";
    });

    // Tutup menu setelah salah satu tautan dipilih.
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Buka menu");
        menuToggle.textContent = "☰";
      });
    });
  }

  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();
});
