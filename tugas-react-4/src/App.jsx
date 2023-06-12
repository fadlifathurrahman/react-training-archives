// import { useState } from "react";
// import Place from "./components/Place.jsx";

import Header from "./components/Header";
import Place from "./components/Place";

const places = [
  {
    id: 1,
    nama: "Keraton Kasepuhan",
    gambar:
      "https://kebudayaan.kemdikbud.go.id/bpcbserang/wp-content/uploads/sites/35/2014/08/Kasepuhan-Cirebon-2.jpg",
    deskripsi: "Keraton tertua yang masih ada di Kota Cirebon",
  },
  {
    id: 2,
    nama: "Keraton Kanoman",
    gambar:
      "https://www.javatravel.net/wp-content/uploads/2020/03/Sejarah-Keraton-Kanoman-Cirebon.jpg",
    deskripsi: "Keraton kedua peninggalan Pangeran Cakrabuana",
  },
  {
    id: 3,
    nama: "Keraton Kacirebonan",
    gambar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEuvYozr9pgp-bBOVDt4w-UeaIkP23MsUSNg&usqp=CAU",
    deskripsi:
      "Keraton ketiga di Kota Cirebon yang dibangun ketika masa penjajahan Belanda",
  },
];

function App() {
  return (
    <>
      <Header />
      {places.map((i, n) => (
        <Place key={places[n].id}
          nama={places[n].nama}
          src={places[n].gambar}
          desc={places[n].deskripsi}
        />
      ))}
    </>
  );
}

export default App;
