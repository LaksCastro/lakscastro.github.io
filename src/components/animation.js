import Logic from "./logic";
import Engine from "./engine";
import { randomInt } from "./utils";

export default function Animation() {
  const stateManager = this;

  function start() {
    const canvas = stateManager.getInstance("canvas");
    canvas.get().define();

    const stars = stateManager.getInstance("stars");

    const logic = Logic.call(stateManager);
    const engine = Engine(logic);

    engine.start();

    window.addEventListener("resize", () => canvas.get().define());

    window.onpointerdown = (e) => {
      stars
        .get()
        .add(stars.get().create(100, e.clientX, e.clientY, randomInt(1, 8)));
    };
  }

  const self = {
    start,
  };

  return Object.freeze(self);
}
