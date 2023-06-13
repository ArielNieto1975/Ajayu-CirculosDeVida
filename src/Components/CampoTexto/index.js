import "./campoTexto.css";

const CampoTexto = (props) => {
  const { valor, setValor } = props;

  const manejarCambio = (e) => {
    setValor(e.target.value);
  };

  return (
    <div>
      <label> {props.titulo} </label>
      <input
        placeholder={`Ingrese ${props.titulo} del producto`}
        required={props.required}
        value={valor}
        onChange={manejarCambio}
      ></input>
    </div>
  );
};

export default CampoTexto;
