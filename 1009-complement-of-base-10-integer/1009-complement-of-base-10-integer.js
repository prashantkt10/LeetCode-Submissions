/**
 * @param {number} n
 * @return {number}
 */
var decimalToBinary = function(d) {
    return d.toString(2);
}

var binaryToDecimal = function(b) {
    return parseInt(b,2);
}

var replaceOneZeroInBinary = function(b) {
    b=b.split('');
    for(let x=0; x<b.length; x++) {
        let c=b[x];
        if(c==0) {
            b[x]=1;
            continue;
        }
        b[x]=0;
    }
    return b.join('');
}

var bitwiseComplement = function(n) {
    let binary=decimalToBinary(n);
    binary=replaceOneZeroInBinary(binary);
    return binaryToDecimal(binary);
};