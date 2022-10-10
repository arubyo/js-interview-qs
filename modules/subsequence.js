import findNextIndex from './findNextIndex.js';

function isSubsequence(word, map) {

let minIndex = 0;

    for (let letter of word) {
    if(map[letter]) {
        minIndex = findNextIndex(map[letter], minIndex)
  if(minIndex === false) {
    return false
  }
    } else{
      return false
    }
    } return true; 
  }


export default isSubsequence;