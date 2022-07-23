//n=5
function factorial(n){
    //loop
    let res = 1;
    do{
        res = res * n;
        n = n-1;
    }while(n > 0)
    //if n = 1 return 1 or break
    return res;
}

let facNumber = 5;
const facResult = factorial(facNumber);
console.log(facResult);
