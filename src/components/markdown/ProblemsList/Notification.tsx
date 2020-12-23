import React, { Component } from 'react';
import Notifications, { notify } from 'react-notify-toast';

class Notification extends Component {
  render() {
    const myColor = { background: '#0E1717', text: '#FFFFFF' };
    return notify.show('this is sample text', 'custom', 5000, myColor);
  }
}

export default Notification;
