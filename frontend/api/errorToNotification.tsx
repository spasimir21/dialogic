import ErrorNotification from '@frontend/components/Notifications/ErrorNotification';
import { notificationAtoms } from '@libs/client/notifications/Notifications';
import { HTTPError } from '@libs/client/requestr';
import { APP_STORE } from '@frontend/store';
import React from 'react';

interface SuppressErrorNotificationConfig {
  suppressErrorNotification?: boolean;
}

const sendErrorToNotification = (error: HTTPError, config: SuppressErrorNotificationConfig) => {
  if (config?.suppressErrorNotification === true) return error;

  APP_STORE.set(notificationAtoms, {
    type: 'insert',
    value: {
      action: () => {},
      opened: true,
      content: <ErrorNotification message={error.message} />
    }
  });

  return error;
};

export { SuppressErrorNotificationConfig, sendErrorToNotification };
