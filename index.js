import mappedString from "./modules/mapped.js";
import isSubsequence from "./modules/subsequence.js"; 
import longest from "./longest.js";


function longestMatch(string, dictionary){

let mapped = mappedString(string);
console.log(mapped);
let filter = []; 
let longestWord = ''; 

for (const index of dictionary) {
    if(isSubsequence(index, mapped)){
        filter.push(index);
    } 

}

longestWord = longest(filter); 

return longestWord;

}

let word = 'javascript';
let arr  = ['art', 'vascular', 'avast', ' javas', 'vat'];

console.log(longestMatch(word, arr));