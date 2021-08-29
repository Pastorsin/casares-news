import './NotificationHideButton.css';

import React, { Component } from 'react';

class NotificationHideButton extends Component {

  render() {
    const { hide, text } = this.props;

    return (
      <button className="NotificationHideButton" onClick={hide}>
        {text}
      </button>
    );
  }
}

export default NotificationHideButton;
