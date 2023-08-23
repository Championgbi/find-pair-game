import { setDifficult, duplicatedArray, sortedArray } from "./utils.js";
import { cardToHtml } from "./createCard.js";
import { startMenu } from "./buttons.js";

const startGame = (type) => {
  const cardsTable = document.querySelector(".cards-table");
  const cardsList = document.createElement("ul");
  cardsList.classList.add("cards-list");
  cardsTable.append(cardsList);
  const restartButton = document.createElement("button");
  restartButton.classList.add("button", "restartBtn");
  restartButton.textContent = "Начать заново";
  cardsTable.append(restartButton);

  const gameMenu = document.querySelector(".game-menu");

  let clickable = true;
  let firstCard = null;
  let secondCard = null;

  const getDuplicatedArray = duplicatedArray(setDifficult(type));
  const getSortedArray = sortedArray(getDuplicatedArray);

  gameMenu.innerHTML = "";

  const render = (cards) => {
    const b = cards.map(cardToHtml).join("");
    cardsList.innerHTML = b;
  };

  render(getSortedArray);
  const cards = document.querySelectorAll(".card");

  restartButton.addEventListener("click", startMenu);

  cards.forEach((card, index) => {
    card.addEventListener("click", () => {
      if (clickable == true && !card.classList.contains("success")) {
        card.classList.add("card-back-side");

        if (firstCard == null) {
          firstCard = index;
        } else if (index != firstCard) {
          secondCard = index;
          clickable = false;
        }
      }
      if (firstCard != null && secondCard != null && firstCard != secondCard) {
        if (
          cards[firstCard].dataset.number === cards[secondCard].dataset.number
        ) {
          setTimeout(() => {
            cards[firstCard].classList.add("success");
            cards[secondCard].classList.add("success");

            clickable = true;
            firstCard = null;
            secondCard = null;
          }, 500);
        } else {
          setTimeout(() => {
            cards[firstCard].classList.remove("card-back-side");
            cards[secondCard].classList.remove("card-back-side");

            clickable = true;
            firstCard = null;
            secondCard = null;
          }, 800);
        }
      }
      const cardsArray = Array.from(cards);

      if (
        cardsArray.every((card) => card.className.includes("card-back-side"))
      ) {
        setTimeout(() => {
          cardsList.innerHTML = "";
          const winner = document.createElement("div");
          winner.classList.add("winner");

          cardsTable.append(winner);
        }, 1000);
      }
    });
  });
};
export { startGame };
