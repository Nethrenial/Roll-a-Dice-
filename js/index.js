import "./components/index.js";
import "./initialize.js";
import { mouseClick } from "./sounds.js";
import {welcomeScreen} from './components/welcome-screen.js'

window.addEventListener("load", () => {
  welcomeScreen.scrollIntoView();
}
)

const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
  btn.addEventListener("mousedown", () => {
    mouseClick.currentTime = 0;
    mouseClick.volume = 0.5;
    mouseClick.play();
  });
});
