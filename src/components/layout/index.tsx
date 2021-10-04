import React, { ReactNode } from 'react';
import { IonPage } from '@ionic/react';
import { Header } from './Header';
import { Main } from './Main';

interface LayoutProps {
  title: string;
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => (
  <IonPage>
    <Header title={title} />
    <Main children={children} />
  </IonPage>
);

export default Layout;
