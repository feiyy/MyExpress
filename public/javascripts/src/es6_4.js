var a = function(i){return i+1};

console.log(a(1));

var b = (i) => i+1;

console.log(b(1));

var c = function(x, y){
	
	x++;
	y--;
	
	return x+y;
}

var d = (x,y)=>{
	
	x++;
	y--;
	
	return x+y;
}

console.log(d(3,2));




