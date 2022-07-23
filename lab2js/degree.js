//f -> c
console.log("hello")
function f2c(fahrenheit){
    c = (fahrenheit - 32) / 1.8
    console.log(c);
}
//c -> f
const c2f = (celsius) => {
    f = (celsius * 1.8) + 32
    console.log(f);
}
c2f(100);
f2c(100);