import React , {Component} from 'react';
import { Link ,IndexLink} from 'react-router';
import $ from "jquery";
import './Self.css';

class Self extends Component{
	constructor(){
		super();
		this.state={
			user:""
		}
	}
	componentWillMount(){
		var usermsg = localStorage.getItem("user");
		if(usermsg)
		this.setState({
			user:usermsg
		})
	}
	componentDidMount(){
		var usermsg = localStorage.getItem("user");
		if(usermsg){
		$("#userInfo ").find('.loginbut').hide();
		$("#userInfo ").find('.haslogin').show();
		$("#userInfo ").find('.closeBtn').show();
		}else{
		$("#userInfo ").find('.loginbut').show();
		$("#userInfo ").find('.haslogin').hide();
		$("#userInfo ").find('.closeBtn').hide();
		}
		var _this = this;
		$("#userInfo ").find('.closeBtn').on("click",function(){
			_this.setState({
				user:""
			})
			$("#userInfo ").find('.loginbut').show();
			$("#userInfo ").find('.haslogin').hide();
			$("#userInfo ").find('.closeBtn').hide();
		});
		
	}
	render(){
		return (<div id="userInfo">
			<div className="container  haslogin center">
               <a className="button" href="http://www.lagou.com/center/preview.html" target="_self"> 简历&gt; </a>
	               <div className="headcon">
	          		 <img className="headpic" src="./img/default_headpic.png" />
	               </div>
                    <div className="name">{this.state.user}</div>
                  
                </div>
                <Link className="loginbut" to="/login" >登录 / 注册</Link>
            <ul className="oul">
            <Link to="/deliver"><li>投递</li></Link>
            <Link to="/interview"><li>面试</li></Link>
            <Link to="/invite"><li>邀约</li></Link>
            <Link to="/collect"><li>收藏</li></Link>
            </ul>
            <Link className="closeBtn" to="/self">退出登录</Link>
		</div>)
	}
}

export default Self