import React , {Component} from 'react';
import { Link} from 'react-router';
import $ from "jquery";
import './Address.css';

class Address extends Component{
	constructor(){
		super();
		this.state={
			addressArray:[{"cityList":["北京","上海","广州","深圳","成都","杭州"],"name":"热门城市","nameStr":"热门城市"},
		{"cityList":["安庆","安阳","保定","北京","包头","长春","成都","重庆","长沙","常州","郴州","东莞","大连","达州","佛山","阜阳","福州"],"name":"","nameStr":"ABCDEF"},
		{"cityList":["桂林","贵阳","广州","哈尔滨","合肥","呼和浩特","海口","衡水","杭州","惠州","湖州","金华","九江","江门","济南","济宁","嘉兴","荆州"],"name":"","nameStr":"GHIJ"},
		{"cityList":["昆明","聊城","廊坊","丽水","临沂","洛阳","连云港","兰州","柳州","泸州","马鞍山","茂名","眉山","绵阳","梅州","宁波","南昌","南京","南宁","南通","南阳"],"name":"","nameStr":"KLMN"},
		{"cityList":["青岛","秦皇岛","清远","泉州","衢州","日照"],"name":"","nameStr":"OPQR"},
		{"cityList":["上海","石家庄","汕头","绍兴","沈阳","三亚","深圳","苏州","天津","唐山","太原","台州"],"name":"","nameStr":"STUV"},
		{"cityList":["潍坊","武汉","芜湖","威海","乌鲁木齐","无锡","温州","西安","香港特别行政区","厦门","西宁","咸阳","徐州","银川","盐城","宜昌","烟台","扬州","淄博","珠海","镇江","湛江","肇庆","中山","郑州","漳州","株洲"],"name":"","nameStr":"WXYZ"}]
			

		}
	}
	componentDidMount(){
		var list = this.state.addressArray;
		var html="";
		list.forEach(function(addItem,index){
			html += `<div class="upperCity">
						${addItem.nameStr}
						</div>`;
			for(var i=0;i<list[index].cityList.length;i++){
				html+=`<div class="citybox" style="overflow:hidden">${list[index].cityList[i]}</div>`;
			}
			
		});
		$("#address").append(html)
		$("#address").on("click",".citybox",function(){
			var _this = this;
			$(_this).css("background","#e8e8e8");
			
			setTimeout(function(){
				$(_this).css("background","#fff");
			},2000);
			var text = $(this).html();
			$("#searchPage").find(".city").html(text);
			$("#searchPage").find(".linputer").show();
			$("#searchPage").find("#address").hide()
		});
		$("#searchPage").find(".search").on("click",function(e){
			var _this = this;
			var dizhi = $("#searchPage").find(".city").html();
			var zhiwei = $("#searchPage").find(".inputer").val();
			if(dizhi == "全国" || !zhiwei){
				alert("请选择你心目中的工作地址，输入你的职位");
				return;
			}else{
				$.get("/api/getMoreData").then(function(data){
					var jobList = JSON.parse(data.msg).data;
					var arr = [];
					
					jobList.forEach(function(job){
						if(dizhi == job.city && job.positionName.indexOf(zhiwei)!==-1){
							arr.push(job);
						}
					})
					
					var html1="";
					arr.forEach(function(item){
					var  {positionId,companyId,companyLogo,companyName,positionName,city,salary,createTime} = item;
					var companyLogo = "http://static.lagou.com/"+companyLogo;
						html1 +=`<li  class="list-item" data-positionid=${positionId} data-companyid=${companyId}>
									<a href="http://localhost:3000/jobDetail">
								            <img src=${companyLogo} class="item-logo" />
								            <div class="item-desc">
								                <h2 class="item-title">${companyName}</h2>
								                <p class="item-info">
								                    <span class="item-pos">
								                        ${positionName}[ ${city} ]
								                    </span>
								                    <span class="item-salary">${salary}</span>
								                </p>
								                <p class="item-time">${createTime}</p>
								            </div>
								           </Link>
						        	   </li>`;
						        	   
					});
				$("#searchPage").append(html1)
				});
			}
		})
		
		$("#searchPage").on("click",".list-item",function(){
			var id= $(this).data("positionid");
			localStorage.setItem("positionid",id);
		})
		
	}
	
	render(){
		return (<div id="address">
				
		</div>)
	}
}

export default Address