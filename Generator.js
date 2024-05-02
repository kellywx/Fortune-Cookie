//reads the Fortune Cookie Sayings.txt file and makes an array
const fs = require('fs');
const text = fs.readFileSync('./Fortune Cookie Sayings.txt').toString('utf-8');
let textByLine = text.split('\n');
const messages = textByLine.map( val => val.replace(/\r$/, ''));

//random list of lucky numbers
const numberGenerator = () => {
    const luckyNumbers = [];

    while (luckyNumbers.length < 6) {
        let randomNumber = Math.floor(Math.random() * 100);

        luckyNumbers.push(randomNumber);
    }

    return luckyNumbers;
}


//picks a random message from the list of messages
const message = (messages) => {
    const random = Math.floor(Math.random() * 12);
    return messages [random];
}

const messageGenerator = () => {
    const luckyMessage = message(messages);
    const luckyNumber = numberGenerator();
    console.log(`Your Fortune is: ${luckyMessage}`);
    console.log(`Your lucky numbers are ${luckyNumber}`);
}

messageGenerator();