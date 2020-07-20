export default function Viewport(selector) {
  const getCurrentConstraints =
    selector === "window" ? getWindowConstraints : getNodeConstraints;

  function getWindowConstraints() {
    const { innerWidth: width, innerHeight: height } = window;

    return {
      width,
      height,
    };
  }

  function getNodeConstraints() {
    const { width, height } = document
      .querySelector(selector)
      .getBoundingClientRect();

    return {
      width,
      height,
    };
  }

  function getConstraints() {
    const { width, height } = getCurrentConstraints();

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
