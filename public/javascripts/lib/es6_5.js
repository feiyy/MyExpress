'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Animal = function () {
    function Animal() {
        _classCallCheck(this, Animal);

        this.type = 'animal';
    }
    /* says(say){
     	var self = this;
         setTimeout(function(){
             console.log(self.type + ' says ' + say)
         }, 1000)
     }*/

    /*says(say){    	
         setTimeout(function(){
             console.log(this.type + ' says ' + say)
         }.bind(this), 1000)
     }*/

    _createClass(Animal, [{
        key: 'says',
        value: function says(say) {
            var _this = this;

            setTimeout(function () {
                console.log(_this.type + ' says ' + say);
            }, 1000);
        }
    }]);

    return Animal;
}();

var a = new Animal();

a.says("helloworld");