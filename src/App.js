import { useState } from "react";
import Body from "./Components/body";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import "./styles.css";

export default function App(props) {
  const accesos = ["Home", "Atrapas", "Frascos", "Diseño"];
  const [principal, setPrincipal] = useState(true);
  const [atrapaPage, setAtrapaPage] = useState(false);
  const [frascosPage, setFrascosPage] = useState(false);
  const [disenhosPage, setDisenhosPage] = useState(false);
  const [adminPage, setAdminPage] = useState(false);

  const mostrarPrincipal = () => {
    console.log(principal);
    setPrincipal(true);
    setAtrapaPage(false);
    setFrascosPage(false);
    setDisenhosPage(false);
    setAdminPage(false);
  };
  const mostrarAtrapa = () => {
    console.log(atrapaPage);
    setAtrapaPage(true);
    setPrincipal(false);
    setFrascosPage(false);
    setDisenhosPage(false);
    setAdminPage(false);
  };
  const mostrarFrascos = () => {
    console.log(frascosPage);
    setFrascosPage(true);
    setAtrapaPage(false);
    setPrincipal(false);
    setDisenhosPage(false);
    setAdminPage(false);
  };
  const mostrarDisenhos = () => {
    console.log(disenhosPage);
    setDisenhosPage(true);
    setFrascosPage(false);
    setAtrapaPage(false);
    setPrincipal(false);
    setAdminPage(false);
  };
  const mostrarAdmin = () => {
    console.log(adminPage);
    setAdminPage(true);
    setDisenhosPage(false);
    setFrascosPage(false);
    setAtrapaPage(false);
    setPrincipal(false);
  };

  return (
    <div className="App">
      <Header
        mostrarPrincipal={mostrarPrincipal}
        mostrarAtrapa={mostrarAtrapa}
        mostrarFrascos={mostrarFrascos}
        mostrarDisenhos={mostrarDisenhos}
        mostrarAdmin={mostrarAdmin}
        accesos={accesos}
      />
      <Body
        principal={principal}
        atrapaPage={atrapaPage}
        frascosPage={frascosPage}
        disenhosPage={disenhosPage}
        adminPage={adminPage}
        accesos={accesos}
      />
      <Footer />
    </div>
  );
}
