import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './routes/Home.js';
import Store from './routes/Store.js';

const app = document.getElementById('app');
ReactDom.render(
	<Router>
	  <Switch>
	    <Route exact path='/' component={Home} />
	    <Route path='/store' component={Store} />
	  </Switch>
	</Router>
, app);