import {
  handleCarNamesSubmitButton,
  handleRacingCountSubmitButton,
} from './handlers.js';
import {
  hideRacingCountContainer,
  hideResultContainer,
} from './view/display.js';

export const state = {
  carArray: [],
};

const init = function () {
  // Selectors
  const carNamesButton = document.querySelector('#car-names-submit');
  const racingCountButton = document.querySelector('#racing-count-submit');

  // Functions
  hideRacingCountContainer();
  hideResultContainer();

  // EventListeners
  carNamesButton.addEventListener('click', (event) => {
    event.preventDefault();
    handleCarNamesSubmitButton();
  });

  racingCountButton.addEventListener('click', (event) => {
    event.preventDefault();
    handleRacingCountSubmitButton();
  });
};

init();
