let redballs = new Array(33);
let blueballs = new Array(16);

for(let i=0; i<redballs.length; i++)
{
	redballs[i] = i+1;
}

for(let i=0; i<blueballs.length; i++)
{
	blueballs[i] = i+1;
}

let redSet = new Set();
let blueSet = new Set();

while(redSet.size<6)
{
	let index = Math.floor(Math.random()*redballs.length); // 0-32
	
	redSet.add(redballs[index]);
}


let index = Math.floor(Math.random()*blueballs.length); // 0-32

blueSet.add(blueballs[index]);

console.log("redballs",redSet);
console.log("blueballs", blueSet);

