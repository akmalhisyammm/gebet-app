import React from 'react';
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonAvatar,
  IonImg,
  IonTitle,
  IonRouterLink,
  IonBackButton,
} from '@ionic/react';

import styles from './Header.module.scss';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <IonHeader>
    <IonToolbar color="tertiary">
      <IonButtons slot="start">
        {title === 'Profil' ? (
          <IonBackButton defaultHref="/" />
        ) : (
          <IonMenuButton />
        )}
      </IonButtons>
      <IonRouterLink slot="end" routerLink="/profile">
        <IonAvatar className={styles.avatar}>
          <IonImg src="/assets/images/akmal.jpg" alt="avatar" />
        </IonAvatar>
      </IonRouterLink>
      <IonTitle>{title}</IonTitle>
    </IonToolbar>
  </IonHeader>
);

export default Header;
