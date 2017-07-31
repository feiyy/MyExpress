let arr = [1,2,3,4,5];

//for循环遍历

//forEach遍历

arr.forEach(function(item){
	console.log(item);
})

// for of遍历
for(let item of arr)
{
	console.log(item);
}

//遍历字符串
let str = "abc";
for(let i=0; i<str.length; i++)
{
	console.log(str.charAt(i));
}

// for of 
for(let c of str)
{
	console.log(c);
}

//Set集合
let arr2 = [3,4,5];
var s = new Set(arr2);
s.add(1);
s.add(2);
s.add(1);

console.log("set length",s.size);

//console.log("set", s);

//s.delete(1);

//s.clear();

//console.log("set", s);

//遍历
for(let item of s)
{
	console.log(item);
}

console.log(s.has(3));


//Map集合
let m = new Map();
//添加内容
m.set(1,'tom');
m.set(2,'jack');
m.set(3,'lucy');
m.set(4,'lily');

console.log(m);
console.log(m.get(1))//tom
console.log(m.size);//4
console.log(m.has(1));//true
console.log(m.delete(1));
console.log(m.has(1));//false
m.clear();

//获取所有的key
console.log(m.keys());
//获取所有的value
console.log(m.values());
//获取所有的key-value对
console.log(m.entries());

//遍历
for(let key of m.keys())
{
	console.log(key);
}

for(let value of m.values())
{
	console.log(value);
}

for(let entry of m.entries())
{
	console.log(entry[0] + "\t" + entry[1]);
}








