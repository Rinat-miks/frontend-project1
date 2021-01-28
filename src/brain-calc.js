/* eslint-disable import/extensions */
import engine from './index.js';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const task = 'What is the result of the expression?';

const getRandomMathOperation = () => {
  const randomNumber = getRandomInt(1, 4);
  if (randomNumber === 1) {
    return '+';
  }
  if (randomNumber === 2) {
    return '-';
  }
  if (randomNumber === 3) {
    return '*';
  }
};

const getAnswer = (operator, firstOperand, secondOperand) => {
  if (operator === '+') {
    return firstOperand + secondOperand;
  }
  if (operator === '-') {
    return firstOperand - secondOperand;
  }
  if (operator === '*') {
    return firstOperand * secondOperand;
  }
};

const getQuestionAndAnswer = () => {
  const firstOperand = getRandomInt(1, 100);
  const secondOperand = getRandomInt(1, 100);
  const operator = getRandomMathOperation;
  const answer = getAnswer(operator, firstOperand, secondOperand);
  const question = `${firstOperand} ${operator} ${secondOperand}`;
  return [question, answer];
};

const playGame = () => engine(task, getQuestionAndAnswer);

export default playGame;
