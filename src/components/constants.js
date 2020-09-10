export default function Constants(size, maxCount, color) {
  function get() {
    return {
      size,
      maxCount,
      color
    };
  }

  const self = {
    get,
  };

  return Object.freeze(self);
}
