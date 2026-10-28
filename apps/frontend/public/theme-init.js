// Apply the saved or system theme before first paint to avoid a light-mode flash
(function () {
  // Marks that scripts run, enabling scroll-reveal styles in globals.css
  document.documentElement.classList.add('js');
  try {
    var saved = localStorage.getItem('theme');
    var dark = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (dark) document.documentElement.classList.add('dark');
  } catch (e) {}
})();
