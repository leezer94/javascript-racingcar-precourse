import {
  MAX_NUMBER,
  MIN_NUMBER,
  POSITION_CONDITION_NUMBER,
} from './constants.js';
import { state } from './index.js';

export const makeNewCars = function (carNamesArray) {
  carNamesArray.forEach((name) => state.carArray.push(new carNamesArray(name)));
};

export const generateRandomNumber = function () {
  const randomNumber = MissionUtils.Random.pickNumberInRange(
    MIN_NUMBER,
    MAX_NUMBER
  );

  return randomNumber;
};

export const addRandomPosition = function (racingCount) {
  for (let i = 0; i < racingCount; i++) {
    for (let j = 0; j < state.carArray.length; j++) {
      state.carArray[j].position.push(getRandomNumber());
    }
  }
};

const filterPosition = function () {
  for (let i = 0; i < state.carArray.length; i++) {
    state.carArray[i].position = state.carArray[i].position.filter(
      (number) => number >= POSITION_CONDITION_NUMBER
    );
  }
};

const getWinnerPosition = function () {
  filterPosition();
  let winnerPosition = [];
  for (const car of state.carArray) {
    winnerPosition.push(car.position.length);
  }

  return Math.max(...winnerPosition);
};
