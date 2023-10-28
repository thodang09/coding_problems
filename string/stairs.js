
function print_stairs(num){
    let 
    if(num == 1){
        console.log("1");
    }
    else{
        print_stairs(num-1);
        console.log(" # ");

    }
}

//console.log(print_stairs(5));
print_stairs(5);