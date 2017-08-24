import React, {
	Component
} from 'react';
import $ from "jquery";
import './JobDetail.css';
import Button from "../component/Button";

class JobDeatil extends Component {
	constructor() {
		super();
	}
	componentWillMount(){
		var positionId = localStorage.getItem("positionid") || "3448504";
		$.post("/api/jobdetail",{
			positionId
		},function(data){
			var dataArr = JSON.parse(data.msg);
			dataArr.forEach(function(response){
				var {positionName,salary,city,gzrc,gzTime,xlNeed,zwyouhuo,canpLogoSrc,canpName,canpState,positionDetail,positionNeed,mspjNum} = response;
				if(positionId == response.positionId){
					$(".title").html(positionName);
					$(".text").eq(0).html(salary);
					$(".text").eq(1).html(city);
					$(".text").eq(2).html(gzrc);
					$(".text").eq(3).html(gzTime);
					$(".text").eq(4).html(xlNeed);
					$(".temptation").html(zwyouhuo);
					$(".logo").attr("src","http:"+canpLogoSrc);
					$(".dleft .title").html(canpName);
					$(".info").html(canpState);
					var htmldetail = "";
					var htmlneed = "";
					for(var i=0;i<positionDetail.length;i++){
						htmldetail +="<p>"+positionDetail[i]+"</p>";
					}
					$(".jobdetail").html(htmldetail);
					for(var j=0;j<positionNeed.length;j++){
						htmlneed+="<p>"+positionNeed[j]+"</p>";
					}
					$(".jobneed").html(htmlneed);
					$(".mspj span").html(mspjNum);
				}
			})
		})
	}
	componentDidMount(){
		var m=0;
		$("#detail").find(".notcoll").on("click",function(){
			if(m%2==0){
			$(this).css({
				"backgroundPosition":"-304px -82px"
			});
			$(".text1").html("已收藏")
			}else{
				$(this).css({
				"backgroundPosition":"-342px -87px"
			});
			$(".text1").html("未收藏")
			}
			m++;
		});
		
	}
	render() {
		return(
			<div id="detail">
			<div id="jobDetail">
				<div className="positionName">
					<h2 className="title">web前端开发工程师</h2>
					<div className="collicon">
					<span className="icon notcoll"></span>
					<span className="text1">未收藏</span>
					</div>
				</div>
				<div className="detail">
		            <div className="items clearfix">
		                                    <span className="item salary">
		                        <em className="icon"></em>
		                        <span className="text">15k-25k</span>
		                    </span>
		                                                    <span className="item workaddress">
		                        <em className="icon"></em>
		                        <span className="text">北京</span>
		                    </span>
		                                                    <span className="item jobnature">
		                        <em className="icon"></em>
		                        <span className="text">全职</span>
		                    </span>
		                                                    <span className="item workyear">
		                        <em className="icon"></em>
		                        <span className="text">3-5年</span>
		                    </span>
		                                                    <span className="item education">
		                        <em className="icon"></em>
		                        <span className="text">
		                            本科及以上                        </span>
		                    </span>
		                            </div>
				            <div className="temptation">
		               		 职位诱惑：行业独角兽,项目奖金,免费图书,定期团建
		            		</div>
      			  </div>
      			  <div className="company clearfix">
            <img src="http://static.lagou.com/i/image/M00/11/9A/Cgp3O1biWaKABjiEAASTrSzDg0Y979.png" alt="" className="logo" />
            <div className="desc">
                <div className="dleft">
                    <h2 className="title">图灵机器人</h2>
                    <p className="info">移动互联网/ B轮/ 150-500人</p>
                </div><span className="dright"></span></div>
        	</div>
        	<header className="header">职位描述</header>
        	<div className="zwms">
	        	<div className="positiondetail">
	        		<h4>岗位职责:</h4>
	        		<div className="jobdetail">
	        		<p>与产品经理、UI工程师配合，完成web端、微信端H5页面功能的前端代码开发工作，工作包含；</p>
	        		<p>1.页面数据处理、交互开发；</p><p> 2.Web接口设计与开发；</p>
	        		<p> 3.Html/css代码质量控制。</p></div>
	        	</div>
	        	<div className="positioneed">
	        		<h4>岗位要求:</h4>
	        		<div className="jobneed">
	        		<p>1.3年以上前端开发经验，有完整的前端项目经验；</p>
	        		<p>2.熟练使用主流UI框架 Bootstrap，Easyui，Aui，Vui等；</p>
	        		<p>3.熟练使用Ajax，Jsonp，webSocket实现页面的数据交互；</p>
	        		<p>4.熟悉Node.JS、express 框架，使用mysql 模块与后台数据库进行交互；</p>
	        		<p>5.熟悉HTML5、CSS3的优先</p>
	        		<p>6.良好的编码习惯、沟通协作能力和学习能力；</p>
	        		<p>7.对前端新技术和新应用有浓厚的兴趣。</p></div>
	        	</div>
        	</div>
        	<div className="mspj">面试评价 (<span>0</span>)</div>
        	<ul className="list"><li className="list-item-empty list-item">暂无面试评价</li></ul>
			</div>
			<Button name="投递简历"/>
			</div>
		)
	}
}

export default JobDeatil