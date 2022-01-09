/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if(nums1.length==1 && !nums2.length) return nums1[0];
    if(nums2.length==1 && !nums1.length) return nums2[0];
    let mergedArray=[];
    while(nums1.length && nums2.length) {
        let valueFromnum1=nums1[0];
        let valueFromnum2=nums2[0];
        if(valueFromnum1<valueFromnum2) {
            mergedArray.push(valueFromnum1);
            nums1.shift();
        }
        else if(valueFromnum2<valueFromnum1) {
            mergedArray.push(valueFromnum2);
            nums2.shift();
        }
        else {
            mergedArray.push(nums2.shift());
            mergedArray.push(nums1.shift());
        }
    }
    mergedArray=[...mergedArray, ...nums1, ...nums2];
    let median=null;
    let mid=(mergedArray.length)%2;
    if(mid==0) {
        let mid=Math.floor(mergedArray.length/2);
        let first=mid-1, second=mid;
        median=(mergedArray[first]+mergedArray[second])/2;
    } else if(mid!=0) {
        let medianLoc=Math.floor(mergedArray.length/2);
        median = mergedArray[medianLoc];
    }
    return median;
};