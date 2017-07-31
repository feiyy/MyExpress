"use strict";

var a = function a(i) {
	return i + 1;
};

console.log(a(1));

var b = function b(i) {
	return i + 1;
};

console.log(b(1));

var c = function c(x, y) {

	x++;
	y--;

	return x + y;
};

var d = function d(x, y) {

	x++;
	y--;

	return x + y;
};

console.log(d(3, 2));