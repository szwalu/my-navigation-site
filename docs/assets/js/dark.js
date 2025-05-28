console.log("✅ dark.js loaded");

(function () {
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  console.log("💡 System prefers dark mode:", isDark);

  const html = document.documentElement;

  if (isDark) {
    html.classList.add('night');
  } else {
    html.classList.remove('night');
  }
})();

// 手动切换夜间模式（临时，不保留）
function switchNightMode() {
  console.log("🔁 switchNightMode called");
  const html = document.documentElement;
  const icon = document.querySelector(".mode-ico");

  html.classList.toggle("night");

  if (icon) {
    if (html.classList.contains("night")) {
      icon.classList.remove("icon-light");
      icon.classList.add("icon-night");
    } else {
      icon.classList.remove("icon-night");
      icon.classList.add("icon-light");
    }
  }
}