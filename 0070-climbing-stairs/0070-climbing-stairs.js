/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n<2) return n;
    let first=1, second=1, third;
    for(let i=2; i<=n; i++) {
        third=first+second;
        first=second;
        second=third;
    }
    return third;
};