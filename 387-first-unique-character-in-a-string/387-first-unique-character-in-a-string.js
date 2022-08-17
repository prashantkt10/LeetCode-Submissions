/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let charMap={};
    for(let i=0; i<s.length; i++){
        let char=s[i];
        if(charMap[char]){
            charMap[char].size+=1;
            charMap[char].locations.push(i);
            continue;
        }
        charMap[char]={size:1,locations:[]};
        charMap[char].locations.push(i);
    }
    let keys=Object.keys(charMap);
    while(keys.length){
        let key=keys.shift();
        if(charMap[key].size===1)
            return charMap[key].locations[0];
    }
    return -1;
};