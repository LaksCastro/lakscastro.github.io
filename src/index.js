window.addEventListener("DOMContentLoaded", function () {
  // =========================================================================
  // ==============================IMPORTANTE=================================
  // O CÓDIGO ESTÁ DESORGANIZADO E AINDA ESTÁ FUNCIONANDO NA "GAMBIARRA"
  // EM BREVE SERÁ REFATORADO E ORGANIZADO EM DIFERENTES ARQUIVOS
  // ==============================IMPORTANTE=================================
  // =========================================================================

  const stars = Array.from({ length: 10 });

  const size = 8;

  function defineStar(brightness, x, y, velocity) {
    const position = { x, y };

    return {
      brightness,
      position,
      velocity,
    };
  }

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function Viewport() {
    function getConstraints() {
      const { innerWidth: width, innerHeight: height } = window;

      return {
        width,
        height,
      };
    }

    const self = {
      getConstraints,
    };

    return Object.freeze(self);
  }

  function Canvas(id) {
    function getNode() {
      return document.getElementById(id);
    }

    function getCtx() {
      return getNode().getContext("2d");
    }

    function define() {
      const constraints = Viewport().getConstraints();

      const node = getNode();

      node.width = constraints.width;
      node.height = constraints.height;
    }

    const self = {
      define,
      getCtx,
    };

    return Object.freeze(self);
  }

  function RequestFrameRate(callback) {
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

  function Engine() {
    const frameRate = RequestFrameRate(update);
    const ctx = Canvas("background").getCtx();

    function update() {
      const constraints = Viewport().getConstraints();

      ctx.clearRect(0, 0, constraints.width, constraints.height);
      for (const star of stars) {
        if (!star) continue;

        ctx.beginPath();
        ctx.fillStyle = `rgba(77, 43, 137, ${star.brightness / 100})`;
        ctx.rect(star.position.x, star.position.y, size, size);
        ctx.fill();
      }
      updateStars();
    }

    function updateStars() {
      const constraints = Viewport().getConstraints();

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        if (star === undefined) {
          const randomX = randomInt(0, 1) === 1;

          const velocity = randomInt(1, 8);

          if (randomX) {
            stars[i] = defineStar(
              randomInt(80, 100),
              randomInt(0, constraints.width),
              constraints.height,
              velocity
            );
          } else {
            stars[i] = defineStar(
              100,
              constraints.width,
              randomInt(0, constraints.height),
              velocity
            );
          }
        } else {
          const {
            position: { x, y },
            brightness,
          } = star;

          const newBrightness = brightness - randomInt(100, 1000) / 1000;

          if (x + size < 0 || y + size < 0) {
            stars[i] = undefined;
          } else {
            stars[i] = defineStar(
              newBrightness,
              x + -star.velocity / 3,
              y + -star.velocity,
              star.velocity
            );
          }
        }
      }
    }

    function start() {
      frameRate.start();
    }

    const self = {
      start,
    };

    return Object.freeze(self);
  }

  function Animation() {
    function start() {
      Canvas("background").define();
      Engine().start();
    }

    const self = {
      start,
    };

    return Object.freeze(self);
  }

  const background = Animation();
  background.start();

  window.onresize = () => Canvas("background").define();
});
