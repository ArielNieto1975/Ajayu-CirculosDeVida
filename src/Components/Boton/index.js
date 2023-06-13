import "./boton.css";

const Boton = (props) => {
  const clickEvent = (e) => {
    // e.preventDefault();
    console.log("consultar", e.target.value);

    props.showWhat(e.target.value);
  };

  return (
    <button onClick={clickEvent} value={props.value} className="boton">
      <a
        href={`https://api.whatsapp.com/send?phone=543512481554&text=Hola, quisiera consultar por el ${props.name}. Mi nombre es`}
        target="_blank"
        rel="noreferrer"
      >
        Consultar
      </a>
    </button>
  );
};

export default Boton;