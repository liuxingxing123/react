import React , {Component} from 'react';
import { Link} from 'react-router';
import $ from "jquery";
import './AddressItem.css';


class AddressItem extends Component{
	constructor(){
		super();
	}
	componentDidMount(){
	
	}
	render(){
		return (
			<div className="CityItem">
				<div>
					<div className="upperCity">
						
					</div>
					<div className="cityLink">
					
					</div>
				</div>
			</div>
		);
	}
}
export default AddressItem