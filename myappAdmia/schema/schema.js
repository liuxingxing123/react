var mongoose = require("mongoose");
var userSchema = mongoose.Schema({//定义格式  它并没有操作数据库的能力
	userphone:String,
	pwd:String
});
module.exports = userSchema;