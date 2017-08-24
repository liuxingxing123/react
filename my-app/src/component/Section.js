import React , {Component} from 'react';
import './Section.css';
import $ from  "jquery";
import PositionItems from './PositionItems';
import PropTypes from 'prop-types';
 import { Link ,IndexLink} from 'react-router';
 
 
class Section extends Component{
	constructor(){
		super();
		this.state={
			headerInfo:"拉勾网",
			positionList:[]
		};
		this.handleLoadMore = this.handleLoadMore.bind(this);
	}
	componentWillMount(){
		var _this = this;
		$.get("/api/positionList",function(data){
			_this.setState({
				positionList:JSON.parse(data.msg).result
			})

		})
	}
	componentDidMount(){
		
	}
	render(){
		return (
			<div id="section">
					<article>
						<div className="custom-info none" >
				            <span className="info">10秒钟定制职位</span>
				            <Link className="go" to="/self">
				                <em className="iconfont icon-bianji" ></em>
				                <em className="text">编辑</em>
				            </Link>
				        </div>
							<PositionItems list={this.state.positionList} />
					<div id="loadMore" onClick={this.handleLoadMore}>加载更多</div>
					<div id="copyright"><p>©2015 lagou.com, all right reserved </p>
						<div className="copyright-item"><span className="phone active">移动版&nbsp;·&nbsp;</span>
						<span className="computer">电脑版&nbsp;·&nbsp;</span><a href="#header">回顶部</a></div>
					</div>
				</article>
			</div>
		)
	}
	handleLoadMore(e){
		var _this = this;
		var m=0;
		$("#section").off().on("click","#loadMore",function(){
		$.get("/api/getMoreData",function(data){
			var arr = JSON.parse(data.msg).data;
			var n = Math.floor(Math.random()*arr.length);
			if(n>arr.length-5)   n=n-5;
			var arr1 = arr.slice(n,n+5);
		arr1.forEach (function(listItem){
			_this.setState({
				positionList:[..._this.state.positionList,listItem]
			})
			})
			

		})
		})
	}
}
Section.propTypes = {
	positionList : PropTypes.array
}

export default Section