import Atrapas from "./Atrapas";
import Home from "./Home";
import Frascos from "./Frascos";
import "./body.css";
import Disenhos from "./Disenos";
import { useState } from "react";
import Administrador from "./Administrador";

const Body = (props) => {
  const {
    principal,
    atrapaPage,
    frascosPage,
    disenhosPage,
    adminPage,
    accesos
  } = props;

  const [question, setQuestion] = useState(false);
  const [cards, actualizarCards] = useState([
    {
      categoria: "Atrapas",
      name: "atrapa 1",
      imagen: "./assets/atrapas/Optimized-20230406_140804_mfnr.jpg",
      id: "1",
      color: "Blanco",
      largo: "45cm",
      circunsferencia: "20cm"
    },
    {
      categoria: "Atrapas",
      name: "atrapa 2",
      imagen: "./assets/atrapas/Optimized-20230406_141255_mfnr.jpg",
      id: "2"
    },
    {
      categoria: "Atrapas",
      name: "atrapa 3",
      imagen: "./assets/atrapas/Optimized-20230406_141437_mfnr.jpg",
      id: "3"
    },
    {
      categoria: "Atrapas",
      name: "atrapa 4",
      imagen: "./assets/atrapas/Optimized-20230406_142528_mfnr.jpg",
      id: "4"
    },
    {
      categoria: "Atrapas",
      name: "atrapa 5",
      imagen: "./assets/atrapas/Optimized-20230406_142721_mfnr.jpg",
      id: "5"
    },
    {
      categoria: "Atrapas",
      name: "atrapa 6",
      imagen: "./assets/atrapas/Optimized-20230406_142911_mfnr.jpg",
      id: "6"
    },
    {
      categoria: "Atrapas",
      name: "atrapa 7",
      imagen: "./assets/atrapas/Optimized-20230406_143059_mfnr.jpg",
      id: "7"
    },
    {
      categoria: "Atrapas",
      name: "atrapa 8",
      imagen: "./assets/atrapas/Optimized-20230406_143222_mfnr.jpg",
      id: "8"
    },
    {
      categoria: "Atrapas",
      name: "atrapa 9",
      imagen: "./assets/atrapas/Optimized-20230406_143417_mfnr.jpg",
      id: "9"
    },
    {
      categoria: "Atrapas",
      name: "atrapa 10",
      imagen: "./assets/atrapas/Optimized-20230406_143319_mfnr.jpg",
      id: "10"
    },
    {
      categoria: "Atrapas",
      name: "atrapa 11",
      imagen: "./assets/atrapas/Optimized-20230406_143543_mfnr.jpg",
      id: "11"
    },
    {
      categoria: "Diseño",
      name: "Diseño 1",
      imagen: "./assets/disenos/Optimized-20230406_140116_mfnr.jpg",
      id: "201",
      largo: "20cm"
    },
    {
      categoria: "Diseño",
      name: "Diseño 2",
      imagen: "./assets/disenos/Optimized-20230406_140557_mfnr.jpg",
      id: "202"
    },
    {
      categoria: "Diseño",
      name: "Diseño 3",
      imagen: "./assets/disenos/Optimized-20230406_140926_mfnr.jpg",
      id: "203"
    },
    {
      categoria: "Diseño",
      name: "Diseño 4",
      imagen: "./assets/disenos/Optimized-20230406_141054.jpg",
      id: "204"
    },
    {
      categoria: "Diseño",
      name: "Diseño 5",
      imagen: "./assets/disenos/Optimized-20230406_141714_mfnr.jpg",
      id: "205"
    },
    {
      categoria: "Diseño",
      name: "Diseño 6",
      imagen: "./assets/disenos/Optimized-20230406_141846_mfnr.jpg",
      id: "206"
    },
    {
      categoria: "Diseño",
      name: "Diseño 7",
      imagen: "./assets/disenos/Optimized-20230406_142019_mfnr.jpg",
      id: "207"
    },
    {
      categoria: "Diseño",
      name: "Diseño 8",
      imagen: "./assets/disenos/Optimized-20230406_142150_mfnr.jpg",
      id: "208"
    },
    {
      categoria: "Diseño",
      name: "Diseño 9",
      imagen: "./assets/disenos/Optimized-20230406_142302_mfnr.jpg",
      id: "209"
    },
    {
      categoria: "Diseño",
      name: "Diseño 10",
      imagen: "./assets/disenos/Optimized-20230406_143658_mfnr.jpg",
      id: "210"
    },
    {
      categoria: "Diseño",
      name: "Diseño 11",
      imagen: "./assets/disenos/Optimized-20230406_143807_mfnr.jpg",
      id: "211"
    },
    {
      categoria: "Diseño",
      name: "Diseño 12",
      imagen: "./assets/disenos/Optimized-20230406_143924_mfnr.jpg",
      id: "212"
    },
    {
      categoria: "Diseño",
      name: "Diseño 13",
      imagen: "./assets/disenos/Optimized-20230406_144020_mfnr.jpg",
      id: "213"
    },
    {
      categoria: "Diseño",
      name: "Diseño 14",
      imagen: "./assets/disenos/Optimized-20230406_144101_mfnr.jpg",
      id: "214"
    },
    {
      categoria: "Diseño",
      name: "Diseño 15",
      imagen: "./assets/disenos/Optimized-20230406_144131_mfnr.jpg",
      id: "215"
    },
    {
      categoria: "Frascos",
      name: "frasco 1",
      imagen: "./assets/frascos/Optimized-20230406_144524_mfnr.jpg",
      id: "101",
      producto: "Caramelero"
    },
    {
      categoria: "Frascos",
      name: "frasco 2",
      imagen: "./assets/frascos/Optimized-20230406_144602_mfnr.jpg",
      id: "102",
      producto: "Velero"
    },
    {
      categoria: "Frascos",
      name: "frasco 3",
      imagen: "./assets/frascos/Optimized-20230406_144811_mfnr.jpg",
      id: "103"
    },
    {
      categoria: "Frascos",
      name: "frasco 4",
      imagen: "./assets/frascos/Optimized-20230406_144842_mfnr.jpg",
      id: "104"
    },
    {
      categoria: "Frascos",
      name: "frasco 5",
      imagen: "./assets/frascos/Optimized-20230406_144920.jpg",
      id: "105"
    },
    {
      categoria: "Frascos",
      name: "frasco 6",
      imagen: "./assets/frascos/Optimized-20230406_144934_mfnr.jpg",
      id: "106"
    },
    {
      categoria: "Frascos",
      name: "frasco 7",
      imagen: "./assets/frascos/Optimized-20230406_144955_mfnr.jpg",
      id: "107"
    },
    {
      categoria: "Frascos",
      name: "frasco 8",
      imagen: "./assets/frascos/Optimized-20230406_145044_mfnr.jpg",
      id: "108"
    }
  ]);

  const showWhat = () => {
    setQuestion(true);
    console.log(question);
  };

  const registrarCard = (card) => {
    console.log("nueva Card", card);
    actualizarCards([...cards, card]);
  };

  return (
    <section className="body">
      {principal ? <Home /> : <></>}
      {atrapaPage ? (
        <Atrapas showWhat={showWhat} question={question} cards={cards} />
      ) : (
        <></>
      )}
      {frascosPage ? <Frascos showWhat={showWhat} cards={cards} /> : <></>}
      {disenhosPage ? <Disenhos showWhat={showWhat} cards={cards} /> : <></>}
      {adminPage ? (
        <Administrador
          showWhat={showWhat}
          accesos={accesos}
          registrarCard={registrarCard}
        />
      ) : (
        <></>
      )}
    </section>
  );
};

export default Body;
