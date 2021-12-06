const racingCountText = document.querySelector('#try-count');
const racingCountInput = document.querySelector('#racing-count-form input');
const racingCountBtn = document.querySelector('#racing-count-form button');
const result = document.querySelector('#result');

export const hideRacingCountContainer = function () {
  racingCountText.hidden = true;
  racingCountInput.hidden = true;
  racingCountBtn.hidden = true;
};

export const hideResultContainer = function () {
  result.hidden = true;
};
