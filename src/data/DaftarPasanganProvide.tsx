import React, { useState } from "react";
import PasanganContext, { Pasangan } from "./daftarPasangan-context";

const PasanganContextProvider: React.FC = (props) => {
  const [targetPasangan, setTargetPasangan] = useState<Pasangan[]>([]);
  const [pasangan, setPasangan] = useState<Pasangan[]>([
    {
      id: "p1",
      name: "IU",
      avatar:
        "https://i.scdn.co/image/ab6761610000e5eb006ff3c0136a71bfb9928d34",
      gender: "Female",
      description: "Luv",
    },
    {
      id: "p2",
      name: "Karina",
      avatar:
        "https://asset-a.grid.id/crop/0x0:0x0/945x630/photo/2020/11/02/438536050.jpg",
      gender: "Female",
      description: "Luv",
    },
    {
      id: "p3",
      name: "Winter",
      avatar:
        "https://kpopping.com/documents/c8/0/1440/220122-aespa-Twitter-Update-Winter-documents-1.jpeg",
      gender: "Female",
      description: "Luv",
    },
    {
      id: "p4",
      name: "Jennie",
      avatar:
        "https://asset.kompas.com/crops/qEzp1lRjF_h3AOjVv8rhNwzoomU=/0x500:1000x1167/750x500/data/photo/2018/08/19/2853283469.jpg",
      gender: "Female",
      description: "Luv",
    },
    {
      id: "p5",
      name: "Lisa",
      avatar:
        "https://cdn-brilio-net.akamaized.net/news/2019/01/08/157484/973302-1000xauto-lisa-blackpink-transformasi.jpg",
      gender: "Female",
      description: "Luv",
    },
    {
      id: "p6",
      name: "Jisoo",
      avatar:
        "https://asset.kompas.com/crops/PRcUU1eXOE3L1h3_66xXIjgcNjA=/0x0:0x0/750x500/data/photo/2021/07/08/60e6901a4992e.jpg",
      gender: "Female",
      description: "Luv",
    },
    {
      id: "p7",
      name: "Rose",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkMGKaeNXfd70eJyO95rp9fSzycmYK223Y-A&usqp=CAU",
      gender: "Female",
      description: "Luv",
    },
    {
      id: "p8",
      name: "Nayeon",
      avatar: "https://image.kpopmap.com/2023/03/TWICE-2303-NaYeon-Profile.png",
      gender: "Female",
      description: "Luv",
    },
    {
      id: "p9",
      name: "Tzuyu",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN7DC165YmcNkkxFu-vWh66y1tdF5AFdNwAA&usqp=CAU",
      gender: "Female",
      description: "Luv",
    },
    {
      id: "p10",
      name: "Taeyeon",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrFJceULBUVE6Bt6Vdft2IHs8Xz34WXIqs4g&usqp=CAU",
      gender: "Female",
      description: "Luv",
    },
    {
      id: "p11",
      name: "Yoona",
      avatar:
        "https://www.femina.co.id/images/images_article/5d5d5a5f4733640021_0.jpeg",
      gender: "Female",
      description: "Luv",
    },
    {
      id: "p12",
      name: "Suzy",
      avatar:
        "https://pbs.twimg.com/profile_images/1267029354237722624/vbYKLHYI_400x400.jpg",
      gender: "Female",
      description: "Luv",
    },
    {
      id: "p13",
      name: "Irene",
      avatar:
        "https://1.bp.blogspot.com/-KWCTiwo8uco/YDNL4hJdLGI/AAAAAAAAFIU/eGk-FueJG50o1bp40zQwrs7LI43Lh1EDACLcBGAsYHQ/s715/images%2B-%2B2021-02-22T131408.950.jpeg",
      gender: "Female",
      description: "Luv",
    },
    {
      id: "p14",
      name: "Minju",
      avatar:
        "https://kpopping.com/documents/bd/0/1832/Kim-Minju-2021-Profile-Photos-documents-11.jpeg?v=96b65",
      gender: "Female",
      description: "Luv",
    },
    {
      id: "p15",
      name: "Wendy",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPoxeoiygFSA9Job_0Kzw_X1sAJpSNWtrrbQ&usqp=CAU",
      gender: "Female",
      description: "Luv",
    },
    {
      id: "p16",
      name: "Hyewon",
      avatar: "https://data.whicdn.com/images/358861235/original.jpg",
      gender: "Female",
      description: "Luv",
    },
    {
      id: "p17",
      name: "Eunbi",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSahRXaEhteEMyGFu4dn677M4ewjvt8jjRNeA&usqp=CAU",
      gender: "Female",
      description: "Luv",
    },
  ]);

  const addPasangan = (
    id: string,
    name: string,
    avatar: string,
    gender: string,
    description: string
  ) => {
    const newPasangan: Pasangan = {
      id: id,
      name: name,
      avatar: avatar,
      gender: gender,
      description: description,
    };
    setTargetPasangan((currPasangan) => {
      return currPasangan.concat(newPasangan);
    });
  };

  const deletePasangan = (id: string) => {
    for (let i = 0; i < targetPasangan.length; i++) {
      if (targetPasangan[i].id == id) {
        targetPasangan.splice(i, 1);
        break;
      }
    }
  };

  return (
    <PasanganContext.Provider
      value={{
        pasangan,
        targetPasangan,
        addPasangan,
        deletePasangan,
      }}
    >
      {props.children}
    </PasanganContext.Provider>
  );
};

export default PasanganContextProvider;
