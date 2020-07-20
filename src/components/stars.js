import { randomInt } from "./utils";

export default function Stars() {
  const stateManager = this;

  const constants = stateManager.getInstance("constants");

  let stars = Array.from({ length: constants.get().get().maxCount });

  function create(
    brightness,
    x,
    y,
    velocity,
    size = constants.get().get().size
  ) {
    const position = { x, y };

    if (!size) {
      const { size: constantSize } = constants.get().get();
      size = randomInt(
        constantSize - constantSize / 3,
        constantSize + constantSize / 3
      );
    }

    return {
      brightness,
      position,
      velocity,
      size,
    };
  }

  function get() {
    return stars;
  }

  function set(i, newStar) {
    stars[i] = newStar;
  }

  function add(newStar) {
    stars.push(newStar);
  }

  function clear() {
    stars = stars.filter((s) => !!s);
  }

  const self = {
    create,
    get,
    set,
    add,
    clear,
  };

  return Object.freeze(self);
}
