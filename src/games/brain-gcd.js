import engine from '../index.js';
import getRandomInt from '../lib/utils.js';

const task = 'Find the greatest common divisor of given numbers.';

const getGCD = (firstNumber, secondNumber) => {
  let a = firstNumber;
  let b = secondNumber;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a + b;
};

const getQuestionAndAnswer = () => {
  const firstNumber = getRandomInt(1, 100);
  const secondNumber = getRandomInt(1, 100);
  const answer = getGCD(firstNumber, secondNumber);
  const question = `${firstNumber} ${secondNumber}`;
  return [question, answer];
};

const playGame = () => engine(task, getQuestionAndAnswer);

export default playGame;
