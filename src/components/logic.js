import { randomInt } from "./utils";

export default function Logic() {
  const stateManager = this;

  const constants = stateManager.getInstance("constants");

  function init() {
    updateStars();
    drawStars();
  }

  function update() {
    clearStars();
    drawStars();
    updateStars();
  }

  function drawStars() {
    const stars = stateManager.getInstance("stars");
    const ctx = stateManager.getInstance("canvas").get().getCtx();

    for (const star of stars.get().get()) {
      if (!star) continue;

      ctx.beginPath();

      ctx.fillStyle = `rgba(208, 72, 12, ${star.brightness / 100})`;
      ctx.rect(star.position.x, star.position.y, star.size, star.size);

      ctx.fill();
    }
  }

  function clearStars() {
    const viewport = stateManager.getInstance("viewport");
    const constraints = viewport.get().getConstraints();
    const ctx = stateManager.getInstance("canvas").get().getCtx();

    ctx.clearRect(0, 0, constraints.width, constraints.height);
  }

  function updateStars() {
    const viewport = stateManager.getInstance("viewport");
    const stars = stateManager.getInstance("stars");

    const constraints = viewport.get().getConstraints();

    for (let i = 0; i < stars.get().get().length; i++) {
      const star = stars.get().get()[i];

      if (star === undefined) {
        if (stars.get().get().length > constants.get().get().maxCount) {
          stars.get().clear();
          return;
        }

        const randomX = randomInt(0, 10) <= 9;

        const velocity = randomInt(1, 8);

        if (randomX) {
          stars
            .get()
            .set(
              i,
              stars
                .get()
                .create(
                  randomInt(80, 100),
                  randomInt(0, constraints.width),
                  constraints.height,
                  velocity
                )
            );
        } else {
          stars
            .get()
            .set(
              i,
              stars
                .get()
                .create(
                  randomInt(80, 100),
                  constraints.width,
                  randomInt(0, constraints.height),
                  velocity
                )
            );
        }
      } else {
        const {
          position: { x, y },
          brightness,
        } = star;

        const newBrightness = brightness - randomInt(100, 1000) / 1000;

        const newSize = star.size - randomInt(5, 10) / 100;

        if (x + star.size < 0 || y + star.size < 0 || newSize <= 0) {
          stars.get().set(i, undefined);
        } else {
          stars
            .get()
            .set(
              i,
              stars
                .get()
                .create(
                  newBrightness,
                  x + -star.velocity / 3,
                  y + -star.velocity,
                  star.velocity,
                  newSize
                )
            );
        }
      }
    }
  }

  const self = {
    init,
    update,
  };

  return Object.freeze(self);
}
