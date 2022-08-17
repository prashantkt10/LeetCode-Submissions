/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const morseCodes=[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    const alphabets=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let alphabetToMorseMap={};
    while(alphabets.length){
        alphabetToMorseMap[alphabets.shift()]=morseCodes.shift();
    }
    uniqueMorseCodes={};
    while(words.length){
        let word=words.shift();
        let morseCode='';
        word.split('').forEach((alphabet,index)=>{
            morseCode+=alphabetToMorseMap[alphabet];
        });
        if(!uniqueMorseCodes[morseCode])
            uniqueMorseCodes[morseCode]=1;
    }
    return Object.keys(uniqueMorseCodes).length;
};