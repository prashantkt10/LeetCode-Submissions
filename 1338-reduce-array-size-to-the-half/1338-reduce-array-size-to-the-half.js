/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
    let arrSize=arr.length;
    let occurMap={};
    while(arr.length){
        let value=arr.shift();
        occurMap[value]?occurMap[value]+=1:occurMap[value]=1;
    }
    let values=Object.values(occurMap).sort((a,b)=>b-a);
    let sum=0,count=0;
    while(values.length){
        let value=values.shift();
        sum+=value;
        if(sum>=arrSize/2){
            return count+1;
        }
        count+=1;
    }
}
