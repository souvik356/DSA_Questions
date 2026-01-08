/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0 
    let minPrice = prices[0]

    for(let i=1;i<prices.length;i++){
        if(prices[i]-minPrice > maxProfit){
            maxProfit = prices[i]-minPrice
        }
        else if(minPrice > prices[i]){
            minPrice = prices[i]
        }
    }
    return maxProfit
};