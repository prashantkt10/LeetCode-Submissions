/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let checkNumsMap={};
    for(let x=0; x<nums.length; x++) {
        let currentNum=nums[x];
        let remaining=target-currentNum;
        let existing=checkNumsMap[remaining];
        if(existing!=undefined) {
            return [existing,x];
        }
        checkNumsMap[currentNum]=x;
    }
};