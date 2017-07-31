function animal(type)
{
	var type = type || 'cat';
	
	console.log(type);
}

animal('dog');
animal();

function animal2(type='cat')
{
	console.log(type);
}

animal2('dog');
animal2();

function getArray(...rest)
{
	console.log(rest);
}

getArray('a','b','c');
getArray(1,2,3);


