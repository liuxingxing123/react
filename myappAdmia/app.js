var express = require("express");
var bodyParser = require("body-parser");
var fs = require('fs');
var app = express();
var mongoose = require("mongoose");
var User = require("./model/model");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended:true
}));
mongoose.connect("mongodb://127.0.0.1:27017/mongo_user");
var db = mongoose.connection;//返回当前的数据库连接对象
db.on("open",function(){
	console.log("连接成功");
});
app.get('/api/positionList',function(req,res){
	fs.readFile('./json/list.json', function (err, data) {
	   if (err) {
	       return console.error(err);
	   }
	   res.json({msg:data.toString()});
	});
})
app.get('/api/getMoreData',function(req,res){
	fs.readFile('./json/data.json', function (err, data) {
	   if (err) {
	       return console.error(err);
	   }
	   res.json({msg:data.toString()});
	});
})
app.post("/api/jobdetail",function(req,res){
	let {positionId} = req.body;
	console.log(positionId)
	fs.readFile('./json/jobDetail.json', function (err, data) {
	   if (err) {
	       return console.error(err);
	   }
	   res.json({msg:data.toString()});
	});
})
app.post("/register",function(req,res){
	let {userphone,pwd} = req.body;
	var user = new User({
		userphone,
		pwd
	});
	user.save(function(err,doc){
		if(err){
			res.json({code:1,msg:"注册失败"});
			return;
		}
		res.json({code:0,msg:"注册成功"});
	});
})
app.post("/login",function(req,res){
	let {userphone,pwd} = req.body;
	User.find({userphone,pwd},function(err,doc){
		if(err)
			return;
		console.log(doc.length);//返回的是数据库中的对象  doc在此处是一个数组
		if(doc.length)
			res.json({code:1,msg:doc[0]});
		else
			res.json({code:0,msg:"用户名或密码错误，请重新输入"});
	});
	//res.json({"用户名为：":obj.username,"密码：":obj.pwd});//返回前端状态码为200  并返回json对象
});
app.listen(8090,function(){
	console.log("启动服务");
})