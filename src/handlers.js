import { validatedCarNames } from './validator.js';
import { showRacingCountDiv } from './view/display.js';
import { getCarNamesInput } from './view/get-user-input.js';

export const handleCarNamesSubmitButton = function () {
  const carNamesInputValue = getCarNamesInput();
  const carNamesArray = carNamesInputValue.split(',');

  if (validatedCarNames(carNamesArray)) {
    showRacingCountDiv();
  }

  return true;
};
