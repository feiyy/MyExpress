"use strict";

var redballs = new Array(33);
var blueballs = new Array(16);

for (var i = 0; i < redballs.length; i++) {
	redballs[i] = i + 1;
}

for (var _i = 0; _i < blueballs.length; _i++) {
	blueballs[_i] = _i + 1;
}

var redSet = new Set();
var blueSet = new Set();

while (redSet.size < 6) {
	var _index = Math.floor(Math.random() * redballs.length); // 0-32

	redSet.add(redballs[_index]);
}

var index = Math.floor(Math.random() * blueballs.length); // 0-32

blueSet.add(blueballs[index]);

console.log("redballs", redSet);
console.log("blueballs", blueSet);