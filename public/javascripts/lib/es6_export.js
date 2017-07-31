"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*export let v1 = "aa";
export let v2 = "bb";

export let f0 = function()
{
	console.log("haha");
}*/

/*var f1 = function()
{
	console.log("hehe");
}*/

//export {v1, f0 as foo};
//export {f1 as default}

var Test = function () {
	function Test() {
		_classCallCheck(this, Test);

		this.v1 = "haha";
		this.v2 = "hehe";
	}

	_createClass(Test, [{
		key: "f0",
		value: function f0() {
			console.log(this.v1);
		}
	}, {
		key: "f1",
		value: function f1() {
			console.log(this.v2);
		}
	}]);

	return Test;
}();

//export {Test}

exports.default = Test;

//export default Test