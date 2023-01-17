import readlineSync from 'readline-sync';

function randomInteger() {
  const rand = Math.random() * 100;
  return Math.floor(rand);
}

function isEven(num) {
  return num % 2 === 0;
}

function startGame() {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i++) {
    const number = randomInteger();
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');

    if ((isEven(number) && answer === 'yes') || (!isEven(number) && answer === 'no')) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was 'no'`);
      сonsole.log(`Let's try again, ${userName}`);
    }
  }

  console.log(`Congratulations, ${userName}!`);
}
startGame();
