import Boton from "../../Boton";
import "../Atrapas/atrapas.css";

const Disenhos = (props) => {
  return (
    <>
      <h2 className="atrapa-title">Exclusivos para ti ...</h2>
      <div className="atrapas">
        {props.cards
          .filter((card) => card.categoria === "Diseño")
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
                <p>Largo: {card.largo}</p>
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
export default Disenhos;
