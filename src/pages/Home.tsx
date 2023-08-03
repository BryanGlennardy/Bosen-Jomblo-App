import {
  IonAvatar,
  IonButtons,
  IonCard,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonLoading,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { female, heart, personCircleOutline } from "ionicons/icons";
import React, { useRef, useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import PasanganContext, { Pasangan } from "../data/daftarPasangan-context";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Home.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const Home: React.FC = () => {
  const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null);
  const [loadingController, setLoadingController] = useState(false);
  const pasanganCtx = useContext(PasanganContext);

  const startLoveHandler = (
    id: string,
    name: string,
    avatar: string,
    gender: string,
    description: string
  ) => {
    slidingOptionsRef.current?.closeOpened();
    pasanganCtx.addPasangan(id, name, avatar, gender, description);
    pasanganCtx.pasangan.forEach((value, index) => {
      if (value.id === id) {
        pasanganCtx.pasangan.splice(index, 1);
      }
    });

    setLoadingController(true);
  };

  setTimeout(() => {
    setLoadingController(false);
  }, 1500);

  // Acak Highlight
  const shuffle = (
    p: {
      id: string;
      name: string;
      avatar: string;
      gender: string;
      description: string;
    }[]
  ) => [...p].sort(() => Math.random() - 0.5);

  const highlightArray = pasanganCtx.pasangan;
  const acakId = shuffle(highlightArray);

  return (
    <React.Fragment>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start" style={{ color: "white" }}>
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle className="font-type text-color-white">
              Bosen Jomblo App
            </IonTitle>
            <Link
              to={"/pages/Profile"}
              slot="end"
              style={{ textDecoration: "none", color: "white", marginRight: 5 }}
            >
              <IonIcon
                icon={personCircleOutline}
                style={{ width: 25, height: 25 }}
              ></IonIcon>
            </Link>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <Swiper
              slidesPerView={3}
              spaceBetween={10}
              slidesPerGroup={3}
              loop={true}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {acakId.slice(0, 10).map((a) => (
                <SwiperSlide key={a.id}>
                  <IonCard className="highlight-card-setting">
                    <IonAvatar className="highlight-avatar-setting">
                      <img src={a.avatar} alt="avatar" />
                    </IonAvatar>
                    <h3 className="font font-type">{a.name}</h3>
                  </IonCard>
                </SwiperSlide>
              ))}
            </Swiper>
            {pasanganCtx.pasangan.map((p) => (
              <IonItemSliding key={p.id} ref={slidingOptionsRef}>
                <IonItem lines="full" button>
                  <IonAvatar slot="start" className="avatar-setting">
                    <img src={p.avatar} alt="avatar" />
                  </IonAvatar>
                  <IonLabel>
                    <h1 className="pb-5 font-type">{p.name}</h1>
                    <h3 className="font-type">{p.description}</h3>
                    <h3 className="font-type">
                      <IonIcon slot="start" icon={female}></IonIcon>
                      {p.gender}
                    </h3>
                  </IonLabel>
                </IonItem>

                <IonItemOptions side="end">
                  <IonItemOption
                    color="danger"
                    routerLink="/pages/TargetPasangan"
                    onClick={() =>
                      startLoveHandler(
                        p.id,
                        p.name,
                        p.avatar,
                        p.gender,
                        p.description
                      )
                    }
                  >
                    <IonIcon slot="icon-only" icon={heart}></IonIcon>
                  </IonItemOption>
                </IonItemOptions>
              </IonItemSliding>
            ))}
            <IonLoading
              isOpen={loadingController}
              onDidDismiss={() => setLoadingController(false)}
              message={"Loading..."}
              duration={3000}
            ></IonLoading>
          </IonList>
        </IonContent>
      </IonPage>
    </React.Fragment>
  );
};

export default Home;
