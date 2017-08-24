import React , {Component} from 'react';
import Myinput from "../component/myInput";
import Button from "../component/Button";
import { Link} from 'react-router';
import $ from "jquery";
import './Login.css';

class Login extends Component{
		constructor(){
			super();
			this.handleSubmit = this.handleSubmit.bind(this);
		}
		componentDidMount(){
			 $(":password").addClass("pwdChange");
			 var m=0;
			$("#form1").on("click",".see-pwd-img",function(){
				if(m % 2==0){
					$(this).css("top","-28px");
			    	$('.pwdChange').attr("type","text");
				}else{
					$(this).css("top","1px");
					$('.pwdChange').attr("type","password");
				}
				m++
			});
		}
		render(){
			return (
				<div id='form1'>
					<Myinput onChangeInput={this.handleChangeInput}  focus={true} name="username" type="text" pl="已验证手机/邮箱" />
					<Myinput  onChangeInput={this.handleChangeInput} name="pwd" type="password" pl="密码" />
					<span className="seePwd"><img className="see-pwd-img" title="密码可见" src="./img/psweye_930f545.png"/></span>
					<Button onClick={this.handleSubmit}   name="登录" />
					<p className="zhanghaoHased">还没账号?</p>
					<Link to="/register" ><button className="regiserBtn"  value="注册" >注册</button></Link>
					<div className="loginInfo"></div>
				</div>
			);
		}
		handleSubmit(){
			var userphone = $("#form1").find(".container input").eq(0).val();
			var pwd = $("#form1").find(".container input").eq(1).val();
			if(!userphone || !pwd){
				alert("用户名或密码不能为空");
				return;
			}
			$.post("/login",{userphone,pwd},function(data){
				if(data.code){
					localStorage.setItem("user",data.msg.userphone);
					$("#form1").find(".loginInfo").html("登陆成功，五秒后跳转到个人中心").css("color","white").show().stop().fadeOut(4000);
					setTimeout(function(){
						window.location.href="http://localhost:3000/self";
					},5000);
				}else{
					$("#form1").find(".loginInfo").html(data.msg).css("color","red").show().stop().fadeOut(4000);
				}
			})
		}
	}	

export default Login