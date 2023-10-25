let s = [3,2,3];

function major_element(nums){
    let nm = new Map();
    for(let i = 0; i<nums.length; i++){
        if(nm.has(nums[i])){
            nm.set(nums[i],nm.get(nums[i]) + 1);
            if(nm.get(nums[i]) > nums.length/2){
                return true;
            }
        }
        else{
            nm.set(nums[i],1)
        }
    }
    return false;

}
console.log(major_element(s));