import React , {Component} from 'react';
import { Link} from 'react-router';
import $ from "jquery";
import './Search.css';
import Address from '../component/Address'

class Search extends Component{
	constructor(){
		super();
	}
	componentDidMount(){
		$("#searchPage").find(".search").click(function(){
			var _this= this;
			$(_this).css({
				"background-color":"#f6f6f6"
			});
			setTimeout(function(){
				$(_this).css({
					"background-color":"#fff",
				});
				$(_this).find("i").css("color","#cdd8d5")
			},2000);
			$("#searchPage").find(".searchIcon").css("color","#2bb9a9");
			$(".linputer").show();
		})
		
		$("#searchPage").find(".lbutton").click(function(){
			$("#address").show();
			$(".linputer").hide();
		})
	}
	render(){
		return (
			<div id="searchPage">
			<div className="content">
			<div className="linputer">
	            <div className="lbutton">
	                <span className="city">全国</span>
	                <span className="cityicon"></span>
	            </div>
	            <div className="rinput">
	                <input className="inputer" type="text" placeholder="搜索职位或公司" />
	                <span className="search"><i className="iconfont searchIcon icon-sousuo"></i></span>
	            </div>
       		</div>
       		<Address />
		</div>
		
		</div>)
	}
}

export default Search