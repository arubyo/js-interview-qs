import randomWords from 'random-words';

console.log(randomWords(5));

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

console.log(longest(randomStrings));
