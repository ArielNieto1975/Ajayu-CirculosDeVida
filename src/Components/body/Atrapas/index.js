import Boton from "../../Boton";
import "./atrapas.css";

const Atrapas = (props) => {
  return (
    <>
      <h2 className="atrapa-title">Atrapá tus Sueños</h2>
      <div className="atrapas">
        {props.cards
          .filter((card) => card.categoria === "Atrapas")
          .map((card) => (
            <article className="unidad" key={card.id}>
              <img
                className="card"
                key={card.id}
                alt={card.name}
                src={card.imagen}
              />
              <span>
                <p>Art.: {card.name}</p>
                <p>Color: {card.color}</p>
                <p>Largo: {card.largo}</p>
                <p>Circunsferencia: {card.circunsferencia}</p>
              </span>

              <Boton
                value={card.id}
                name={card.name}
                showWhat={props.showWhat}
              />
            </article>
          ))}
      </div>
    </>
  );
};
export default Atrapas;
