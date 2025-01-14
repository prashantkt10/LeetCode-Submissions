/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const result = [];
    const resultLocationMap = {};

    for(let i=0; i<strs.length; i++) {
        const str = strs[i];
        const sortedStr = str.split("").sort().join("");
        if(resultLocationMap[sortedStr] === undefined) {
            result.push([str]);
            resultLocationMap[sortedStr] = result.length-1;
            continue;
        }

        result[resultLocationMap[sortedStr]].push(str);
    }

    return result;
};