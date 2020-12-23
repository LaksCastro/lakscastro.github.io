import * as utils from "./utils";

export default function Logic() {
  const stateManager = this;

  const constants = stateManager.getInstance("constants");
  const particleColor = constants.get().get().color;

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

      const rgb =
        utils.isRgba(particleColor) || utils.isRgb(particleColor)
          ? utils.splitRgbColors(particleColor)
          : utils.hexToRgb(particleColor);

      const colorWith = (opacity) =>
        `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${
          (star.brightness / 100) * opacity
        })`;

      const shadowLength = 1;
      const gradualBrightnessLost = 0.2;
      const shadowPositionLost = 10;

      const fills = Array.from({ length: shadowLength }).map((_, i) =>
        colorWith(1 - i * gradualBrightnessLost)
      );

      fills.forEach((fill, i) => {
        ctx.beginPath();

        const lost = i * shadowPositionLost;

        ctx.fillStyle = fill;
        ctx.rect(
          star.position.x + lost,
          star.position.y + lost,
          star.size,
          star.size
        );

        ctx.fill();
      });
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

        const randomX = utils.randomInt(0, 10) <= 9;

        const velocity = utils.randomInt(1, 8);

        if (randomX) {
          stars
            .get()
            .set(
              i,
              stars
                .get()
                .create(
                  utils.randomInt(80, 100),
                  utils.randomInt(0, constraints.width),
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
                  utils.randomInt(80, 100),
                  constraints.width,
                  utils.randomInt(0, constraints.height),
                  velocity
                )
            );
        }
      } else {
        const {
          position: { x, y },
          brightness,
        } = star;

        const newBrightness = brightness - utils.randomInt(100, 1000) / 1000;

        const newSize = star.size - utils.randomInt(5, 10) / 100;

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
