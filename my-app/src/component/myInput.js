import React , {Component} from 'react';
import { Link ,IndexLink} from 'react-router';
import $ from "jquery";

class Myinput extends Component{ 
        constructor(){
        	super();
        	this.state = {
        		value:""
        	};
        	this.handleChange = this.handleChange.bind(this);
        }
        componentDidMount(){
        	if (this.props.focus) {
        		//this.refs.myinput.focus();
        		this.myInput.focus()
        	};
          
        }
        render(){
        	 let {pl="",type} = this.props;
             return (
             	   <div className=" container">
                    <input ref={(input)=>{this.myInput = input}} className="Myinput form-control" onChange={this.handleChange} type={type} placeholder={pl} />
				   </div>
             	)  
        }
        handleChange(e){

        	//如果是checkbox的 就取checked 的属性 true false

        	/*this.props.onChangeInput(e.target.value,this.props.type);*/
        	/*this.setState({
        		value:e.target.value
        	})*/
        }
  }

export default Myinput