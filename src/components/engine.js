import RequestFrameRate from "./requestFrameRate";

export default function Engine(logic) {
  const frameRate = RequestFrameRate(update);

  function start() {
    logic.init();

    frameRate.start();
  }

  function update() {
    logic.update();
  }

  const self = {
    start,
  };

  return Object.freeze(self);
}
