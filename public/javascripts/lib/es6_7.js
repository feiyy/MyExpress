"use strict";

//对象解构

var dog = { type: 'animal', many: 2 };

/*let type = dog.type;
let many = dog.many;

console.log(type+"\t"+many);*/

var type = dog.type;


console.log(type);

//数组解构

var a = [1, 2, 3, 4, 5];

var a1 = a[0],
    a2 = a[1],
    rest = a.slice(2);


console.log(a1);
console.log(a2);
//console.log(a3);
//console.log(a4);
//console.log(a5);
console.log(rest);

var v1 = "v11";
var v2 = "v22";

var obj = { v1: v1, v2: v2 };

var obj2 = { v1: v1, v2: v2 };

console.log(obj);
console.log(obj2);