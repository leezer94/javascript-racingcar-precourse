import { makeNewCars } from '../utils/game-utils.js';
import { validatedCarNames, validateRacingCount } from '../utils/validator.js';
import {
  appendRacingWinnerSpanElement,
  appendResultSpanElement,
  showRacingCountDiv,
  showResultDiv,
} from '../view/display.js';
import {
  getCarNamesInput,
  getRacingCountInput,
} from '../utils/get-user-input.js';
import { printFinalWinner, printGameResult } from '../view/print-result.js';

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
    appendRacingWinnerSpanElement();
    printFinalWinner();
  }
};
