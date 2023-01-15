import readlineSync from 'readline-sync';

export function meeting () {
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`)
}