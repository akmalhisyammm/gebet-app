import React, { useState } from 'react';
import { Gebetan } from 'types/interfaces';
import GebetansContext from './gebetan-context';

const GebetansContextProvider: React.FC = ({ children }) => {
  const daftarGebetans: Gebetan[] = [
    {
      id: 'g1',
      name: 'Shinta Kusuma Dewi',
      gender: 'female',
      bio: 'Aku suka cowo macho',
      photo: 'https://i.pravatar.cc/300?img=1',
    },
    {
      id: 'g2',
      name: 'Tony Hehe',
      gender: 'male',
      bio: 'Aku cowo humoris',
      photo: 'https://i.pravatar.cc/300?img=12',
    },
    {
      id: 'g3',
      name: 'Bella Humorisa',
      gender: 'female',
      bio: 'Aku suka ketawa',
      photo: 'https://i.pravatar.cc/300?img=5',
    },
    {
      id: 'g4',
      name: 'Joko Pintar',
      gender: 'male',
      bio: 'Aku cowo jenius',
      photo: 'https://i.pravatar.cc/300?img=8',
    },
    {
      id: 'g5',
      name: 'John Thor',
      gender: 'male',
      bio: 'Aku tinggal di Asgard',
      photo: 'https://i.pravatar.cc/300?img=3',
    },
  ];

  const [targetGebetans, setTargetGebetans] = useState<Gebetan[]>([]);

  const addTargetGebetan = (
    id: string,
    name: string,
    gender: 'male' | 'female',
    bio: string,
    photo: string
  ) => {
    const newTargetGebetan: Gebetan = {
      id: id,
      name: name,
      gender: gender,
      bio: bio,
      photo: photo,
    };

    const updatedTargetGebetans = [...targetGebetans, newTargetGebetan];

    setTargetGebetans(updatedTargetGebetans);
  };

  const deleteTargetGebetan = (id: string) => {
    const updatedTargetGebetans = targetGebetans.filter(
      (gebetan) => gebetan.id !== id
    );

    setTargetGebetans(updatedTargetGebetans);
  };

  return (
    <GebetansContext.Provider
      value={{
        daftarGebetans,
        targetGebetans,
        addTargetGebetan,
        deleteTargetGebetan,
      }}
    >
      {children}
    </GebetansContext.Provider>
  );
};

export default GebetansContextProvider;
