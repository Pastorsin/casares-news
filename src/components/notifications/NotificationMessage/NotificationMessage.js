import './NotificationMessage.css';

import React, { Component } from 'react';

class NotificationMessage extends Component {

  render() {
    const { text, type } = this.props;

    return (
      <div className={`"NotificationMessage-"${type}`}>
        {text}
      </div>
    );
  }
}

export default NotificationMessage;
