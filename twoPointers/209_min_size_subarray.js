let nums = [1,2,3,4,5];
let target = 15;

function min_size_subarray(nums, target){
    let start = 0;
    let left = 0;
    let minlen = nums.length;
    let arr_size = nums.length;
    let sum = 0;
    let found = false;

    while(start < arr_size){
        sum += nums[start];
        
        while(sum >= target){
            
            if(sum === target){
                minlen = Math.min(minlen, start+1 - left);
                found = true;
            }
            sum -= nums[left++];
        }
        start++;
    }
    return found ? minlen : 0;
}

console.log(min_size_subarray(nums,target));
