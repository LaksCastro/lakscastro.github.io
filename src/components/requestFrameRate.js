export default function RequestFrameRate(callback) {
  function start() {
    function frame() {
      callback();
      start();
    }

    window.requestAnimationFrame(frame);
  }

  const self = {
    start,
  };

  return Object.freeze(self);
}
