import React, { useContext, useRef, useState } from 'react';
import {
  IonList,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonIcon,
  IonItem,
  IonThumbnail,
  IonImg,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
} from '@ionic/react';
import { close, male, female } from 'ionicons/icons';
import { GebetansContext } from 'contexts';
import { Gebetan } from 'types/interfaces';
import ActionSheet from 'components/ActionSheet';
import Toast from 'components/Toast';

import styles from './TargetGebetanList.module.scss';

const TargetGebetanList: React.FC = () => {
  const [selectedGebetan, setSelectedGebetan] = useState<Gebetan>();
  const [toastMessage, setToastMessage] = useState('');
  const [toastColor, setToastColor] = useState<
    'success' | 'warning' | 'secondary' | ''
  >('');
  const [showActionSheet, setShowActionSheet] = useState(false);

  const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null);

  const gebetansCtx = useContext(GebetansContext);

  const deleteTargetGebetanHandler = () => {
    if (selectedGebetan) {
      gebetansCtx.deleteTargetGebetan(selectedGebetan.id);
      setToastMessage(`${selectedGebetan.name} berhasil dihapus.`);
      setToastColor('secondary');
    }

    setShowActionSheet(false);
  };

  const startDeleteTargetGebetanHandler = (gebetanId: string) => {
    slidingOptionsRef.current?.closeOpened();

    const gebetan = gebetansCtx.targetGebetans.find(
      (gebetan) => gebetan.id === gebetanId
    );

    setSelectedGebetan(gebetan);
    setShowActionSheet(true);
  };

  const clearToastMessage = () => {
    setToastMessage('');
    setToastColor('');
  };

  const resetActionSheet = () => {
    setShowActionSheet(false);
  };

  return (
    <>
      <Toast
        message={toastMessage}
        colorMessage={toastColor}
        clearMessage={clearToastMessage}
      />

      <ActionSheet
        isActionSheet={showActionSheet}
        resetActionSheet={resetActionSheet}
        funcHandler={deleteTargetGebetanHandler}
      />

      {gebetansCtx.targetGebetans.length ? (
        <IonList inset className={styles.list}>
          {gebetansCtx.targetGebetans.map((gebetan) => (
            <IonItemSliding
              ref={slidingOptionsRef}
              key={gebetan.id}
              className={styles.item}
            >
              <IonItemOptions side="end">
                <IonItemOption
                  color="secondary"
                  onClick={startDeleteTargetGebetanHandler.bind(
                    null,
                    gebetan.id
                  )}
                >
                  <IonIcon icon={close} slot="icon-only" />
                </IonItemOption>
              </IonItemOptions>
              <IonItem color="tertiary">
                <IonThumbnail slot="start">
                  <IonImg src={gebetan.photo} alt="avatar" />
                </IonThumbnail>
                <IonLabel className={styles.label}>
                  <h2>{gebetan.name}</h2>
                  <p>{gebetan.bio}</p>
                  {gebetan.gender === 'male' ? (
                    <p>
                      <IonIcon
                        icon={male}
                        color="primary"
                        className={styles.icon}
                      />{' '}
                      Laki-laki
                    </p>
                  ) : (
                    <p>
                      <IonIcon
                        icon={female}
                        color="danger"
                        className={styles.icon}
                      />{' '}
                      Perempuan
                    </p>
                  )}
                </IonLabel>
              </IonItem>
            </IonItemSliding>
          ))}
        </IonList>
      ) : (
        <IonGrid>
          <IonRow>
            <IonCol size="12" className="ion-text-center">
              <p>Anda belum punya target gebetan.</p>
              <IonButton fill="solid" color="secondary" routerLink="/home">
                Cari Gebetan
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      )}
    </>
  );
};

export default TargetGebetanList;
