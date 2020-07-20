export default function Constants(size, maxCount) {
  function get() {
    return {
      size,
      maxCount,
    };
  }

  const self = {
    get,
  };

  return Object.freeze(self);
}
