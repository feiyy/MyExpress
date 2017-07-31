"use strict";

var now = new Date();

var str = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate() + " " + (now.getHours() >= 10 ? now.getHours() : "0" + now.getHours()) + ":" + (now.getMinutes() >= 10 ? now.getMinutes() : "0" + now.getMinutes()) + ":" + (now.getSeconds() >= 10 ? now.getSeconds() : "0" + now.getSeconds());

console.log(str);

var str2 = now.getFullYear() + "-" + (now.getMonth() + 1).toString().padStart(2, 0) + "-" + now.getDate().toString().padStart(2, 0);

console.log(str2);