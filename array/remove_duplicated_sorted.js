

let nums = [0,1,1,1,1,2,2,5,3,3,4];

var removeDuplicates = function(nums) {
    let first = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[first] !== nums[i]) {
            nums[++first] = nums[i];
        }
    }
    return nums;
};

console.log(removeDuplicates(nums));