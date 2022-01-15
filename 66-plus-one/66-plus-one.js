/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carry=1, total=[];
    for(let i=digits.length-1; i>=0; i--) {
        let sum=digits[i]+carry;
        if(sum>9) {
            carry=1;
            total.unshift(10-sum);
            continue;
        }
        carry=0; 
        total.unshift(sum);
    }
    if(carry>0) total.unshift(carry);
    return total;
};