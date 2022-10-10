

function findNextIndex(array, minIndex) {
    for (const i of array) {
        if(i >= minIndex) {
            return i + 1; 
        }
        
    }
    return false; 
}


export default findNextIndex;