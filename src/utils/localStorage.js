export function setItems(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.log(err);
  }
}

export function getItems(key) {
  try {
    const item = window.localStorage.getItem(key);
    return JSON.parse(item) || undefined;
  } catch (err) {
    console.log(err);
  }
}
