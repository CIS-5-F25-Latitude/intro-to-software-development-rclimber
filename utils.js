// Utility helpers: keep these tiny and readable.
// Feel free to add more (e.g., rect collision) when needed.

/** Clamp a number between min and max. */
function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

/** Random integer in [min, max]. */
function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/** Fisher–Yates shuffle (in place). */
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/** Format seconds into m:ss. */
function formatTime(sec) {
  const s = Math.max(0, Math.floor(sec));
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m}:${r.toString().padStart(2, '0')}`;
}

// Export to window for simplicity (no bundler)
window.utils = { clamp, randInt, shuffle, formatTime };

