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
} from '@ionic/react';
import { heart, male, female } from 'ionicons/icons';
import { GebetansContext } from 'contexts';
import { Gebetan } from 'types/interfaces';
import Loading from 'components/Loading';
import Toast from 'components/Toast';

import styles from './CalonGebetanList.module.scss';

const CalonGebetanList: React.FC = () => {
  const [selectedGebetan, setSelectedGebetan] = useState<Gebetan>();
  const [toastMessage, setToastMessage] = useState('');
  const [toastColor, setToastColor] = useState<
    'success' | 'warning' | 'secondary' | ''
  >('');
  const [showLoading, setShowLoading] = useState(false);

  const gebetansCtx = useContext(GebetansContext);

  const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null);

  const addTargetGebetanHandler = () => {
    if (selectedGebetan) {
      const target = gebetansCtx.targetGebetans.find(
        (gebetan) => gebetan.id === selectedGebetan.id
      );

      if (!target) {
        gebetansCtx.addTargetGebetan(
          selectedGebetan.id,
          selectedGebetan.name,
          selectedGebetan.gender,
          selectedGebetan.bio,
          selectedGebetan.photo
        );
        setToastMessage(`${selectedGebetan.name} berhasil ditambahkan.`);
        setToastColor('success');
      } else {
        setToastMessage(`${selectedGebetan.name} sudah tersedia.`);
        setToastColor('warning');
      }
    }

    setShowLoading(false);
  };

  const startAddTargetGebetanHandler = (gebetanId: string) => {
    slidingOptionsRef.current?.closeOpened();

    const gebetan = gebetansCtx.daftarGebetans.find(
      (gebetan) => gebetan.id === gebetanId
    );

    setSelectedGebetan(gebetan);
    setShowLoading(true);
  };

  const clearToastMessage = () => {
    setToastMessage('');
    setToastColor('');
  };

  return (
    <>
      <Loading isLoading={showLoading} funcHandler={addTargetGebetanHandler} />

      <Toast
        message={toastMessage}
        colorMessage={toastColor}
        clearMessage={clearToastMessage}
      />

      <IonList inset className={styles.list}>
        {gebetansCtx.daftarGebetans.map((gebetan) => (
          <IonItemSliding
            ref={slidingOptionsRef}
            key={gebetan.id}
            className={styles.item}
          >
            <IonItemOptions side="end">
              <IonItemOption
                color="secondary"
                onClick={startAddTargetGebetanHandler.bind(null, gebetan.id)}
              >
                <IonIcon icon={heart} slot="icon-only" />
              </IonItemOption>
            </IonItemOptions>
            <IonItem color="tertiary">
              <IonThumbnail slot="start">
                <IonImg src={gebetan.photo} alt="thumbnail" />
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
    </>
  );
};

export default CalonGebetanList;
