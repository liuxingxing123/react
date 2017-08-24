import React , {Component} from 'react';
import './PositionItem.css';
 import { Link ,IndexLink} from 'react-router';
 import $ from "jquery";

class PositionItem extends Component{
	constructor(){
         super();
         this.handleDetail = this.handleDetail.bind(this);
	}
	componentDidMount(){
		
	}
	render(){
		var  {positionId,companyId,companyLogo,companyName,positionName,city,salary,createTime} = this.props.item;
		var companyLogo = "http://static.lagou.com/"+companyLogo;
		return (<li onClick={this.handleDetail} data-jobInfo={this.props.item}  className="list-item" data-positionid={positionId} data-companyid={companyId}>
			<Link to="/jobDetail">
		            <img src={companyLogo} className="item-logo" />
		            <div className="item-desc">
		                <h2 className="item-title">{companyName}</h2>
		                <p className="item-info">
		                    <span className="item-pos">
		                        {positionName}[ {city} ]
		                    </span>
		                    <span className="item-salary">{salary}</span>
		                </p>
		                <p className="item-time">{createTime}</p>
		            </div>
		           </Link>
        	   </li>
			)
	}
	handleDetail(e){
		var id= $(e.target).parents(".list-item").data("positionid");
		localStorage.setItem("positionid",id);
	}
}

export default PositionItem