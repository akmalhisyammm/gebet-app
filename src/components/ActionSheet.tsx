import React from 'react';
import { IonActionSheet } from '@ionic/react';
import { close, trash } from 'ionicons/icons';

interface ActionSheetProps {
  isActionSheet: boolean;
  resetActionSheet: () => void;
  funcHandler: () => void;
}

const ActionSheet: React.FC<ActionSheetProps> = ({
  isActionSheet,
  resetActionSheet,
  funcHandler,
}) => (
  <IonActionSheet
    isOpen={isActionSheet}
    onDidDismiss={resetActionSheet}
    header="Yakin gak gebet dia lagi?"
    buttons={[
      {
        text: 'Yakin, hapus dari daftar.',
        role: 'destructive',
        icon: trash,
        handler: funcHandler,
      },
      {
        text: 'Gak yakin, kembali.',
        role: 'cancel',
        icon: close,
        handler: resetActionSheet,
      },
    ]}
  />
);

export default ActionSheet;
