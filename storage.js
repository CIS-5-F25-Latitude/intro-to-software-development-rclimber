// Tiny localStorage helpers for saving small data.

function saveData(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.warn('saveData failed', e);
  }
}

function loadData(key, defaultValue) {
  try {
    const raw = localStorage.getItem(key);
    return raw == null ? defaultValue : JSON.parse(raw);
  } catch (e) {
    console.warn('loadData failed', e);
    return defaultValue;
  }
}

function removeData(key) {
  try {
    localStorage.removeItem(key);
  } catch (e) {
    console.warn('removeData failed', e);
  }
}

window.store = { saveData, loadData, removeData };

