import React from 'react';
import ReactDOM from 'react-dom';
import {Router , Route , browserHistory , IndexRoute } from 'react-router';
import './index.css';
import App from './App';

import Position from './pages/Position';
import Search from './pages/Search';
import JobDetail from './pages/JobDetail';
import Self from './pages/Self';
import Login from './pages/Login';
import Register from './pages/Register';
import Invite from './pages/Invite';
import Collect from './pages/Collect';
import Deliver from './pages/Deliver';
import Interview from './pages/Interview';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Router history={browserHistory }>
		 <Route path="/" component={App}>
    	  <IndexRoute  component={Position}/>
  		  <Route path="/search" component={Search}/>
  		  <Route path="/jobDetail" component={JobDetail}/>
 		  <Route path="/self"  component={Self}/>
 		  <Route path="/login" component={Login}/>
 		  <Route path="/register" component={Register}/>
 		  <Route path="/deliver" component={Deliver}/>
 		  <Route path="/interview"  component={Interview}/>
 		  <Route path="/invite" component={Invite}/>
 		  <Route path="/jobList" component={Position}/>
 		  <Route path="/collect" component={Collect}/>
 		 </Route>
  	</Router>
	, document.getElementById('root'));
registerServiceWorker();
