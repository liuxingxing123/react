import React , {Component} from 'react';
import PositionItem from './PositionItem';

class PositionItems extends Component{
	constructor(){
         super();
	}
	render(){
		var list = this.props.list.map((item,index) => {
			return <PositionItem item = {item} key={index}/>;
		});
		return (
			   <div className="list">
                    {list}
			   </div>
			)
	}
	
}

export default PositionItems