// Runs before the page draws, so a saved light theme doesn't flash dark first.
try {
  if (localStorage.getItem("theme") === "light") {
    document.documentElement.dataset.theme = "light";
  }
} catch {}
