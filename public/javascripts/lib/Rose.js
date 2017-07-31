"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arr = [];
var c = document.getElementById("c");
var ctx = c.getContext('2d');
var rose = new Image();
rose.src = "/images/rose2.png";
rose.onload = function () {
	for (var i = 0; i < 99; i++) {
		//随机生成x y的坐标
		var r = new Rose();
		arr.push(r);
	}

	//设置循环任务
	setInterval(function () {
		//清除画布
		ctx.clearRect(0, 0, 1000, 600);
		arr.forEach(function (item) {
			item.draw();
		});
	}, 40);
};

var Rose = function () {
	function Rose() {
		_classCallCheck(this, Rose);

		this.x = Math.random() * (1000 - 80);
		this.y = Math.random() * (600 - 80);
		this.scale = Math.random() * 4 / 10 + 0.6;
	}

	_createClass(Rose, [{
		key: "draw",
		value: function draw() {
			this.y = this.y + 5;
			//更改y值					
			ctx.save();
			ctx.scale(this.scale, this.scale);
			ctx.drawImage(rose, this.x, this.y, 60, 60);
			ctx.restore();

			if (this.y >= 600 / this.scale) {
				this.y = -80;
			}
		}
	}]);

	return Rose;
}();