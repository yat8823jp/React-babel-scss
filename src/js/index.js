import React from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Featured from "./page/featured";
import Archives from "./page/archives";
import Settings from "./page/settings";
import Layout from './components/layout';
import '../scss/style.scss';

const app = document.getElementById( 'app' );
ReactDOM.render(
	<Router>
		<Layout>
			<Route exact path="/" component={Featured}></Route>
			<Route exact path="/archives" component={Archives}></Route>
			<Route path="/archives/:article" component={Archives}></Route>
			<Route path="/settings/:mode(main|extra)" component={Settings}></Route>
		</Layout>
	</Router>,
app );
