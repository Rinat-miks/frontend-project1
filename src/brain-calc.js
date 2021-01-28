/* eslint-disable import/extensions */
import engine from './index.js';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

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

const getAnswer = (operator, operand1, operand2) => {
  if (operator === '+') {
    return operand1 + operand2;
  }
  if (operator === '-') {
    return operand1 - operand2;
  }
  if (operator === '*') {
    return operand1 * operand2;
  }
};

const getQuestionAndAnswer = () => {
  const operand1 = getRandomInt(1, 100);
  const operand2 = getRandomInt(1, 100);
  const operator = getRandomMathOperation;
  const answer = getAnswer(operator, operand1, operand2);
  const question = `${operand1} ${operator} ${operand2}`;
  return [question, answer];
};

const playGame = () => engine(task, getQuestionAndAnswer);

export default playGame;