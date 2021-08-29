import './NotificationSuscribeButton.css';

import * as http from 'services/notification'
import * as subscription from 'helpers/notifications/subscription.js'

import React, { Component } from 'react';

import LoadingBar from "components/snippets/LoadingBar/LoadingBar";
import NotificationHideButton from '../NotificationHideButton/NotificationHideButton'

class NotificationSuscribeButton extends Component {

  constructor(props) {
    super(props);

    this.state = {
      disabled: false
    }
  }

  suscribe() {
    this.disableButton();
    this.showLoadMessage();
    this.suscribeUser();
  }

  disableButton() {
    this.setState({
      disabled: true
    });
  }

  showLoadMessage() {
    this.props.updateMessage({
      text: <LoadingBar size="small" />,
      type: "info"
    });

    this.props.updateButtons([]);
  }

  async suscribeUser() {
    const existsSuscription = await subscription.alreadyExist();

    if (existsSuscription) {
      this.showError();
      console.error("Error, suscription already exists");
    } else {

      try {
        const newSubscription = await subscription.subscribeUser();
        await http.postSubscription(newSubscription);

        this.showSuccess();
        console.log("Success suscription");

      } catch (error) {

        if (Notification.permission === 'denied') {
          this.props.hide();
          console.log('Permission was not granted');
        } else {
          this.showError();
          console.error('An error ocurred during the subscription process', error);
        }

      }
    }
  }

  showError() {
    this.props.updateMessage({
      text: "Ha ocurrido un error inténtelo más tarde porfavor.",
      type: "error"
    });

    this.done();
  }

  showSuccess() {
    this.props.updateMessage({
      text: "Suscripción realizada con éxito",
      type: "success"
    });

    this.done();
  }

  done() {
    this.props.updateButtons([
      <NotificationHideButton
        text="Entendido."
        hide={this.props.hide}
        key="hide-button" />
    ])
  }

  render() {
    const { text } = this.props;

    return (
      <button
        className="NotificationSuscribeButton"
        onClick={this.suscribe.bind(this)}
        disabled={this.state.disabled}>
        {text}
      </button>
    );
  }

}

export default NotificationSuscribeButton;
