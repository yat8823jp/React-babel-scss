import React from 'react';
import Title from './header/title';

export default class Header extends React.Component {
	handleChange( e ) {
		const title = e.target.value;
		this.props.changeTitle( title );
	}
	render() {
		return (
			<header>
				<h1>
					Rish Chat App
				</h1>
			</header>
		)
	}
}
