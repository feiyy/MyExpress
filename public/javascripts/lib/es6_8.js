'use strict';

function animal(type) {
	var type = type || 'cat';

	console.log(type);
}

animal('dog');
animal();

function animal2() {
	var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'cat';

	console.log(type);
}

animal2('dog');
animal2();

function getArray() {
	for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
		rest[_key] = arguments[_key];
	}

	console.log(rest);
}

getArray('a', 'b', 'c');
getArray(1, 2, 3);