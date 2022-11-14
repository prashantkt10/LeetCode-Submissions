/**
 * @param {string} s
 * @return {string[]}
 */


var findRepeatedDnaSequences = function(s) {
    let patterns={};
    for(let i=0; i<s.length; i++) {
        let pattern=s.slice(i,10+i);
        console.log(i,pattern)
        if(pattern.length<10) break;
        if(patterns[pattern]) {
            patterns[pattern]+=1;
            continue;
        }
        patterns[pattern]=1;
    }
    let allPatterns=Object.keys(patterns);
    for(let i=0; i< allPatterns.length; i++) {
        if(patterns[allPatterns[i]]<2) delete patterns[allPatterns[i]];
    }
    return Object.keys(patterns);
};
    
// abcd
// abdc abcd