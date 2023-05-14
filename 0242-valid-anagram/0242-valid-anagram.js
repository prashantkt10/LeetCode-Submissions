/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let map1={}, map2={};

    for(let i=0; i<s.length; i++) {
        let char=s[i];
        if(!map1[char]) { map1[char]=1; continue; }
        map1[char]+=1;
    }

    for(let i=0; i<t.length; i++) {
        let char=t[i];
        if(!map2[char]) { map2[char]=1; continue; }
        map2[char]+=1;
    }
    
    let map1Keys=Object.keys(map1);
    let map2Keys=Object.keys(map2);
    if(map1Keys.length!=map2Keys.length) return false;
    
    for(let i=0; i<map1Keys.length; i++) {
        let key=map1Keys[i];
        if(map1[key]!=map2[key]) return false;
    }
    return true;
};