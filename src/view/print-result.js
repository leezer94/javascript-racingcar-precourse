import { state } from '..';
import { LINE_BREAK, POSITION_CONDITION_NUMBER } from '../constants';
import { addRandomPosition } from '../game-utils';

export const printGameResult = function (racingCount) {
  addRandomPosition(racingCount);
  const resultSpan = document.querySelector('#result-span');

  for (let i = 1; i < i <= racingCount; i++) {
    for (const car of state.carArray) {
      resultSpan.innerHTML += `${LINE_BREAK} ${car.name}: `;
      printPostions(car, i);
    }
    resultSpan.innerHTML += `${LINE_BREAK}`;
  }
};

const printPostions = function (car, round) {
  const resultSpan = document.querySelector('#result-span');

  for (let j = 0; j < round; j++) {
    if (car.position[j] >= POSITION_CONDITION_NUMBER) {
      resultSpan.innerHTML += '-';
    } else {
      resultSpan.innerHTML += '';
    }
  }
};
