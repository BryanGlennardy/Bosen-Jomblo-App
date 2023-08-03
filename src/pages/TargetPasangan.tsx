import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonIcon, IonContent, IonButton, IonItemSliding, IonItemOption, IonAvatar, IonItem, IonLabel, IonActionSheet, IonItemOptions } from "@ionic/react";
import { closeOutline, female, heart, personCircleOutline, shareOutline, trash } from "ionicons/icons";
import { Link } from "react-router-dom";
import "./TargetPasangan.css";
import PasanganContext from '../data/daftarPasangan-context';
import { useContext, useRef, useState } from "react";

const TargetPasangan: React.FC = () => {
  const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null);
  const pasanganCtx = useContext(PasanganContext);
  const [ actionSheetController, setActionSheetController ] = useState(false);
  const [ id, setId ] = useState<string>();

  const StartDeleteHandler = (id: string) => {
    slidingOptionsRef.current?.closeOpened();
    pasanganCtx.targetPasangan.forEach(e => {
      if(e.id !== id) {

      }else{
        pasanganCtx.pasangan.push({id: e.id, name: e.name, avatar: e.avatar, gender: e.gender, description:e.description})
      }
    });
    pasanganCtx.deletePasangan(id);
  }

  const startActionSheetHandler = (id: string) => {
    setActionSheetController(true);
    setId(id);
  }


    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot='start' style={{ color: 'white' }}>
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle className='font-type text-color-white'>Target Pasangan</IonTitle>
            <Link to={"/pages/Profile"} slot='end' style={{textDecoration: 'none', color:'white', marginRight:5}}>
                <IonIcon icon={personCircleOutline} style={{ width:25, height:25}}></IonIcon>
            </Link>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          {pasanganCtx.targetPasangan.length != 0 ?
            pasanganCtx.targetPasangan.map(p => (
              <IonItemSliding key={p.id} ref={slidingOptionsRef}>
                <IonItem lines='full'
                         button>
                    <IonAvatar slot='start' className='avatar-setting'>
                        <img src={p.avatar} alt="avatar"/>
                    </IonAvatar>
                    <IonLabel>
                      <h1 className='pb-5 font-type'>{p.name}</h1>
                      <h3 className='font-type'>{p.description}</h3>
                      <h3 className='font-type'><IonIcon slot='start' icon={female}></IonIcon>{p.gender}</h3>
                    </IonLabel>
                </IonItem>
                <IonItemOptions side="end">
                  <IonItemOption color="danger" onClick={() => startActionSheetHandler(p.id)}>
                      <IonIcon slot='icon-only' icon={closeOutline}></IonIcon>
                  </IonItemOption>
                </IonItemOptions>
              </IonItemSliding>
            ))
            
            :

            <>
            <IonTitle className="ion-text-center pt-5 font-type">Anda masih jones??</IonTitle>
            <IonButton routerLink="/pages/Home" className="font-type" expand="block" color="danger">Cari Gebetan<IonIcon slot="end" icon={heart}></IonIcon></IonButton>
            </>

          }

          {id &&
            <IonActionSheet isOpen={actionSheetController} onDidDismiss={() => setActionSheetController(false)}
              header = "Yakin gak gebet dia lagi?"
              buttons = {[{
                icon: trash, 
                text: "Yakin, hapus dari daftar",
                handler: () => StartDeleteHandler(id)
              },
              {
                text: "Gak yakin, kembali",
                icon: shareOutline
              }
              ]}>
            </IonActionSheet>
          }
        </IonContent>
      </IonPage>
    );
  };
  
  export default TargetPasangan;