import Canvas from "./components/canvas";
import Viewport from "./components/viewport";
import Animation from "./components/animation";
import Constants from "./components/constants";
import StateManager from "./components/stateManager";
import Stars from "./components/stars";

import * as utils from "./components/utils";

window.addEventListener("DOMContentLoaded", function () {
  window.onclick = () => document.querySelector("audio").play();

  fetchData();
});

async function fetchData() {
  const { innerWidth } = window;

  const repo = "lakscastro.github.io";
  const username = "LaksCastro";

  const endpoint = `https://raw.githubusercontent.com/${username}/${repo}/develop/metadata.json`;

  const response = await fetch(endpoint);

  const data = await response.json();

  const headerText = document.querySelector(".header-text");
  const mainText = document.querySelector(".main-text");
  const footerText = document.querySelector(".footer-text");
  const loading = document.querySelector(".loading");
  src = "../src/assets/The Afterlife - PinOut OST.mp3";
  headerText.textContent = data.ocupation;
  mainText.textContent = data.title;
  footerText.textContent = data.bio;

  const particlesColor = data.particles.color;
  const songName = data.song.file;

  setMusic(songName);
  setFireColor(particlesColor);
  setCssVariables(particlesColor);

  enableBackground("#a", 12, innerWidth / 50, particlesColor);
  enableBackground("#b", 26, 2, particlesColor);
  enableBackground("#c", 4, innerWidth / 20, particlesColor);

  loading.classList.remove("visible");
  loading.classList.add("hidden");
}

function setMusic(songName) {
  const songPath =
    "https://github.com/LaksCastro/lakscastro.github.io/raw/develop/src/assets/music/";

  const audioPlayer = document.querySelector("#music");

  audioPlayer.setAttribute("src", songPath + songName);
}

function getRgbaFromAny(color, alpha) {
  function getRgbaFromRgb(rgb) {
    const { r, g, b } = utils.splitRgbColors(rgb);

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  const result = utils.isRgba(color)
    ? color
    : utils.isRgb(color)
    ? getRgbaFromRgb(color)
    : (() => {
        const parsed = utils.hexToRgb(color);

        return getRgbaFromRgb(`rgb(${parsed.r}, ${parsed.g}, ${parsed.b})`);
      })();

  return result;
}

function setFireColor(color) {
  const defaultAlpha = 0.5;

  const finalColor = getRgbaFromAny(color, defaultAlpha);

  const fire = document.getElementById("fire");

  fire.style.background = `linear-gradient(to top, ${finalColor}, transparent)`;
}

function setCssVariables(color) {
  const rgb =
    utils.isRgba(color) || utils.isRgb(color)
      ? utils.splitRgbColors(color)
      : (() => {
          const parsed = utils.hexToRgb(color);

          return parsed;
        })();

  const hsl = utils.rgbToHsl(rgb.r, rgb.g, rgb.b);

  const titleColor = { ...hsl, l: 90 };
  const textColor = { ...hsl, l: 85 };

  const newRgb = utils.hslToRgb(hsl.h, hsl.s, 85);

  document.documentElement.style.setProperty(
    "--title-color",
    `hsl(${titleColor.h}, ${titleColor.s}%, ${titleColor.l}%)`
  );
  document.documentElement.style.setProperty(
    "--text-color",
    `hsl(${textColor.h}, ${textColor.s}%, ${textColor.l}%)`
  );
  document.documentElement.style.setProperty(
    "--light-text-color",
    `rgba(${newRgb.r}, ${newRgb.g}, ${newRgb.b}, 0.5)`
  );
}

function enableBackground(selector, size, maxCount, color) {
  let context;

  const stateManager = StateManager();
  stateManager.createInstance("viewport", Viewport(selector));
  stateManager.createInstance("constants", Constants(size, maxCount, color));

  context = stateManager;

  stateManager.createInstance("canvas", Canvas.apply(context, [selector]));
  stateManager.createInstance("stars", Stars.apply(context));

  context = stateManager;

  const animation = Animation.apply(context);
  animation.start();
}
