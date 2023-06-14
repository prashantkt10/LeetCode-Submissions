/**
 * @param {string} s
 * @return {number}
 */
// Solution -1
// var lengthOfLastWord = function(s) {
//     s=s.trim();
//     s=s.split(" ");
//     return s[s.length-1].length;
// };

// Solution - 2
var lengthOfLastWord = function(s) {
    s=s.trim();
    let len=0;
    for(let i=s.length-1; i>=0; i--) {
        if(s[i]==' ') return len;
        len+=1;
    }
    return len;
};

