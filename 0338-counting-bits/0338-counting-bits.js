/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let output = [];

    for(let i=0; i<=n; i++) {
        let sumOfBits = i.toString(2).split("").reduce((accumulator, currentValue) => {
            return Number(accumulator) + Number(currentValue);
        }, 0);
        output.push(sumOfBits);
    }

    return output;
};