let prices = [7,6,4,3,1];

function buy_stock(prices){
    let max_profit = 0;
    let buy_date = prices[0];
    for (let i = 1; i<prices.length; i++){
        buy_date = Math.min(prices[i],buy_date);
        max_profit = Math.max(max_profit, prices[i] - buy_date);

    }
    return max_profit;

}

console.log(buy_stock(prices));