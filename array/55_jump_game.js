let nums = [0];

function can_jump(nums){
    console.log(nums[0]);
    if(nums[0] === 0) return false;
    for(let i = 0; i<nums.length-1; i++){
        if(nums[i] >= nums.length-1 - i){
            console.log(i);
            console.log(nums[i]);
            return true;
        }
    }
    return false;
}

console.log(can_jump(nums));