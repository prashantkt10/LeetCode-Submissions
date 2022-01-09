/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let map={
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000,
        'IV':4,
        'IX':9,
        'XL':40,
        'XC':90,
        'CD':400,
        'CM':900
    };
    let sum=0;
    while(s.length) {
        let str=s.substr(0,2);
        if(str in map){
            sum+=map[str];
            s=s.substr(2,s.length);
            continue;
        }
        str=s.substr(0,1);
        sum+=map[str];
        s=s.substr(1,s.length);
        continue;
    }
    return sum;
};