//对象解构

let dog = {type:'animal',many:2};

/*let type = dog.type;
let many = dog.many;

console.log(type+"\t"+many);*/


let {type} = dog;

console.log(type);

//数组解构

let a = [1,2,3,4,5];

let [a1,a2,...rest] = a;

console.log(a1);
console.log(a2);
//console.log(a3);
//console.log(a4);
//console.log(a5);
console.log(rest);


let v1 = "v11";
let v2 = "v22";

let obj = {v1:v1,v2:v2};

let obj2 = {v1, v2};

console.log(obj);
console.log(obj2);
