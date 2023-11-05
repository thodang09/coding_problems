
function display_amount_from_user(){
    const input_entered = document.getElementById("coin_change").value;
    
    
}

function display_coin_change(){
    
    const input_entered = document.getElementById("coin_change").value;
    const coins = [1,3,5,10,20,50,100];
    const changes = coinChange(coins,input_entered);
    const new_h1 = document.createElement("h1");
    new_h1.innerHTML = changes;
    document.body.appendChild(new_h1);
    event.preventDefault();

}


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