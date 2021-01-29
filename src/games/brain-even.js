import engine from '../index.js';
import getRandomInt from '../lib/utils.js';

const isEven = (number) => (number % 2 === 0);

const task = 'What is the result of the expression?';

const getQuestionAndAnswer = () => {
  const question = getRandomInt(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const playGame = () => engine(task, getQuestionAndAnswer);

export default playGame;
