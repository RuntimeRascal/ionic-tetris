import * as React from 'react';
import { FC } from 'react';
import { IonButton } from '@ionic/react';

const Terimones: FC = () => {
    const test = (e: React.MouseEvent<HTMLIonButtonElement, MouseEvent>) => {
        console.log(`test() => ${e.type}`);
    }

    return <div className="tetrimones">Terminones<IonButton onClick={(e) => test(e)}>Test</IonButton></div>;
}

export default Terimones;