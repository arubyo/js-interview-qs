

function findNextIndex(array, minIndex) {
    for (const i of array) {
        if(i >= minIndex) {
            return i + 1; 
        }
        
    }
    return false; 
}

let x = [3, 7];
let y = 4; 

console.log(findNextIndex(x, y));