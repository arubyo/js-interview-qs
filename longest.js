import randomWords from 'random-words';
import mappedString from './modules/mapped.js';
import compareLetters from './modules/compareLetters.js'

let randomStrings = randomWords(5);
console.log(randomStrings);

function longest(array) {
    let longestWord = '';
    for (let index = 0; index < array.length; index++) {
        if(array[index].length > longestWord.length) {
            longestWord = array[index];
        }
        
    }
    return longestWord; 
}

let chosenWord = longest(randomStrings)
console.log(chosenWord);


let mapped = mappedString(chosenWord)
console.log(mapped);



let newWord = 'ban';

console.log(compareLetters(newWord, mapped))