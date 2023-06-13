import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <p>Ajayú © 2023 - </p>
        <p>
          Developed by
          <img src="./assets/an.png" alt="Logo Ariel NIeto" width="25px" />{" "}
          Ariel Nieto
        </p>
      </div>

      <div className="whats">
        <a href="#header">
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/color/48/circled-up--v1.png"
            alt="circled-up--v1"
          />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=543512481554&text=Hola, mi nombre es "
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://cdn.iconscout.com/icon/free/png-512/whatsapp-circle-1868968-1583132.png"
            alt="contactenos por whatsapp"
            width="50"
            height="50"
          />
        </a>
      </div>
    </>
  );
};

export default Footer;
