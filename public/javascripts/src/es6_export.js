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

class Test{
	
	constructor()
	{
		this.v1 = "haha";
		this.v2 = "hehe";
	}
	
	f0()
	{
		console.log(this.v1);
	}
	
	f1()
	{
		console.log(this.v2);
	}
}

export {Test} //=> import {Test} from ''

export {Test as default} // => import T from ''

//export default Test //=> import T from ''




