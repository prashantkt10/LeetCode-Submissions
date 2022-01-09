/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    s=s.split('');
    let startCharacters="({[";
    let endCharacters=")}]";
    let charactersMap={')':'(','}':'{',']':'['};
    let stack=[];
    while(s.length) {
        let char=s.shift();
        if(startCharacters.includes(char)){
            stack.push(char);
            continue;
        }
        if(endCharacters.includes(char)){
            let startChar=stack.pop();
            if(startChar==charactersMap[char]) 
                continue;
            return false;
        }
    }
    if(stack.length) return false;
    return true;
};