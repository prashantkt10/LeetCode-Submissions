/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let ptr1 = 0;
    let ptr2 = height.length-1;
    let maxAmoutOfWater = 0;

    while(true) {
        let height1 = height[ptr1];
        let height2 = height[ptr2];

        let heightToConsider = height1 < height2 ? height1 : height2;

        let waterInCurrentZone = heightToConsider * (ptr2-ptr1);

        if(waterInCurrentZone > maxAmoutOfWater)
            maxAmoutOfWater = waterInCurrentZone;

        if(ptr2 - ptr1 == 1) return maxAmoutOfWater;

        if(height[ptr1] < height[ptr2]) {
            ptr1 += 1;
        } else if(height[ptr2] < height[ptr1]) {
            ptr2 -= 1;
        } else {
            ptr1 += 1;
        }
    }
};