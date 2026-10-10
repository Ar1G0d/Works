// Sekction JS Theme Switcher

document.addEventListener("DOMContentLoaded", function () {
  const scrollBtn = document.querySelector(".strelka");

  if (scrollBtn) {
    scrollBtn.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  const toggleBtn = document.getElementById("themeToggle");
  if (!toggleBtn) return;

  const themeLabel = toggleBtn.querySelector(".theme-toggle__label");
  const themeIcon = toggleBtn.querySelector(".theme-toggle__icon");

  function applyTheme(isDark) {
    document.body.classList.toggle("dark-theme", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");

    if (themeLabel) {
      themeLabel.textContent = isDark ? "Ciemny" : "Jasny";
    }

    if (themeIcon) {
      themeIcon.textContent = isDark ? "🌙" : "☀️";
    }
  }

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    applyTheme(true);
  } else {
    applyTheme(false);
  }

  toggleBtn.addEventListener("click", function () {
    const isDark = !document.body.classList.contains("dark-theme");
    applyTheme(isDark);
  });
});
