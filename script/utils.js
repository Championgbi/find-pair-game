import { cardsArray } from "./data.js";

const setDifficult = (difficult) => {
  if (difficult === 8) {
    return cardsArray.slice(0, 4);
  } else if (difficult === 12) {
    return cardsArray.slice(0, 6);
  } else if (difficult === 16) {
    return cardsArray.slice(0, 8);
  } else {
    return cardsArray;
  }
};

const duplicatedArray = (array) =>
  array.reduce(function (res, current) {
    return res.concat([current, current]);
  }, []);

const sortedArray = (array) => array.sort(() => Math.random() - 0.5);

export { setDifficult, duplicatedArray, sortedArray };
