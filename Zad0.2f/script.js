// Sekction JS Theme Switcher

document.addEventListener("DOMContentLoaded", function () {
  var toggleBtn = document.getElementById("themeToggle");
  var iconSun = document.getElementById("iconSun");
  var iconMoon = document.getElementById("iconMoon");

  function updateIcon(isDark) {
    if (isDark) {
      iconSun.style.display = "none";
      iconMoon.style.display = "block";
    } else {
      iconSun.style.display = "block";
      iconMoon.style.display = "none";
    }
  }

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
    updateIcon(true);
  }

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
    toggleBtn.checked = true;
  }

  toggleBtn.addEventListener("change", function () {
    document.body.classList.toggle("dark-theme");
    var isDark = document.body.classList.contains("dark-theme");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
});
