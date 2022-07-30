import { gameState } from "../game_state.js";
import { setRandomTurn } from "../utils.js";
import {
  gameScreen,
  roundEl,
  scoreElements,
  playerName1,
  playerName2,
  turnEl,
} from "./game-screen.js";
import { welcomeScreen } from "./welcome-screen.js";
import { player1Input, player2Input } from "./player-selection-screen.js";

const playAgainButton = document.getElementById("play-again");
const homeButton = document.getElementById("home");
export const winScreen = document.querySelector(".win-screen");
export const winnerEl = document.querySelector(".win-screen-container > h1");
export const winnerScore = document.getElementById("winner-score");
export const loserScore = document.getElementById("loser-score");

playAgainButton.addEventListener("click", () => {
  gameState.stage = "game";

  setRandomTurn();
  gameState.round = 1;
  roundEl.innerHTML = `Round ${gameState.round}`;
  gameState.player1.score = 0;
  gameState.player2.score = 0;
  scoreElements["player1"].innerHTML = gameState.player1.score;
  scoreElements["player2"].innerHTML = gameState.player2.score;
  winnerEl.innerHTML = "";
  winnerScore.innerHTML = "";
  loserScore.innerHTML = "";

  gameScreen.scrollIntoView({ behavior: "smooth" });
});

homeButton.addEventListener("click", () => {
  gameState.stage = "welcome";
  gameState.player1.name = "";
  gameState.player2.name = "";
  gameState.player1.turn = false;
  gameState.player2.turn = false;

  setRandomTurn();
  gameState.round = 1;
  roundEl.innerHTML = `Round ${gameState.round}`;
  gameState.player1.score = 0;
  gameState.player2.score = 0;
  scoreElements["player1"].innerHTML = gameState.player1.score;
  scoreElements["player2"].innerHTML = gameState.player2.score;
  winnerEl.innerHTML = "";
  winnerScore.innerHTML = "";
  loserScore.innerHTML = "";

  playerName1.innerHTML = "Player 1";
  playerName2.innerHTML = "Player 2";
  turnEl.innerHTML = "";
  player1Input.value = "";
  player2Input.value = "";
  welcomeScreen.scrollIntoView();
});
