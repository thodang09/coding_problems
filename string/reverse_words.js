let s = "the sky is     a   b   blue";

function reverse_words(s){
    s = s.trim().split(/\s+/);
    let first = 0;
    let last = s.length;
    let temp;
    while(first < last){
        temp = s[first];
        s[first++] = s[last];
        s[last--] = temp;
    }
    
    return s.join(' ');
}

let reversed_str = reverse_words(s);
console.log(reversed_str); 