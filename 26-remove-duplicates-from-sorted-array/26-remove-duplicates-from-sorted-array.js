/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i=0, last;
    while(i<nums.length) {
        let c=nums[i];
        if(last==c) {
            nums.splice(i,1);
            continue;
        }
        last=c;
        i++;
    }
    return nums.length;
};