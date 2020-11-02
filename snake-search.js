// Credit for snake image: Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

function insertSnake() {
  const snakeImage = document.createElement('img');
  const imgUrl = browser.runtime.getURL('snake.png');
  const imgSize = '100';
  snakeImage.setAttribute('src', imgUrl);
  snakeImage.setAttribute('height', imgSize);
  snakeImage.setAttribute('width', imgSize);
  snakeImage.setAttribute('style', 'display: block; margin-left: 30%;');

  const spellingCorrection = document.querySelector('#did_you_mean');
  spellingCorrection.appendChild(snakeImage);
}

function main() {
  const regexQuotedDoubleS = /".*ss.*"/i;
  const spellingCorrection = document.querySelector('.js-spelling-recourse-link');

  if (regexQuotedDoubleS.test(spellingCorrection.text)) {
    insertSnake();
  }
}

main();
