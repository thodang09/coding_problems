
function strStr(hayStack, needle){
    let target_size = needle.length;

    for(let i = 0; i<hayStack.length; i++){
        if(hayStack.slice(i,target_size+i) == needle){
            return i;
        }
        
    }
    return false;

}

console.log(strStr("butsadsad","sad"));