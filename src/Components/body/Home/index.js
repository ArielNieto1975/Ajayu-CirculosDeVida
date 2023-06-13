import "./home.css";

const Home = () => {
  return (
    <section className="home">
      <h1 className="titulo">
        ¡Bienvenido a AJAYÚ, nuestra tienda de atrapasueños!
      </h1>
      <article className="principal">
        <p>
          Nuestra amplia variedad de atrapasueños hechos a mano, cada uno único
          y elaborado con cuidado, son perfectos para decorar tu hogar u
          oficina, o como un regalo pensativo para un ser querido. Explore
          nuestra selección de atrapasueños hoy y encuentre el perfecto para
          atrapar sus sueños.
        </p>

        <img
          alt="imagen atrapasueños"
          src="https://www.psicoactiva.com/wp-content/uploads/2018/07/atrapasuenos.jpg"
          //src="https://www.tarotvidenciacristina.com/cmsblog/content/files/atrapasuenos_amanecer_luz.jpg"
        />
      </article>
    </section>
  );
};

export default Home;
