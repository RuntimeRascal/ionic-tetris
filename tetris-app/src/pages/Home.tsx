import { IonPage, IonFooter, IonToolbar, IonButtons, IonBackButton, IonTitle, IonHeader, IonActionSheet, IonButton } from '@ionic/react';
import React, { useState } from 'react';
import Game from './Game';

const Home: React.FC = () => {
    const [showActionSheet, setShowActionSheet] = useState(false);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Tetris Re-Made</IonTitle>
                </IonToolbar>
            </IonHeader>

            <Game />

            <IonActionSheet isOpen={showActionSheet} onDidDismiss={() => setShowActionSheet(false)} buttons={[{
                text: 'Delete',
                role: 'destructive',
                //icon: 'trash',
                handler: () => {
                    console.log('Delete clicked');
                }
            }]}>

            </IonActionSheet>

            <IonFooter>
                <IonToolbar>
                    <IonButton onClick={() => setShowActionSheet(true)}>Options</IonButton>
                    {/* <IonButtons slot="start">
                        <IonBackButton defaultHref="/" />
                    </IonButtons>
                    <IonTitle>Back Button</IonTitle> */}
                </IonToolbar>
            </IonFooter>
        </IonPage>
    );
};

export default Home;
