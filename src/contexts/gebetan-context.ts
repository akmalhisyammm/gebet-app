import React from 'react';
import { Gebetan } from 'types/interfaces';

interface Context {
  daftarGebetans: Gebetan[];
  targetGebetans: Gebetan[];
  addTargetGebetan: (
    gebetanId: string,
    gebetanName: string,
    gebetanGender: 'male' | 'female',
    gebetanBio: string,
    gebetanPhoto: string
  ) => void;
  deleteTargetGebetan: (gebetanId: string) => void;
}

const GebetansContext = React.createContext<Context>({
  daftarGebetans: [],
  targetGebetans: [],
  addTargetGebetan: () => {},
  deleteTargetGebetan: () => {},
});

export default GebetansContext;
