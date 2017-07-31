"use strict";

var arr = [1, 2, 3, 4, 5];

//for循环遍历

//forEach遍历

arr.forEach(function (item) {
	console.log(item);
});

// for of遍历
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
	for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		var item = _step.value;

		console.log(item);
	}

	//遍历字符串
} catch (err) {
	_didIteratorError = true;
	_iteratorError = err;
} finally {
	try {
		if (!_iteratorNormalCompletion && _iterator.return) {
			_iterator.return();
		}
	} finally {
		if (_didIteratorError) {
			throw _iteratorError;
		}
	}
}

var str = "abc";
for (var i = 0; i < str.length; i++) {
	console.log(str.charAt(i));
}

// for of 
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
	for (var _iterator2 = str[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
		var c = _step2.value;

		console.log(c);
	}

	//Set集合
} catch (err) {
	_didIteratorError2 = true;
	_iteratorError2 = err;
} finally {
	try {
		if (!_iteratorNormalCompletion2 && _iterator2.return) {
			_iterator2.return();
		}
	} finally {
		if (_didIteratorError2) {
			throw _iteratorError2;
		}
	}
}

var arr2 = [3, 4, 5];
var s = new Set(arr2);
s.add(1);
s.add(2);
s.add(1);

console.log("set length", s.size);

//console.log("set", s);

//s.delete(1);

//s.clear();

//console.log("set", s);

//遍历
var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
	for (var _iterator3 = s[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
		var _item = _step3.value;

		console.log(_item);
	}
} catch (err) {
	_didIteratorError3 = true;
	_iteratorError3 = err;
} finally {
	try {
		if (!_iteratorNormalCompletion3 && _iterator3.return) {
			_iterator3.return();
		}
	} finally {
		if (_didIteratorError3) {
			throw _iteratorError3;
		}
	}
}

console.log(s.has(3));

//Map集合
var m = new Map();
//添加内容
m.set(1, 'tom');
m.set(2, 'jack');
m.set(3, 'lucy');
m.set(4, 'lily');

console.log(m);
console.log(m.get(1)); //tom
console.log(m.size); //4
console.log(m.has(1)); //true
console.log(m.delete(1));
console.log(m.has(1)); //false
m.clear();

//获取所有的key
console.log(m.keys());
//获取所有的value
console.log(m.values());
//获取所有的key-value对
console.log(m.entries());

//遍历
var _iteratorNormalCompletion4 = true;
var _didIteratorError4 = false;
var _iteratorError4 = undefined;

try {
	for (var _iterator4 = m.keys()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
		var key = _step4.value;

		console.log(key);
	}
} catch (err) {
	_didIteratorError4 = true;
	_iteratorError4 = err;
} finally {
	try {
		if (!_iteratorNormalCompletion4 && _iterator4.return) {
			_iterator4.return();
		}
	} finally {
		if (_didIteratorError4) {
			throw _iteratorError4;
		}
	}
}

var _iteratorNormalCompletion5 = true;
var _didIteratorError5 = false;
var _iteratorError5 = undefined;

try {
	for (var _iterator5 = m.values()[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
		var value = _step5.value;

		console.log(value);
	}
} catch (err) {
	_didIteratorError5 = true;
	_iteratorError5 = err;
} finally {
	try {
		if (!_iteratorNormalCompletion5 && _iterator5.return) {
			_iterator5.return();
		}
	} finally {
		if (_didIteratorError5) {
			throw _iteratorError5;
		}
	}
}

var _iteratorNormalCompletion6 = true;
var _didIteratorError6 = false;
var _iteratorError6 = undefined;

try {
	for (var _iterator6 = m.entries()[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
		var entry = _step6.value;

		console.log(entry[0] + "\t" + entry[1]);
	}
} catch (err) {
	_didIteratorError6 = true;
	_iteratorError6 = err;
} finally {
	try {
		if (!_iteratorNormalCompletion6 && _iterator6.return) {
			_iterator6.return();
		}
	} finally {
		if (_didIteratorError6) {
			throw _iteratorError6;
		}
	}
}