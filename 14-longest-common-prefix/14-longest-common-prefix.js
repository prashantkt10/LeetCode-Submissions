/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(!strs.length) return "";
    if(strs.length==1) return strs[0];
    let i=0;
    let w='';
    let runLoop=true; 
    while(runLoop) {
        let l='';
        for(let x=0; x<strs.length; x++) {
            if(x==0) {
                l=strs[x][i];
                if(!l) return w;
                continue;
            }
            let cl=strs[x][i];
            if(cl==l) continue;
            return w;
        }
        w+=l;
        i++
    }
};