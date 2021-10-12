import React from 'react';
import {
  IonCard,
  IonImg,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonRouterLink,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/react';
import { logoGithub, logoInstagram, logoLinkedin } from 'ionicons/icons';

import styles from './ProfileCard.module.scss';

const ProfileCard: React.FC = () => (
  <IonGrid>
    <IonRow>
      <IonCol size="12" className={styles.cardWrapper}>
        <IonCard color="tertiary" className={styles.card}>
          <IonImg
            src="/assets/images/akmal.jpg"
            alt="profile"
            className={styles.cardImage}
          />
          <IonCardHeader className={styles.cardHeader}>
            <IonCardTitle className={styles.cardHeaderTitle}>
              Muhammad Akmal Hisyam
            </IonCardTitle>
            <IonCardSubtitle>00000040027</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <div className={styles.socialMediaWrapper}>
              <IonRouterLink
                href="https://github.com/akmalhisyammm"
                target="_blank"
                className={styles.socialMedia}
              >
                <IonIcon icon={logoGithub} className={styles.icon} />
              </IonRouterLink>
              <IonRouterLink
                href="https://linkedin.com/in/muhammadakmalhisyam/"
                target="_blank"
                className={styles.socialMedia}
              >
                <IonIcon icon={logoLinkedin} className={styles.icon} />
              </IonRouterLink>
              <IonRouterLink
                href="https://instagram.com/akmalhisyam1/"
                target="_blank"
                className={styles.socialMedia}
              >
                <IonIcon icon={logoInstagram} className={styles.icon} />
              </IonRouterLink>
            </div>
          </IonCardContent>
        </IonCard>
      </IonCol>
    </IonRow>
  </IonGrid>
);

export default ProfileCard;
