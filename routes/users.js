var express = require('express');
var router = express.Router();
var user = require('../models/user');
var multiparty = require('multiparty');
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');

  res.render("index",{username:"",err:""});
});

/*router.get('/reg', function(req, res, next) {
	//获取表单数据
	var username = req.query.username;
	var pwd = req.query.pwd;
	var photo = req.query.photo;
	var birthday = req.query.birthday;
	
	console.log(username);
	console.log(pwd);
	console.log(photo);
	console.log(birthday);
  res.send('--get--respond with a resource');
});*/

router.get('/rest/:id', function(req, res, next) {
	//获取表单数据
	var username = req.params.id;
	console.log(username);
  res.send('respond with a resource');
  
});


router.post('/reg', function(req, res, next) {
	
	//console.log(req.get('content-type'));
	
	 var form = new multiparty.Form({uploadDir: './public/files'});
   
    //上传完成后处理
    form.parse(req, function(err, fields, files) {
    	 	
   var username = fields.username[0];
	 var pwd = fields.pwd[0];
	 var birthday = fields.birthday[0];
   var photo = files.photo[0].originalFilename;
   
	 var obj = {_id:new Date().getTime(),uname:username,pwd:pwd,birthday:new Date(birthday),photo:photo};
	
   user.addUser(obj);
   
   console.log(files.photo[0].path);
  
   //改文件名
   fs.rename(files.photo[0].path,'./public/files/'+files.photo[0].originalFilename, function(err){
   	
   	console.log(err);
   	
   })
  
	 })
	 
  res.redirect("/index.html");
});

router.post('/login', function(req, res, next) {
	 
	//获取表单数据
	var username = req.body.username;
	var pwd = req.body.pwd;
	
	user.getUser(username, pwd, function(err, docs){
		
	   if(docs.length>0)
	   {   	
	   	  //保存当前用户信息在session里。
	   	  //req.session判断req.cookie.jsessionid,找到对应的session对象返回，如果req没有对应的jsessionid，新建一个session对象返回
	   	  req.session.user = docs[0];
	   	  res.render("index",{username:username, err:""});
	   }
	   else
	   {
	   	 
	   	  res.render("index",{username:"", err:"登录失败"});
	   }
		
	});
	
});


router.get('/getsecret', function(req, res, next) {
	
	if(req.session.user!=null)
	{
		 //可以访问
		 res.send("allow access"+req.session.user.uname);
	}
	else
	{
		res.send("must login first");
	}
	
})


router.get('/listusers', function(req, res, next) {
	
	user.queryUser(function(err, docs){
		
		res.send(docs);
		
	})
	
})

//router.delete('/users/:id', function(req, res, next) {})

//router.patch('/users/:id', function(req, res, next) {})

//router.post('/users', function(req, res, next) {})

//router.get('/users/:id', function(req, res, next) {})

router.delete('/delete/:id', function(req, res, next) {
	
	 user.deleteUser(req.params.id, function(err){
	 	
	 	   if(!err)
	 	   {
	 	   	 //删除成功了。
	 	      res.send({result:"删除成功"}); 
	 	   }
	 	   else
	 	   {
	 	   	  //出错了
	 	   	  console.log({result:"删除失败"});
	 	   }
	 })
	
})

router.post('/update', function(req, res, next) {
	
	 var id = req.body.id;
	 var username = req.body.username;
	 var pwd = req.body.pwd;
	 var birthday = req.body.birthday;
	 
	 var obj = {id:id, uname:username, pwd:pwd, birthday:new Date(birthday)};
	 	 
	 user.updateUser(obj, function(err){

	 })
	 
	 res.redirect("/users");
	
})



/*router.delete('/users/:id', function(req, res, next) {
	
	 user.deleteUser(req.params.id, function(err){
	 	
	 	   if(!err)
	 	   {
	 	   	 //删除成功了。
	 	      res.send({result:"删除成功"}); 
	 	   }
	 	   else
	 	   {
	 	   	  //出错了
	 	   	  console.log({result:"删除失败"});
	 	   }
	 })
	
})*/

router.get('/download/:photo', function(req, res, next) {
	
	 res.download("C:/Users/ttc/Documents/HBuilderProject/myexpress2/public/files/"+req.params.photo);
	
})


/*router.all('/reg', function(req, res, next) {
	//获取表单数据
	var username = req.body.username || req.query.username;
	var pwd = req.body.pwd || req.query.pwd;
	var photo = req.body.photo|| req.query.photo;
	var birthday = req.body.birthday || req.query.birthday;
	
	console.log(username);
	console.log(pwd);
	console.log(photo);
	console.log(birthday);
  res.send('respond with a resource');
});*/




module.exports = router;
