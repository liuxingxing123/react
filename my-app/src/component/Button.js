import React , {Component} from 'react';
import { Link ,IndexLink} from 'react-router';
import $ from "jquery";
import './Button.css';

class Button extends React.Component{
		constructor(){
			super();
			this.handleSubmit = this.handleSubmit.bind(this);
		}
		render(){
			return (
				<div className="container">
					<button  onClick={this.handleSubmit} className="btn-login btn_green btn btn-success btn-block">
					{this.props.name}</button>
				</div>
			);
		}
		handleSubmit(e){
			this.props.onClick();
		}
	}

export default Button