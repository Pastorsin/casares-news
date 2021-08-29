import './NotificationRequest.css';

import React, { Component } from 'react';

import NotificationHideButton from '../NotificationHideButton/NotificationHideButton'
import NotificationMessage from '../NotificationMessage/NotificationMessage'
import NotificationSuscribeButton from '../NotificationSuscribeButton/NotificationSuscribeButton'

class NotificationRequest extends Component {
	constructor(props) {
		super(props);

		this.state = {
			message: {
				text: "",
				type: ""
			},
			buttons: []
		};
	}

	componentDidMount() {
		this.setState({
			message: {
				text: "¿Desea recibir notificaciones sobre las últimas noticias?",
				type: "info"
			},
			buttons: [
				<NotificationHideButton
					text="No, gracias"
					hide={this.props.hide}
					key="hide-button" />,

				<NotificationSuscribeButton
					text="Sí"
					updateMessage={this.updateMessage.bind(this)}
					updateButtons={this.updateButtons.bind(this)}
					hide={this.props.hide}
					key="suscribe-button" />
			]
		})
	}

	updateMessage(message) {
		this.setState({
			message: message
		});
	}

	updateButtons(buttons) {
		this.setState({
			buttons: buttons
		});
	}

	render() {
		const { buttons, message } = this.state;

		return (
			<div>
				<NotificationMessage
					text={message.text}
					type={message.type} />

				{buttons}
			</div>
		);
	}
}

export default NotificationRequest;
