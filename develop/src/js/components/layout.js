import React from 'react';
import { NavLink, Link, withRouter } from "react-router-dom";
import Header from './header';
import Footer from './footer';

class Layout extends React.Component {
	navigate() {
		this.props.history.push( "/" );
	}
	render() {
		return  (
			<div>
				<Header></Header>
				{ this.props.children }
				<Link to="/chat" class="btn btn-warning">Chat</Link>
				<Link to="/archives/some-other-articles?date=yesterday&filter=none" class="btn btn-warning">archives (some other articles)</Link>
				<Link to="/archives?date=today&filter=hot" className="btn btn-danger">archives</Link>
				<NavLink to="/settings/main" className="btn btn-success" activeClassName="btn-danger">settings</NavLink>
				<Link to="/settings/extra" className="btn btn-success">settings (extra)</Link>
				<button className="btn btn-info" onClick={this.navigate.bind( this )}>featured</button>
			</div>
		)
	}
}
export default withRouter( Layout );
