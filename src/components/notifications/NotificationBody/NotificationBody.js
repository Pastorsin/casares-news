import './NotificationBody.css';

import React, { Component } from 'react';

import NotificationRequest from '../NotificationRequest/NotificationRequest'

class NotificationBody extends Component {
	constructor(props) {
		super(props);

		this.state = {
			classNames: ["Notification"],
			hide: false
		}

		this.hide = this.hide.bind(this);
	}

	hide() {
		this.setState({
			classNames: this.state.classNames.concat("hide"),
			hide: true
		});
	}

	render() {
		const askToUser = Notification.permission === "default";
		const { hide } = this.state;

		return (
			<div className={this.state.classNames.join(" ")}>
				{(askToUser && !hide) ?
					<NotificationRequest hide={this.hide} />
					: ""}
			</div>
		);
	}
}

export default NotificationBody;