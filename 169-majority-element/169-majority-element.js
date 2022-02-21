/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let max=nums.length/2;
    let map={};
    for(let i=0; i<nums.length; i++) {
        let n=String(nums[i]);
        if(n in map) {
            map[n]+=1;
            if(map[n]>max)
                return n;
            continue;
        }
        map[n]=1;
        if(map[n]>max)
            return n;
    }
    
};