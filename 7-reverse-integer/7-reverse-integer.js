/**
 * @param {number} x
 * @return {number}
 */
var getBits=function(char){
    return char.toString(2).split('0').join('').length;
}

var getReverse=function(num){
    num=String(num);
    let op='';
    for(let i=num.length-1; i>=0; i--) {
        if(i==num.length-1 && num[i]==0)
            continue;
        if(num[i]==0 && !op.length) 
            continue;
        if(num[i]=='-') {
            op='-'+op;
            continue;
        }
        op+=num[i];
    }
    return Number(op);
}

var reverse = function(x) {
    let low=Math.pow(-2,31);
    let high=Math.pow(2,31)-1;
    let reversed=getReverse(x);
    // let bits=getBits(reversed);
    if(reversed<low||reversed>high) return 0;
    return reversed;
};