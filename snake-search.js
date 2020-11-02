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

function countS(string) {
  return string.match(/s/g).length;
}

function main() {
  const regexQuotedDoubleS = /".*ss.*"/i;
  const spellingOriginal = document.querySelector('.js-spelling-recourse-link').text;
  const spellingCorrection = document.querySelector('.js-spelling-suggestion-link').text;

  const mistake = regexQuotedDoubleS.exec(spellingOriginal);
  const correction = spellingCorrection.slice(mistake.index).split(' ')[0];
  const mistakeNumS = countS(mistake[0]);
  const correctionNumS = countS(correction);

  const hasDoubleS = regexQuotedDoubleS.test(spellingOriginal);
  const typoHasMoreS = mistakeNumS > correctionNumS;
  if (hasDoubleS && typoHasMoreS) {
    insertSnake();
  }
}

main();
