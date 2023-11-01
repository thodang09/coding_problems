
const pattern2 = (num) => {
    let rows = num;
    let str = "";
    let check = 0;

    for(let i = 0;  i <= rows * 2 -1; i++){
        if(i<rows){
            check = 2 * i +1;
        }
        else{ 
            check = 2 * (2 * rows - i) - 3; 
        } 
        for(let space = 1; space <= check; space++){
            str += " ";
        }

        for(let star = 1; star <= 2*rows-check; star++){
            str +="* ";
        }






        console.log(str);
        str ="";
    }
    
}

pattern2(5);
