/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(!haystack.length&&!needle.length) return 0;
    if(haystack.length&&!needle.length) return 0;
    if(needle.length>haystack.length) return -1;
    
    for(let i=0; i<haystack.length; i++) {
        let str=haystack.slice(i,i+needle.length);
        if(str===needle) return i;
    }
    
    return -1;
};