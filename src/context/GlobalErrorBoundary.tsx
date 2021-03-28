import * as React from 'react';
import { NotificationSystemContext } from './NotificationSystemContext';

export default class GlobalErrorBoundary extends React.Component {
  static contextType = NotificationSystemContext;

  componentDidCatch(error, info) {
    console.error('Caught error:', error, info);
    this.context.showErrorNotification(error);
  }

  render() {
    return this.props.children;
  }
}
