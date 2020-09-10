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

  fetchData();
});

async function fetchData() {
  const repo = "lakscastro.github.io";
  const username = "LaksCastro";

  const endpoint = `https://raw.githubusercontent.com/${username}/${repo}/develop/metadata.json`;

  const response = await fetch(endpoint);

  const data = await response.json();

  const headerText = document.querySelector(".header-text");
  const mainText = document.querySelector(".main-text");
  const footerText = document.querySelector(".footer-text");
  const loading = document.querySelector(".loading");

  headerText.textContent = data.ocupation;
  mainText.textContent = data.title;
  footerText.textContent = data.bio;

  loading.classList.remove("visible");
  loading.classList.add("hidden");
}

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
