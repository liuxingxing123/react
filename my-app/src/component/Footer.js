import React , {Component} from 'react';
import { Link ,IndexLink} from 'react-router';
import './Footer.css';
import $ from "jquery";

class Footer extends Component{
	constructor(){
		super();
	}
	componentDidMount(){
	var url = window.location.href;
      var reg = /(login|register|jobDetail)$/;
      if(reg.test(url)){
      	var f = this.refs.foot;
      	$(f).hide();
      }
	}
	render(){
		return (
		<ul ref="foot" id="footer">
          <li><IndexLink to="/" activeClassName="active">
          	<span className="position_logo iconfont icon-wxbzhuye"></span>
         	<span className="position">职位</span>
          </IndexLink></li>
          <li><Link to="/search"  activeClassName="active" >
            <span className="search_logo iconfont icon-sousuo"></span>
         	<span className="search">搜索</span>
          </Link></li>
          <li><Link to="/self"  activeClassName="active" >
          	<span className="self_logo iconfont icon-wode"></span>
         	<span className="self">我的</span>
          </Link></li>
        </ul>)
	}
}

export default Footer