import { makeNewCars } from './game-utils.js';
import { validatedCarNames, validateRacingCount } from './validator.js';
import {
  appendResultSpanElement,
  showRacingCountDiv,
  showResultDiv,
} from './view/display.js';
import {
  getCarNamesInput,
  getRacingCountInput,
} from './view/get-user-input.js';
import { printGameResult } from './view/print-result.js';

export const handleCarNamesSubmitButton = function () {
  const carNamesInputValue = getCarNamesInput();
  const carNamesArray = carNamesInputValue.split(',');

  if (validatedCarNames(carNamesArray)) {
    makeNewCars(carNamesArray);
    showRacingCountDiv();
  }

  return true;
};

export const handleRacingCountSubmitButton = function () {
  const racingCount = getRacingCountInput();

  if (validateRacingCount(racingCount)) {
    showResultDiv();
    appendResultSpanElement();
    printGameResult(racingCount);
  }
};
