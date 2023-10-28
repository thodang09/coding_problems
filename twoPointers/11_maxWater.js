let height = [1,8,6,2,5,4,8,3,7];


//brute force solution
function maxArea(arr){
    let max_area = 0;
    let width = 1;
    for(let i = 0; i<arr.length; i++){
        for(let j = i+1; j<arr.length; j++){
            if((Math.min(arr[i],arr[j]) * width) > max_area){
                max_area = Math.min(arr[i],arr[j]) * width;
            }
            width++;
        }
        width = 1;
    }
    return max_area;
}
let start1 = performance.now()
console.log(maxArea(height));
let end1 = performance.now();
console.log("the time for brute force is above: " + (end1-start1))



//two pointer solution

function max_area_twoPointers(height){
    let left = 0;
    let right = height.length -1;
    let max_water = 0;

    while(left<right){
        curr_water = Math.min(height[left],height[right]) * (right-left);
        if(curr_water > max_water) max_water = curr_water;
        if(height[right] >= height[left]){
            left++;
        }
        else{
            right--;
        }
    }
    return max_water;
}
let start = performance.now()
console.log(max_area_twoPointers(height));
let end = performance.now();
console.log("time for two pointers " + (end-start));