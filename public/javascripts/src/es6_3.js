class Animal{
	
	constructor(_type)
	{
		this.type = _type;
	}
	
	say(info)
	{
		console.log(this.type + "\t" + info);
	}
	
}

var a = new Animal('cat');

a.say("hello world");


class Cat extends Animal{
	
	constructor(_type,_name)
	{
		super(_type);
		
		this.name = _name;
	}
	
	getName()
	{
		console.log(this.name);
	}
	
}

var c = new Cat("cat", "bobo");

c.say("hello china");
c.getName();
