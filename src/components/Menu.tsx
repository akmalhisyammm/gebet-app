import React from 'react';
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonMenuToggle,
  IonItem,
  IonLabel,
  IonIcon,
} from '@ionic/react';
import { list, locate, person } from 'ionicons/icons';

const Menu: React.FC = () => (
  <IonMenu contentId="main">
    <IonHeader>
      <IonToolbar color="secondary">
        <IonTitle>Gebetapp</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonList>
        <IonMenuToggle>
          <IonItem button routerLink="/home">
            <IonIcon slot="start" color="secondary" icon={list} />
            <IonLabel>Daftar Calon Gebetan</IonLabel>
          </IonItem>
          <IonItem button routerLink="/target">
            <IonIcon slot="start" color="secondary" icon={locate} />
            <IonLabel>Target Gebetan</IonLabel>
          </IonItem>
          <IonItem button routerLink="/profile">
            <IonIcon slot="start" color="secondary" icon={person} />
            <IonLabel>Profil</IonLabel>
          </IonItem>
        </IonMenuToggle>
      </IonList>
    </IonContent>
  </IonMenu>
);

export default Menu;
