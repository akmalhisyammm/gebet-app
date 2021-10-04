import React from 'react';
import { IonToast } from '@ionic/react';

interface ToastProps {
  message: string;
  colorMessage: string;
  clearMessage: () => void;
}

const Toast: React.FC<ToastProps> = ({
  message,
  colorMessage,
  clearMessage,
}) => (
  <IonToast
    isOpen={!!message && !!colorMessage}
    onDidDismiss={clearMessage}
    message={message}
    color={colorMessage}
    duration={2000}
  />
);

export default Toast;
