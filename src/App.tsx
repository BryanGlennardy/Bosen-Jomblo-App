import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonContent, IonHeader, IonIcon, IonItem, IonItemDivider, IonLabel, IonList, IonMenu, IonMenuToggle, IonRouterOutlet, IonTitle, IonToggle, IonToolbar, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {discOutline, list, moonOutline, personOutline} from 'ionicons/icons';
import Home from './pages/Home';
import Profile from './pages/Profile';
import TargetPasangan from './pages/TargetPasangan';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import PasanganContextProvider from './data/DaftarPasanganProvide';

setupIonicReact();

const App: React.FC = () => {
  const toggleDarkModeHandler = () => {
    document.body.classList.toggle("dark");
  };
  return (
    <IonApp>
        <IonReactRouter>
          <IonMenu contentId='main'>
            <IonHeader>
              <IonToolbar>
                <IonTitle className='text-color-white'>Gebet App</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent>
              <IonList>
                <IonMenuToggle>
                  <IonItem routerLink='/pages/Home'>
                    <IonIcon slot='start' icon={list}></IonIcon>
                    <IonLabel>Daftar Calon Pasangan</IonLabel>
                  </IonItem>
                  <IonItem routerLink='/pages/TargetPasangan'>
                    <IonIcon slot='start' icon={discOutline}></IonIcon>
                    <IonLabel>Target Pasangan</IonLabel>
                  </IonItem>
                  <IonItem routerLink='/pages/Profile'>
                    <IonIcon slot='start' icon={personOutline}></IonIcon>
                    <IonLabel>Profile</IonLabel>
                  </IonItem>
                  <IonItem>
                    <IonIcon slot='start' icon={moonOutline}></IonIcon>
                    <IonLabel style={{ fontSize:16 }}>Dark Theme</IonLabel>
                    <IonToggle name='darkMode' onIonChange={toggleDarkModeHandler}/>
                  </IonItem>
                </IonMenuToggle>
              </IonList>
            </IonContent>
          </IonMenu>
          
            <IonRouterOutlet id='main'>
              <Route path="/" exact={true}>
                  <Redirect to="/pages/Home" />
              </Route>
              <PasanganContextProvider>
                <Route path="/pages/Home" exact={true}>
                  <Home />
                </Route>
                <Route path="/pages/Profile" component={Profile} />
                <Route path="/pages/TargetPasangan" component={TargetPasangan} />
              </PasanganContextProvider>
            </IonRouterOutlet>
          
        </IonReactRouter>
      </IonApp>
    )
};

export default App;
