

let rows = 10;
let loops = rows;



for(let i = 0; i < loops; i++){
    
    console.log(`${' '.repeat(rows)}` + `${'*'.repeat(i*2+1)}`);
    rows--;
    
}