import React, { ReactNode } from 'react';
import { IonContent } from '@ionic/react';

import styles from './Main.module.scss';

interface MainProps {
  children: ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => (
  <IonContent>
    <main className={styles.main}>{children}</main>
  </IonContent>
);

export default Main;
