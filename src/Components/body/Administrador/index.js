import CampoTexto from "../../CampoTexto";
import "./administrador.css";
import "../../Boton/boton.css";
import { useState } from "react";

const Administrador = (props) => {
  const [nombre, setNombre] = useState("");
  const [imagen, setImagen] = useState("");
  const [id, setID] = useState("");
  const [color, setColor] = useState("");
  const [largo, setLargo] = useState("");
  const [circulo, setCirculo] = useState("");
  const [categoria, setCategoria] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log("manejar el envio");
    let datosAEnviar = {
      name: nombre,
      imagen,
      id,
      color,
      largo,
      circunsferencia: circulo,
      categoria
    };
    props.registrarCard(datosAEnviar);
  };
  const manejarCambio = (e) => {
    setCategoria(e.target.value);
  };

  return (
    <form className="newProd" onSubmit={manejarEnvio}>
      <h2 className="newProd-titulo"> Ingrese Nuevo Producto </h2>
      <section className="newProd-data">
        <div className="newProd-datos">
          <select
            value={categoria}
            onChange={manejarCambio}
            className="newProd-select"
            required
          >
            <option value="" disabled defaultValue="" hidden>
              Elija Categoria
            </option>
            {props.accesos.map((acceso, index) => (
              <option key={index} value={acceso}>
                {acceso}
              </option>
            ))}
          </select>

          <CampoTexto
            accesos={props.accesos}
            titulo="Nombre"
            required
            valor={nombre}
            setValor={setNombre}
          />
          <CampoTexto
            accesos={props.accesos}
            titulo="Imagen"
            required
            valor={imagen}
            setValor={setImagen}
          />
          <CampoTexto
            accesos={props.accesos}
            titulo="ID"
            required
            valor={id}
            setValor={setID}
          />
          <CampoTexto
            accesos={props.accesos}
            titulo="Color"
            valor={color}
            setValor={setColor}
          />
          <CampoTexto
            accesos={props.accesos}
            titulo="Largo"
            valor={largo}
            setValor={setLargo}
          />
          <CampoTexto
            accesos={props.accesos}
            titulo="Circunsferencia"
            valor={circulo}
            setValor={setCirculo}
          />
        </div>
        <div className="newProd-prew">
          <img src={imagen} alt="imagen" />
        </div>
      </section>
      <button className="boton">Guardar</button>
    </form>
  );
};
export default Administrador;
