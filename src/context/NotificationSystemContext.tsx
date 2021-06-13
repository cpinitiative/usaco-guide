import * as React from 'react';
import NotificationSystem from 'react-notification-system';

export const NotificationSystemContext = React.createContext<{
  addNotification;
  showErrorNotification;
}>(null);

export function NotificationSystemProvider({ children }) {
  const ref = React.useRef<any>();
  const handleAddNotification = notification => {
    if (!ref.current) {
      throw 'Notification ref is undefined';
    }
    ref.current.addNotification(notification);
  };

  return (
    <NotificationSystemContext.Provider
      value={{
        addNotification: handleAddNotification,
        showErrorNotification: error => {
          console.error('Found an error', error);
          console.error(error);
          handleAddNotification({
            level: 'error',
            message: 'Error: ' + (error?.message ? error.message : error),
          });
        },
      }}
    >
      {children}
      <NotificationSystem ref={ref} />
    </NotificationSystemContext.Provider>
  );
}

export const useNotificationSystem = () => {
  const context = React.useContext(NotificationSystemContext);
  if (!context) {
    throw 'useNotificationSystem() must be used inside a NotificationSystemContext';
  }
  return context;
};
