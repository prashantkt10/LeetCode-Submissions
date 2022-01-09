/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x=x.toString().split('');
    while(x.length>1) {
        if(x.shift()!=x.pop())
            return false;
    }
    return true;
};