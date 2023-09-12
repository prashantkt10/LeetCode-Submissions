/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    const used = {};
    for(let i=0; i<numbers.length; i++) {
        let num = numbers[i];
        let result = target - num;
        // if(result<0) continue;
        if(used[result]) {
            return [used[result], i+1];
        }
        used[num]=i+1;
    }
};


