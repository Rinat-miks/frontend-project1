import engine from '../index.js';
import getRandomInt from '../lib/utils.js';

const task = 'What number is missing in the progression?';

const getProgression = () => {
  const countOfProgression = 10;
  const firstNumberOfProgression = getRandomInt(1, 10);
  const progression = [firstNumberOfProgression];
  const progressionOperand = getRandomInt(1, 10);
  for (let i = 0; i < countOfProgression - 1; i += 1) {
    progression.push(progression[i] + progressionOperand);
  }
  return progression;
};

const getQuestionAndAnswer = () => {
  const missingNumberIndex = getRandomInt(0, 9);
  const progression = getProgression();
  const answer = progression[missingNumberIndex];
  const question = `${progression.slice(0, missingNumberIndex).join(' ')} .. ${progression.slice(missingNumberIndex + 1).join(' ')}`;
  return [question, answer];
};

const playGame = () => engine(task, getQuestionAndAnswer);

export default playGame;
