


let pattern = 'abba';
let s = 'dog cat cat dog';

let len = s.split(' ');
if(pattern.length != len.length) return false;

let nm = new Map();
for(let i = 0; i<pattern.length; i++){
    nm.set(pattern.slice(i, i+1), len[i]);
}
