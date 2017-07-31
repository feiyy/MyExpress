"use strict";

/*var a = [];
for (var i = 0; i < 10; i++) {
	(function(i){
		
		a[i] = function () {
		    console.log(i);
		  };
  
	})(i);  
}

a[6]();*/

var pi = Math.PI;

console.log(str);
var a = [];

var _loop = function _loop(i) {

	a[i] = function () {
		console.log(i);
	};
};

for (var i = 0; i < 10; i++) {
	_loop(i);
}

a[6]();