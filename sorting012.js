let arr = [0, 1, 2, 0, 1, 2];
let arr1 = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];
function sorting(a){
    let lo = 0;
    let mid = 0;
    let hi = a.length-1;
    let temp;
    console.log(hi);

    while(mid<=hi){
        if(a[mid] == 0){
            temp = a[lo]; 
            a[lo] = a[mid]; 
            a[mid] = temp; 
            lo++; 
            mid++; 
        }
        // If the element is 1
        else if(a[mid] == 1){
            mid++; 
        }
        // If the element is 2
        else{
            temp = a[mid]; 
            a[mid] = a[hi]; 
            a[hi] = temp; 
            hi--;
        }
    }
    return a;

}

console.log(sorting(arr));
console.log(sorting(arr1));
