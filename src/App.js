import { useState } from 'react';
import {
  IonApp,
  IonContent,
  IonHeader,
  IonInput,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
} from '@ionic/react';

import BiorhythmCard from './components/BiorhythmCard';
import { useStoredState } from './hooks/useStoredState';

const getToday = () => new Date().toISOString().slice(0, 'yyyy-mm-dd'.length);

function App() {
  const [birthDate, setBirthDate] = useStoredState('birth-date', '');
  const [targetDate, setTargetDate] = useState(getToday);

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Biorhythms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {Boolean(birthDate) && (
          <BiorhythmCard birthDate={birthDate} targetDate={targetDate} />
        )}

        <IonList>
          <IonItem>
            <IonLabel position="fixed">Date of birth:</IonLabel>
            <IonInput
              type="date"
              value={birthDate}
              onIonChange={(event) => setBirthDate(event.detail.value)}
            />
          </IonItem>

          <IonItem>
            <IonLabel position="fixed">Target date:</IonLabel>
            <IonInput
              type="date"
              value={targetDate}
              onIonChange={(event) => setTargetDate(event.detail.value)}
            />
          </IonItem>
        </IonList>
      </IonContent>
    </IonApp>
  );
}

export default App;
