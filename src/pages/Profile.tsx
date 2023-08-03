import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonIcon, IonContent, IonCard, IonImg, IonItem, IonRow, IonCol, IonCardTitle, IonCardSubtitle, IonButton, IonAvatar } from "@ionic/react";
import { logoFacebook, logoGithub, logoInstagram, personCircleOutline } from "ionicons/icons";
import { Link } from "react-router-dom";
import './Profile.css';

const Profile: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot='start' style={{ color: 'white' }}>
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle className='font-type text-color-white'>Profile</IonTitle>
            <Link to={"/pages/Profile"} slot='end' style={{textDecoration: 'none', color:'white', marginRight:5}}>
                <IonIcon icon={personCircleOutline} style={{ width:25, height:25}}></IonIcon>
            </Link>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
            <IonCard>
              <IonAvatar className="profile-pic-setting">
                <img src="/assets/img/BRYAN.JPG" alt="profile-pic"></img>
              </IonAvatar><br></br>
              <IonCardTitle className="ion-text-center"><b>Bryan Glennardy</b></IonCardTitle>
              <IonCardSubtitle className="ion-text-center">00000036471</IonCardSubtitle><br></br>
              <IonButton href="https://www.instagram.com/brya9xs/" className="instagram-button-color font-type" target="blank" expand="block"><IonIcon slot="start" icon={logoInstagram}></IonIcon><b>Instagram</b></IonButton>
              <IonButton href="https://www.facebook.com/bryanglennardy/" className="font-type" target="blank" expand="block"><IonIcon slot="start" icon={logoFacebook}></IonIcon><b>Facebook</b></IonButton>
              <IonButton href="https://github.com/BryanGlennardy" className="font-type" color="dark" target="blank" expand="block"><IonIcon slot="start" icon={logoGithub}></IonIcon><b>Github</b></IonButton>
            </IonCard>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Profile;