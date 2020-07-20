import Canvas from "./components/canvas";
import Viewport from "./components/viewport";
import Animation from "./components/animation";
import Constants from "./components/constants";
import StateManager from "./components/stateManager";
import Stars from "./components/stars";

window.addEventListener("DOMContentLoaded", function () {
  const { innerWidth } = window;

  enableBackground("#a", 12, innerWidth / 50);
  enableBackground("#b", 26, 2);
  enableBackground("#c", 4, innerWidth / 20);
});

function enableBackground(selector, size, maxCount) {
  let context;

  const stateManager = StateManager();
  stateManager.createInstance("viewport", Viewport(selector));
  stateManager.createInstance("constants", Constants(size, maxCount));

  context = stateManager;

  stateManager.createInstance("canvas", Canvas.apply(context, [selector]));
  stateManager.createInstance("stars", Stars.apply(context));

  context = stateManager;

  const animation = Animation.apply(context);
  animation.start();
}
