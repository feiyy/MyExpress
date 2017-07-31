/*function getSum(a,b)
{
	var sum = 0;
	for(var i= 0; i<10000000000;i++)
	{
		sum = a+b;
	}
	
	return sum;
	
}

console.log(getSum(3,4));

console.log("haha");*/


function getSum(a, b, cb)
{
	setTimeout(function(){
		var sum = 0;
		for(var i= 0; i<10000000000;i++)
		{
			sum = a+b;
		}
		cb(sum);
	},0);
}

getSum(3,4,function(data){
	
	console.log(data);
})

console.log("haha");

function getsum(a,b)
{
	var promise = new Promise(function(resolve, reject){
		
		try
		{
			var sum = a + b;
			
			resolve(sum);
		}
		catch(e)
		{
			reject(e);
		}
	})
	
	return promise;
}

var p = getsum(3,4);

p.then(function(data){console.log(data)})
.catch(function(err){console.log(err)});












