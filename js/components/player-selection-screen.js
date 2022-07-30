import { gameState } from "../game_state.js";
import { welcomeScreen } from "./welcome-screen.js";
import {
  gameScreen,
  playerName1,
  playerName2,
  roundEl,
} from "./game-screen.js";
import { setRandomTurn } from "../utils.js";

export const playerSelectionScreen = document.querySelector(
  ".player-selection-screen"
);
const playerSelectButton = document.getElementById("player-select-btn");
export const player1Input = document.getElementById("player1-name");
export const player2Input = document.getElementById("player2-name");
const backToWelcomeScreenBtns = document.querySelectorAll(".back-to-welcome");

playerSelectButton.addEventListener("click", () => {
  gameState.player1.name = player1Input.value || "Player 1";
  gameState.player2.name = player2Input.value || "Player 2";
  gameState.stage = "game";
  roundEl.innerHTML = `Round ${gameState.round}`;

  playerName1.innerHTML = gameState.player1.name;
  playerName2.innerHTML = gameState.player2.name;
  setRandomTurn();
  gameScreen.scrollIntoView({ behavior: "smooth" });
});

backToWelcomeScreenBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    gameState.stage = "welcome";
    gameState.player1.name = "";
    gameState.player2.name = "";
    player1Input.value = "";
    player2Input.value = "";
    welcomeScreen.scrollIntoView({ behavior: "smooth" });
  });
});
