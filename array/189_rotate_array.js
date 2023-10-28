let nums = [1,2,3,4,5,6,7];
let k = 3;

function rotate_array(nums,k){
    let i = 0;
    while(i<k){
        move_element(nums,nums.length-1,0);
        i++;
    }

    return nums;
}

function move_element(arr,from,to){
    let temp = arr[from];
    for(let i = from; i >= to ; i--){
        arr[i] = arr[i-1];
    }
    arr[to] = temp;
    return arr;
}

console.log(rotate_array(nums,k));