import React from 'react';
import { IonLoading } from '@ionic/react';

interface LoadingProps {
  isLoading: boolean;
  funcHandler: () => void;
}

const Loading: React.FC<LoadingProps> = ({ isLoading, funcHandler }) => (
  <IonLoading
    isOpen={isLoading}
    onDidDismiss={funcHandler}
    spinner="bubbles"
    duration={1500}
    cssClass="loading"
  />
);

export default Loading;
