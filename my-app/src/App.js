import React, { Component } from 'react';
import Footer from './component/Footer';
import { Link ,IndexLink} from 'react-router';
import $ from "jquery";
import './App.css';
import Header from './component/Header';

class App extends Component {
	constructor(){
		super();
		this.state={
			headerInfo:"拉勾网"
		}
	}
	componentWillMount() {
		 var url = window.location.href;
     var reg = /jobDetail$/;
      if(reg.test(url)){
      	this.setState({
      		headerInfo:"职位详情"
      	})
      }
  }
	
  render() {
    return (
      <div className="App">
      	<Header ref="head" style={this.state.style}  headerInfo={this.state.headerInfo}/>
       	{this.props.children}
       	<Footer />
      </div>
    );
  }
}

export default App;
