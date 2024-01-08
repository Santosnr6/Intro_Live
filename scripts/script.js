'use strict';

console.log('Hello world!');

let startWord = 'FOUR';
let endWord = 'FIVE';
let isInputApproved = false;
let counter = 0;
let dictionary = ['FOUR', 'FOUL', 'FOOL', 'FOOT', 'FORT', 'FORE', 'FIRE', 'FIVE'];

while(startWord !== endWord) {
    while(!isInputApproved) {
        let newWord = window.prompt('Nuvarande ord: ' + startWord +
                                    '. Antal gissningar: ' + counter +
                                    '. Vänligen ange det nya ordet!');
        if(newWord.length !== endWord.length) {
            window.alert('Ditt ord måste innehålla lika många bokstäver som startordet, dumbass!');
        } else if(!dictionary.includes(newWord)) {
            window.alert('Ordet finns för tusan inte i ordlistan, pucko!');
        } else if(!isOneLetterApart(newWord, startWord)) {
            window.alert('Du får bara byta ut en bokstav!');
        } else {
            isInputApproved = true;
            startWord = newWord;
            counter++;
        }
    }
    isInputApproved = false;
}

function isOneLetterApart(newWord, startWord) {
    let diffCount = 0;
    
    for(let i = 0; i < startWord.length; i++) {
        if(newWord[i] !== startWord[i]) {
            diffCount++;
            //diffCount = diffCount + sum;
            //diffCount += 1;
        }
    }
    return diffCount === 1; // Sant om diffCount är 1, annars falskt
}

console.log('Grattis du "vann"! WOHO!');
console.log("Grattis du vann med dubbelfnuttar!");
console.log(`Grattis du vann med backticks! Antal gissningar var ${counter}, bra krigat kompis!`);