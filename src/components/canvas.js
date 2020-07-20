export default function Canvas(selector) {
  const stateManager = this;

  const viewport = stateManager.getInstance("viewport");

  function getNode() {
    return document.querySelector(selector);
  }

  function getCtx() {
    return getNode().getContext("2d");
  }

  function define() {
    const constraints = viewport.get().getConstraints();

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
