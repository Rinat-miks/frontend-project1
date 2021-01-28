/* eslint-disable import/extensions */
import engine from './index.js';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const task = 'Find the greatest common divisor of given numbers.';

const getGCD = (firstNumber, secondNumber) => {
  while (firstNumber !== 0 && secondNumber !== 0) {
    if (firstNumber > secondNumber) {
      firstNumber %= secondNumber;
    } else {
      secondNumber %= firstNumber;
    }
  }
  return firstNumber + secondNumber;
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
