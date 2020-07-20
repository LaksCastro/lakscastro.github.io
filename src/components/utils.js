export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function getObjectKey(obj, key) {
  const validProperty = obj.hasOwnProperty(key);

  return validProperty ? obj[key] : {};
}
