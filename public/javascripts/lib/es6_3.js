"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Animal = function () {
	function Animal(_type) {
		_classCallCheck(this, Animal);

		this.type = _type;
	}

	_createClass(Animal, [{
		key: "say",
		value: function say(info) {
			console.log(this.type + "\t" + info);
		}
	}]);

	return Animal;
}();

var a = new Animal('cat');

a.say("hello world");

var Cat = function (_Animal) {
	_inherits(Cat, _Animal);

	function Cat(_type, _name) {
		_classCallCheck(this, Cat);

		var _this = _possibleConstructorReturn(this, (Cat.__proto__ || Object.getPrototypeOf(Cat)).call(this, _type));

		_this.name = _name;
		return _this;
	}

	_createClass(Cat, [{
		key: "getName",
		value: function getName() {
			console.log(this.name);
		}
	}]);

	return Cat;
}(Animal);

var c = new Cat("cat", "bobo");

c.say("hello china");
c.getName();