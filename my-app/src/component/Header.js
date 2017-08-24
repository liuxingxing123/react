import React , {Component} from 'react';
import { Link} from 'react-router';
import './Header.css';
import $ from "jquery";

class Header extends Component{
	constructor(){
		super();
	}
	componentWillMount(){
		
	}
	componentDidMount(){
	  var url = window.location.href;
      var reg = /(login|register)$/;
      if(reg.test(url)){
      	var h = this.refs.head;
      	$(h).hide();
      }
     var reg1 = /(jobDetail|search)$/;
     var fanhui = this.refs.back;
     if(reg1.test(url)){
     	$(fanhui).show();
     }else{
     	$(fanhui).hide();
     }
	}
	render(){
		return (
			<div ref="head" id="header"><Link href="javascript:history.go(-1)" ><div ref="back" className="backBtn">
			</div></Link>{this.props.headerInfo}</div>
		)
	}
}

export default Header