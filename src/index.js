import {
  hideRacingCountContainer,
  hideResultContainer,
} from './view/display.js';

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
  });

  racingCountButton.addEventListener('click', (event) => {
    event.preventDefault();
  });
};

init();
