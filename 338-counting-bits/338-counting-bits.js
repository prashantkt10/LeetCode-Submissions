/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let nums=[];
    for(let i=0; i<=n; i++) {
        nums.push(Number(i.toString(2).split('').reduce((a,b)=>Number(a)+Number(b))));
    }
    return nums;
};