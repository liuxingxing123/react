var mongoose = require("mongoose");
var userSchema = require("../schema/schema");//调用生成的格式借口  生成model实例来操作数据库
var User = mongoose.model("userRegister",userSchema);//返回的是model实例
//这里其实创建的是users集合   后面的s是自动加上的   mongoose创建集合的机制
module.exports = User;