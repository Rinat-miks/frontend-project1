/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';

export default (gameTask, game) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${playerName}`);
  console.log(gameTask);
  const countOfGames = 3;
  for (let i = 0; i < countOfGames; i += 1) {
    const [question, correctAnswer] = game();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === String(correctAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${playerName}!`);
      return false;
    }
  }
  console.log(`Congatulations, ${playerName}`);
  return true;
};
