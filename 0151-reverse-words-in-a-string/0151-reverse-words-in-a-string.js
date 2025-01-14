/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.trim().replaceAll(/\s+/ig,' ');
    return s.split(" ").reverse().join(" ");
};