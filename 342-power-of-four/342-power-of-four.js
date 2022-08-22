/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if(n<=0) return false;
    n=n.toString(2).slice(1);
    if(n.includes('1') || n.length%2==1) return false;
    return true;
};