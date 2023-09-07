const fortuneTellers = [
    "You are having good luck!", 
    "You should trust noone!", 
    "One day you will be rich!",
    "You should take vacation right now and rest a bit!",
    "Your bigest dream comes true!"
];
const inspiringPhrases = [
    "\"All our dreams can come true, if we have the courage to pursue them.\" - Walt Disney",
    "\"The secret of getting ahead is getting started.\" — Mark Twain",
    "\"The best time to plant a tree was 20 years ago. The second best time is now.\" ― Chinese Proverb",
    "\"If people are doubting how far you can go, go so far that you can\'t hear them anymore.\" — Michele Ruiz",
    "\"Everything you can imagine is real.\" ― Pablo Picasso"
];

const prompt = require('prompt-sync')();
const name = prompt('What is your name? ');

console.log(`Hey there ${name}`);
console.log(`${name} please chose: 1: A fortune teller or 2: An inspiring phrase.`)
const choice = prompt();

if(choice === '1') {
    console.log(`OK ${name} I'll tell you now a fortune teller. Hahaha.`);
    console.log(fortuneTellers[Math.floor(Math.random() * 5)]);
} else if (choice === '2') {
    console.log(`OK ${name} I'll tell you now an inspiring phrase for today!`)
    console.log(inspiringPhrases[Math.floor(Math.random() * 5)]);
} else {
    console.log("Please press 1 or 2!");
}

