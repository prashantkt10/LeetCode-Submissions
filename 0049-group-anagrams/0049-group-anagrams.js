var strToMap=function(str) {
    var map={};
    for(let i=0; i<str.length; i++) {
        if(!map[str[i]]) {
            map[str[i]] = 1;
            continue;
        }
        map[str[i]]+=1;
    }
    return map;
}

var stringToUniqueKey = function(str) {
    const obj=strToMap(str)
    return JSON.stringify(Object.keys(obj).sort().reduce((accumulator, key) => {
        accumulator[key] = obj[key];
        return accumulator;
    }, {}));
}


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const uniqueKeyToStrMap={};
    for(let i=0; i<strs.length; i++) {
        const uniqueKey=stringToUniqueKey(strs[i]);
        if(!uniqueKeyToStrMap[uniqueKey]) {
            uniqueKeyToStrMap[uniqueKey]=[strs[i]];
            continue;
        }
        uniqueKeyToStrMap[uniqueKey].push(strs[i]);
    }
    return Object.values(uniqueKeyToStrMap);
};