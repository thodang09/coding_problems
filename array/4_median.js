let nums1 = [1,3];
let nums2 = [2,4,5,10,11];

console.log(find_median(nums1,nums2));

function find_median(arr1,arr2){
    let median_position = 0;
    let total_length = (arr1.length + arr2.length);
    let first,second = 0;
    let medianNum = 0;

    if(total_length % 2 != 0 ){
        median_position = Math.floor(total_length / 2);
        for(let i = 0; i<median_position;i++){
            if(arr1[first] < arr2[second]){
                medianNum = arr1[first++];
            }
            else{
                medianNum = arr2[second++];
            }
        }
        return medianNum;

    }
    else{
        median_position = total_length/2-1;
        for(let i = 0; i<median_position;i++){
            if(arr1[first] < arr2[second]){
                medianNum = arr1[first++];
            }
            else{
                medianNum = arr2[second++];
            }
        }
        return medianNum;

    }


}
