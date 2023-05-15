var productExceptSelf = function(nums) {
    let totalProduct=1;
    let zeroExists=false, moreThanOneZero=false, allZero=true;
    for(let i=0; i<nums.length; i++) {
        if(nums[i]==0) {
            if(zeroExists) {
                moreThanOneZero=true;
            }
            zeroExists=true;
            continue;
        }
        allZero=false;
        totalProduct*=nums[i];
    }
    if(allZero||moreThanOneZero) totalProduct=0;
    let output=[];
    for(let i=0; i<nums.length; i++) {
        if(zeroExists) {
            if(nums[i]!=0) {
                output.push(0);
                continue;
            }
            output.push(totalProduct);
            continue;
        }
        output.push(totalProduct/nums[i]);
    }
    return output;
};