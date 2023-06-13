import { useState } from "react";
import "./header.css";

const Header = (props) => {
  // const accesos = ["Home", "Atrapas", "Frascos", "Diseño"];
  const [authenticated, setAuthenticated] = useState(false);
  const manejarEnvio1 = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    props.mostrarPrincipal();
  };
  const manejarEnvio2 = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    props.mostrarAtrapa();
  };
  const manejarEnvio3 = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    props.mostrarFrascos();
  };
  const manejarEnvio4 = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    props.mostrarDisenhos();
  };

  const manejarAdministrador = (e) => {
    e.preventDefault();
    const user = prompt("Ingrese el usuario:");
    const password = prompt("Ingrese la contraseña:");
    if (user === "admin" && password === "1234") {
      setAuthenticated(true);
      props.mostrarAdmin();
    } else {
      alert("Usuario o contraseña incorrectos.");
    }
  };

  return (
    <div className="header" id="header">
      <a href="#" className="administrador" onClick={manejarAdministrador}>
        Administrador
      </a>
      <section className="container">
        <div className="logos">
          <img className="logo" src="./assets/atrapas.png" alt="logo" />
          <h1 className="logo_a">Ajayú</h1>
          <h1 className="logo_b">Círculos de Vida</h1>
        </div>

        <section className="menu">
          <button onClick={manejarEnvio1}>Home</button>
          <button onClick={manejarEnvio2}>Atrapas</button>
          <button onClick={manejarEnvio3}>Frascos</button>
          <button onClick={manejarEnvio4}>Diseños</button>
        </section>
      </section>
    </div>
  );
};

export default Header;