/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let numsLen = nums.length;
    let pointer = 0;
    while(numsLen > 0) {
        const currentNum = nums[pointer];
        if(currentNum == 0) {
            nums.push(0);
            nums.splice(pointer, 1);
            numsLen -= 1;
            continue;
        }
        pointer += 1;
        numsLen -= 1;
    }
};