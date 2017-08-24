import React , {Component} from 'react';
import Myinput from "../component/myInput";
import { Link} from 'react-router';
import Button from "../component/Button";
import $ from "jquery";
import './Register.css';
import PropTypes from 'prop-types';


class Register extends Component{
		constructor(){
			super();
			this.state = {
				username:null,
				pwd:null,
				yzm:"1f7g"
			}
			this.handleSubmit = this.handleSubmit.bind(this);
		}
		componentWillMount(){
			var arr = ["a","b",'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
						,'1','2','3','4','5','6','7','8','9','0','A','B','C','D','E','F','G','H','I','K','J','L','M','N',
						'O','P','Q','R','S','T','U','V','W','X','Y','Z'];
			var arrYzm=[];
			for(var i=0;i<4;i++){
				var m=Math.floor(Math.random()*63);
				arrYzm.push(arr[m]);
			}
			var yzmstring = arrYzm.join("");
			this.setState({
				yzm:yzmstring
			})
		}
		componentDidMount(){
			var _this = this;
			$("#changeYzm").on("click",function(){
			var arr = ["a","b",'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
						,'1','2','3','4','5','6','7','8','9','0','A','B','C','D','E','F','G','H','I','K','J','L','M','N',
						'O','P','Q','R','S','T','U','V','W','X','Y','Z'];
			var arrYzm=[];
			for(var i=0;i<4;i++){
				var m=Math.floor(Math.random()*63);
				arrYzm.push(arr[m]);
			}
			var yzmstring = arrYzm.join("");
			_this.setState({
				yzm:yzmstring
			})
			});
			var m=0;
			 $(":password").addClass("pwdChange");
			$("#form").on("click",".see-pwd-img",function(){
				if(m % 2==0){
					$(this).css("top","-28px");
			    	$('.pwdChange').attr("type","text");
				}else{
					$(this).css("top","1px");
					$('.pwdChange').attr("type","password");
				}
				m++
			});
			 $(":text").eq(0).addClass("user-yz");
			 $(":text").eq(1).addClass("yzm-yz");
			
			
			$("#form").on("blur",".user-yz",function(){
				var userReg = /^1\d{10}$/;
				var userphone = $(".user-yz").val();
				var trueOrFalse = userReg.test(userphone);
				if(trueOrFalse){
					$(".userYZ").hide();
				}else{
					$(".userYZ").show();
				}
			});
			
			$("#form").on("blur",".yzm-yz",function(){
				var shuruValue = $(this).val();
				var scYZM = $(".shencheng").html();
				if(shuruValue == scYZM){
					$("#form").find(".yzmYZ").hide();
				}else{
					$("#form").find(".yzmYZ").show();
				}
			})
			
			$("#form").on("blur",".pwdChange",function(){
				var pwdReg = /^\w{6,16}$/;
				var pwdValue = $(this).val();
				if(pwdReg.test(pwdValue)){
					$("#form").find(".pwdYZ").hide();	
				}else{
					$("#form").find(".pwdYZ").show();	
				}
				
			});
		}
		render(){
			return (
				<div id='form'>
					<Myinput onChangeInput={this.handleChangeInput}  focus={true} name="username" type="text" pl="手机号" />
					  <div className="userYZ yzcom">手机号格式错误</div>
					<Myinput onChangeInput={this.handleChangeInput}   type="text" pl="请证明你不是机器人" />
					 <div className="yzmYZ yzcom">请输入正确的验证码(区分大小写)</div>
					 <div className="form-group">
					    <div  className="shencheng col-sm-5">
					      {this.state.yzm}
					    </div>
					     <label htmlFor="inputEmail3" className="col-sm-2 control-label">看不清楚, &nbsp;<a id="changeYzm">换一张</a></label>
					  </div>
					 
				    <Myinput  type="password" name="pwd" className="form-control pwd" id="inputSuccess3" aria-describedby="inputSuccess3Status" pl="请输入6-16位密码" />
				    <span className="seePwd"><img className="see-pwd-img" title="密码可见" src="./img/psweye_930f545.png"/></span>
				     <div className="pwdYZ yzcom">6-16位密码</div>
					<Button  onClick={this.handleSubmit}   name="注册" />
					<p className="zhanghaoHased">已有账号?</p>
					<Link className="login-href" to="/login"><button  className="loginBtn"  name="登录">登录</button></Link>
					<div className="register_text">点击注册，即代表您同意
					<a href="http://www.lagou.com/privacy.html" className="xieyi" target="_blank">《拉勾用户协议》</a></div>
				</div>
			);
		}
		handleSubmit(){
			var pwd = $(".pwdChange").val(),userphone = $(".user-yz").val();
			if(!pwd || !userphone){
				alert("请注册...");
				return;
			}
			$.post("/register",{userphone,pwd},function(data){
				if(data.code == 0){
					alert(data.msg+"! ,两秒后跳转到登录页面");
					setTimeout(function(){
						window.location.href="http://localhost:3000/login";
					},2000);
				}else{
					alert(data.msg+"请重新注册");
					return;
				}
			})
		}
	}	

export default Register