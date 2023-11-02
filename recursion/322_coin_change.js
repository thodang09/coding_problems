
let coins = [1,5,10,20,50,100];
let amount = 69;


function coinChange(coins, amount, memo={}){
    if(amount in memo) return memo[amount];
    if(amount === 0) return [];
    if(amount < 0 ) return null;
    let shortest_combination = null;

    for( let coin of coins){
        const remainder_amount = amount - coin;
        const remainder_combination = coinChange(coins, remainder_amount,memo)
        if(remainder_combination !== null){
            const combination = [...remainder_combination, coin];
            //shortest_combination = Math.min(combination, shortest_combination);
            if(shortest_combination === null || combination.length < shortest_combination.length){
                shortest_combination = combination;
            }
        }
    }
    memo[amount] = shortest_combination;

    return shortest_combination;
}

console.log(coinChange(coins,amount));