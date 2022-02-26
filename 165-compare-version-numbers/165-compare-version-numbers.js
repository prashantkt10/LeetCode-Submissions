/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    version1=version1.split('.');
    version2=version2.split('.');
    while(version1.length || version2.length) {
        let v1=Number(version1.shift())||0;
        let v2=Number(version2.shift())||0;
        if(v1<v2) return -1;
        if(v1>v2) return 1;
    }
    return 0;
};