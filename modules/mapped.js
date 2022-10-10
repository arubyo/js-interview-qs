


function mappedString(string) {
    let map = {

    };

    for (let index = 0; index < string.length; index++) {
        let letter = string[index];
        if(map[letter]) {

            map[letter].push(index);
        } else {
            map[letter] = [index];
        }
        
    }
    return map;

}

export default mappedString; 