/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let finalWord = '';
    let i = 0;
    while(word1[i] && word2[i]) {
        let char1 = word1[i];
        let char2 = word2[i];
        if(char1) finalWord += char1;
        if(char2) finalWord += char2;
        i += 1;
    }
    if(word1[i]) finalWord += word1.substr(i);
    if(word2[i]) finalWord += word2.substr(i);

    return finalWord;
};