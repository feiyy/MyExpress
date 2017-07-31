var mongoose = require('mongoose');

//var uri = "mongodb://10.10.20.31:27017/demodb";
var uri = "mongodb://10.10.20.31:27017/demodb";
mongoose.connect(uri);
var db = mongoose.connection;

//var db = mongoose.createConnection('10.10.20.31','demodb');


db.on('error',function(){console.log("error")});
db.once('open',function(){
	
	//1. Schema
	userSchema = new mongoose.Schema({
		_id:Number,
		uname:String,
		pwd:String,
		birthday:Date,
		photo:String	
		/*category: [mongoose.schemaTypes.ObjectId]*/
	});
	
	//定义在entity上的方法
	userSchema.methods.findByName = function(cb)
	{
		return this.model('User').find({uname:this.uname},cb);
	}
	
	//定义在model上的方法
	userSchema.statics.findByName = function(uname,cb)
	{
		return this.find({uname:uname},cb);
	}
	
	//2. Model 
	userModel = db.model('User', userSchema);	
	

	//queryUser();
	
    //queryById(3);
    
    //deleteUser(3);
    
    //updateUser(1);
    
    //findByName();
    
    //findByNameModel();	
    
    //getUser('jack','456');
    
    getUserByPromise();
})

function addUser(obj)
{
	//3. Entity
	var userEntity = new userModel(obj);
	
	//保存到数据库
	userEntity.save();
}

function queryUser(cb)
{
	//var query = userModel.find({uname:"tom",pwd:"123"});
	
	userModel.find({},cb);
	
	/*query.where({uname:"hushengqiang"});
	query.or({pwd:"123"},{pwd:"456"});*/

    //query.sort({ uname: 'desc', birthday:'desc' });
    
    //query.limit(2); //限制条数
    //query.skip(4)   //开始数 ，通过计算可是实现分页
}

function queryById(id)
{
	userModel.findById(id,function(err, doc){
		
		console.log(doc);
	})
}

function deleteUser(id, cb)
{
	userModel.deleteOne({_id:id},cb);
	
	/*userModel.findById(id,function(err, doc){
		if(!err)
		{
			doc.remove(cb);
		}
		else
		{
			cb(err);
		}
	})*/
}

function updateUser(obj,cb)
{
	userModel.findById(obj.id,function(err, doc){

		if(!err)
		{
			doc.uname = obj.uname;
			doc.pwd = obj.pwd;
			doc.birthday = obj.birthday;
			doc.save(cb);
		}
		else
		{
			cb(err);
		}
		
	})
}

function findByName()
{	
	var userEntity = new userModel({uname:'hushengqiang'});

	userEntity.findByName(function(err, docs){
		console.log(docs);
		
	})
}

function findByNameModel()
{
	userModel.findByName('hushengqiang',function(err,docs){
		
		console.log(docs);
		
	})
}

function getUser(uname, pwd, cb)
{
	console.log("getuser");
	userModel.find({uname:uname, pwd:pwd}, cb);
	
}

function getUserByPromise()
{
	var p = userModel.find({}).exec();
	
	p.then(function(docs){console.log(docs)})
	 .catch(function(err){console.log(err)});
}


module.exports.addUser = addUser;
module.exports.queryUser = queryUser;
module.exports.getUser = getUser;
module.exports.queryUser = queryUser;
module.exports.deleteUser = deleteUser;
module.exports.updateUser = updateUser;






