import React, { Component } from "react";

export default class Chat extends React.Component {
	render () {
		const query = new URLSearchParams( this.props.search );
		return  (
			<h1>Chat</h1>
		)
	}
}
