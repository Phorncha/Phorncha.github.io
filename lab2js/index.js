var name = 'mickey';
let lname = 'mouse';

if(true){
    var a1 = 'varVariable';
}
if(true){
    let a2 = 'letVariable';
    console.log(a2);
}

console.log(a1); //true
//console.log(a2); //error a2 not defind

const pi = 3.14;
//สร้างเป็น const ไม่สามารถแก้ไขค่าได้อีก
//pi = 100;
console.log(name, lname, pi);

//function
function functionName(pname){
    console.log('Hello ' + pname);
}
functionName(name)
//function
const functionA = (pname) => {
    console.log('Call from functionA ' + pname);
}
functionA(name)

//f -> c
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

//Object -> JSON
let person = {
    name: 'cis',
    lastname: 'kku'
}
console.log(person.name);
person.name = 'NKC';
person['name'] = 'IS';
console.log(person);

//create function for Student object
function Student(name, id){
    this.name = name;
    this.id = id;
}
//create obj from Student
let student1 = new Student('mickey', 1);
let student2 = new Student('minnie', 2);
console.log(student1);

//array
let arrName = ['a','b','10'];
arrName[0] = 'cis';
console.log(arrName[0])
//foreach
for(let  x of arrName){
    console.log(x);
}
//
console.log('10' + 10);
