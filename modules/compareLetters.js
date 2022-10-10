

function compareLetters(word, object) {
  for (const iterator of word) {
  if(object[iterator]) {

  } else{
    return false
  }
  } return true; 
}

export default compareLetters; 