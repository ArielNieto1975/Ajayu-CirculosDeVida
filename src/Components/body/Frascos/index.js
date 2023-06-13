import Boton from "../../Boton";
import "../Atrapas/atrapas.css";

const Frascos = (props) => {
  return (
    <>
      <h2 className="atrapa-title">Guardá tus sueños</h2>
      <div className="atrapas">
        {props.cards
          .filter((card) => card.categoria === "Frascos")
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
                <p>Producto: {card.producto}</p>
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
export default Frascos;
