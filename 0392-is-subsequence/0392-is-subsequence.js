/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    for(let i=0; i<t.length; i++) {
        if(!s.length) return true;
        if(s[0] === t[i]) {
            s = s.substr(1);
        }
    }
    if(!s.length) return true;
    return false;
};