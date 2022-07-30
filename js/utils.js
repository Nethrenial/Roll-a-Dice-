import { diceImgs,  turnEl } from "./components/index.js";
import { gameState } from "./game_state.js";

export function getRandomTwoDices() {
  return [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1];
}

export function setRandomTurn() {
  const [dice1, dice2] = getRandomTwoDices();
  diceImgs.forEach((img, index) => {
    img.setAttribute("src", `./img/dice_${index === 0 ? dice1 : dice2}.png`);
  });

  gameState.player1.turn = false;
  gameState.player2.turn = false;
  const turn = Math.floor(Math.random() * 2) + 1;
  turn === 1
    ? (gameState.player1.turn = true)
    : (gameState.player2.turn = true);

  turnEl.innerHTML = `${
    gameState.player1.turn ? gameState.player1.name : gameState.player2.name
  }'s turn`;
}