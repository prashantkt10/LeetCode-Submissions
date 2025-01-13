/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const counterMap = {};

    for(let i=0; i < nums.length; i++) {
        let currentNum = nums[i];
        if(!counterMap[currentNum]) {
            counterMap[currentNum] = 1;
            if(counterMap[currentNum] > nums.length/2)
                return currentNum;
            continue;
        }
        counterMap[currentNum] += 1;
        if(counterMap[currentNum] > nums.length/2)
            return currentNum;
    }
};