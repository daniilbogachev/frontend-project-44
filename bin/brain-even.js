import readlineSync from 'readline-sync';
function randomInteger() {
    let rand = Math.random() * 100;
    return Math.floor(rand);
}

function startGame() {
    console.log('Welcome to the Brain Games!')
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`)
    console.log('Answer "yes" if the number is even, otherwise answer "no".')
    for (let i = 0; i < 3; i++){
        const number = randomInteger()
        console.log(`Question: ${number}`)
        const answer = readlineSync.question('Your answer: ');
        if (number % 2 === 0) {
            if (answer === 'yes') {
                console.log('Correct!')
            }else{
                console.log(`'yes' is wrong answer ;(. Correct answer was 'yes'./n
                Let's try again, ${userName}`)
                return;
            }
        }else{
            if (answer === 'no'){
                console.log('Correct!')
            }else{
                console.log(`'yes' is wrong answer ;(. Correct answer was 'no'./n
                Let's try again, ${userName}`)
                return;
            }
        }
    }
    console.log(`Congratulations, ${userName}!`);
}
startGame()