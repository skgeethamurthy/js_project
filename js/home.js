
/*function a(a,b){
    result = a+b;
    console.log(result);  
}


function getEmployee(){
    let employee = {
        name:"Abhi",
        Id:1524,
        salary:"1000k",
    };
    let student = {
        name:"geetha",
        id:123,
        class:"9th",
    };
    console.log(employee);
    console.log(student);
}*/


let student = {
    name:"geetha",
    id:123,
    class:"9th",
};
console.log(student.name);
console.log(student.id);
console.log(student.class);


let employee = {
    name:"Abhi",
    Id:1524,
    salary:"1000k",
};
console.log(employee.name);
console.log(employee.Id);
console.log(employee.salary);

/*
function factorial(n){

    if (n==0) 
        return 1;
    else
        return n * factorial(n-1);
    }
    let n=4;
    let result = factorial(n);
    console.log(result);


const arr =[5,1,2,3,4,6];

function user (x){
    return x*2;
}
const output = arr.map(user);
console.log(output);



const arrays =[5,1,2,3,4,6];
function trible (x){
    return x*3;
}
const input = arr.map(trible);
console.log(input);

function four (x){
    return x*4;
}
const inputoutput = arr.map(four);
console.log(inputoutput);

function binary (x){
    return x.toString(2);
}
const inout = arr.map(binary);
console.log(inout);


function getEmp(){
    let employee = {
        name:"Abhi",
        Id:1524,
        salary:"1000k",
    };
    let student = {
        name:"lishu",
        id:123,
        class:"1th",
    };
    console.log(employee);
};

function add(w,e){
return w+e;
}
let sum=add(9,8);
result=sum;
console.log(result);


let obj = {
    laptop:"window6",
    company:"msi",
    value:"50k",
}
console.log(obj)

function lishu(){
    return(x);
}
let x="HELLO";
console.log(x);

let object = {
    name:"g",
    id : 12,
    salary : "50k",
}
console.log(object.id)

function sub(){
    return (r*s);
}
let minus =(10*5); 
result=minus;
console.log(result);

let k = 6;
let m = 23;
let y = k+m;
console.log(y);


function myApp(){
    return(num*num1);
}
let num = 25;
let num1 =25;
result=num * num1;
console.log(result);

function myApp(){
    return(q);
}
let c = 3;
let q = (100 + 50) * c;
console.log(q);

let l = 3;
let o = (100 - 50) * l;
console.log(o);

let f = 65;
let h = 50;
let g = (f/h);
console.log(g);

let u = 25;
u += 1;
console.log(u);

let p = 50;
p += 50;
console.log(p);

let z = 250;
z -= 100;
console.log(z);

function geetha(){
    return(s**2)
}
let s = 25;
result=(s**2);
console.log(result);

let obje ={
 house : "duplex",
 room : 6,
 kitechen : 2,
 godHouse : 1,
 temple : "god"
}
console.log(obje.temple);*/


/*let i = 10;
if(i>10){
    console.log(yes);
}
  else {
    console.log(no);*/

/*" IF CONDITIONS"
let hour=90;
if (hour < 18) {
 console.log("i");
} else {
 console.log("p");
}
 
let per=100;
if(per>100){
 console.log("i want one phone");
}else{
 console.log("i dont want phone");
}

("FOR CONDITIONS")
let i = 100;
for (let i = 0; i < 100; i++) {
 console.log("Hi");
}

let i = 250;
for(let i=0; i<250; i++){
console.log("My son name lishanth");
}

let i = 1000;
for(let i = 0; i<1000; i++){
 console.log("Lishugeethudarshu");
}*/

/*let i = 22;
for(let i = 0; i<22; i++){
    console.log("GHEE");
}

function app(){
    return ;
}
let a = 250;
let b = 350;
result = a+b;
console.log(result);*/

/*function factorial(n){

    if (n==0){
        return 1;
    }else
        return n * factorial(n-1);
    }
    let n = 4;
    let r = factorial(n);
    console.log(r);*/
/*
function factorial(n) {
 
    if (n == 0) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    };
};
let n = 4;
let result = factorial(n);
console.log("factorial of number",result);

function getEmployee() {
    let employee = {
        name: "Abhi",
        Id: 1524,
        salary: "1000k",
    };
    let student = {
        name: "geetha",
        id: 123,
        class: "9th",
    };
    console.log(employee);
    console.log(student);
};

function app() {
    return (n1 + n2);
};
let n1 = 550;
let n2 = 500;
result = 550 + 500;
console.log(result);


function getEmployee1() {
    let employee = {
        name: "A",
        Id: 152,
        salary: "10k",
    };
    let student = {
        name: "B",
        id: 123,
        class: "puc",
    };
    console.log(employee);
    console.log(student);
};


const arrays = [5, 1, 2, 3, 4, 6];
function trible(x) {
    return x * 3;
};
const input = arrays.map(trible);
console.log(input);

const array = [5, 1, 2, 3, 4, 6];
function four(x) {
    return x * 4;
};
const output = array.map(four);
console.log(output);*/





// Implemented map() function

const arr=[2,1,2,3,4,5,6,7,8,9];
function myFun(x){
    return x=x+x;
}
const opt = arr.map(myFun);
console.log(opt);

const output = arr.reduce(function(acc,curr){
    acc = acc + curr;
    return acc;
}, 1);
console.log(output);

// const arrayss = [9,8,9,8];
// function myApp(a){
//     return a-3;
// }
// const value = arrayss.map(myApp);
// console.log(value);

// const arra = [84,84,84,84,84];
// function app(x){
// return (x / 2);
// }
//  const op = arra.map(app);
// console.log(op);

// let a = [36,36,316,36];
// function F(){
//     return a;
// }
// console.log(a[2]);

