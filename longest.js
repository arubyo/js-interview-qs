import randomWords from 'random-words';
import mappedString from './modules/mapped.js';
import compareLetters from './modules/compareLetters.js'



function longest(array) {
    let longestWord = '';
    for (let index = 0; index < array.length; index++) {
        if(array[index].length > longestWord.length) {
            longestWord = array[index];
        }
        
    }
    return longestWord; 
}

export default longest;