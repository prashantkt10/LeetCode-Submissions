/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let obj={};
    for(let i=0; i<nums.length; i++) {
        if(obj[nums[i]]) {
            obj[nums[i]]+=1;
            continue;
        }
        obj[nums[i]]=1;
    }
    obj=Object.entries(obj).sort((a,b)=>b[1]-a[1]);
    let output=[];
    for(let i=0; i<k; i++) {
        output.push(obj[i][0]);
    } 
    return output;
};