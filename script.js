// Each .binary-col shows one word from the .binary data-words list, written in
// binary with one bit per line. When a word has slid out, the column picks a
// random word from the list and starts a new pass at a new random speed.
const binary = document.querySelector(".binary");

if (binary) {
  const words = binary.dataset.words.split(",").map((w) => w.trim()).filter(Boolean);
  const MIN_SPEED = 26; // px per second
  const MAX_SPEED = 40;
  const showing = new Map(); // track -> word it is currently showing

  // Pick a random word, avoiding ones other columns are showing when possible.
  const pickWord = (track) => {
    const taken = new Set([...showing].filter(([t]) => t !== track).map(([, w]) => w));
    const free = words.filter((w) => !taken.has(w));
    const pool = free.length ? free : words;
    const word = pool[Math.floor(Math.random() * pool.length)];
    showing.set(track, word);
    return word;
  };

  const toBinary = (word) =>
    [...word]
      .map((ch) => ch.charCodeAt(0).toString(2).padStart(8, "0"))
      .map((byte) => [...byte].join("\n"))
      .join("\n\n");

  const startPass = (track, isFirst) => {
    track.textContent = toBinary(pickWord(track));

    const speed = MIN_SPEED + Math.random() * (MAX_SPEED - MIN_SPEED);
    const duration = (track.offsetHeight + binary.clientHeight) / speed;
    track.style.setProperty("--dur", `${duration}s`);

    // On page load the columns start from the top, staggered so they don't fall in unison.
    const delay = isFirst ? Math.random() * 2.5 : 0;
    track.style.setProperty("--delay", `${delay}s`);

    // Restart the animation with the new duration.
    track.style.animation = "none";
    void track.offsetWidth;
    track.style.animation = "";
  };

  binary.querySelectorAll(".binary-col").forEach((col) => {
    const track = document.createElement("div");
    track.className = "binary-track";
    col.append(track);

    track.addEventListener("animationend", () => startPass(track, false));
    startPass(track, true);
  });
}
