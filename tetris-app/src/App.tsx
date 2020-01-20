import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupConfig } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import './theme/variables.css';
import { SettingsProvider } from './state/SettingsProvider';
import { initialState, settingsReducer } from './state/settingsContext';

setupConfig({
    mode: 'md',
    animated: true
});

const App: React.FC = () => (
    <IonApp>
        <SettingsProvider reducer={settingsReducer} initialState={initialState}>
            <IonReactRouter>
                <IonRouterOutlet>
                    <Route path="/home" component={Home} exact={true} />
                    <Route exact path="/" render={() => <Redirect to="/home" />} />
                </IonRouterOutlet>
            </IonReactRouter>
        </SettingsProvider>
    </IonApp>
);

export default App;
