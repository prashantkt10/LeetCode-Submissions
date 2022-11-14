/**
 * @param {string} s
 * @return {string[]}
 */


var findRepeatedDnaSequences = function(s) {
    let patterns={};
    //n
    //n2
    for(let i=0; i<s.length; i++) {
        let pattern=s.slice(i,10+i); //n
        if(pattern.length<10) break; //1
        if(patterns[pattern]) { //1
            patterns[pattern]+=1; //1
            continue;
        }
        patterns[pattern]=1;//1
    }
    let allPatterns=Object.keys(patterns);//n
    for(let i=0; i< allPatterns.length; i++) {//n
        if(patterns[allPatterns[i]]<2) delete patterns[allPatterns[i]];//1
    }
    return Object.keys(patterns);//n
};
    
// abcd
// abdc abcd