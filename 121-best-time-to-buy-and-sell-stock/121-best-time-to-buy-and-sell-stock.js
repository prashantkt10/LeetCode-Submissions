/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {
    let min=prices[0], max=null, maxProfit=null;
    for(let i=1; i<prices.length; i++){
        let price=prices[i];
        if(price<min) {
            min=price;
            max=null;
            continue;
        }
        if(price>max) {
            max=price;
        }
        if(max!=null) {
            let profit=max-min;
            if(profit>maxProfit)
                maxProfit=profit;
        }
    }
    return maxProfit||0;
};

