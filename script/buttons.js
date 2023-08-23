import { startGame } from "./startGame.js";

const startMenu = () => {
  const gameMenu = document.querySelector(".game-menu");
  const cardsTable = document.querySelector(".cards-table");
  const title = document.createElement("h2");
  const gameType = document.createElement("div");
  gameType.classList.add("game-type");
  title.textContent = "Выберете сложность";

  cardsTable.innerHTML = "";

  const createButton = (type) => {
    const button = document.createElement("button");
    button.classList.add("button", "game-type-button");
    button.textContent = `${type} карт`;

    button.addEventListener("click", () => startGame(type));
    return button;
  };

  gameMenu.append(gameType, title);
  gameType.append(
    createButton(8),
    createButton(12),
    createButton(16),
    createButton(20)
  );
};

export { startMenu };
