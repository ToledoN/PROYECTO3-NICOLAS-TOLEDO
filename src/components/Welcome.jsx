import "../css/Welcome.css";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="container welcome d-flex flex-column text-center my-5">
      <h1>Toledo Motors Seguros</h1>
      <p>
        En cada póliza que otorgamos, reflejamos el mismo estándar de excelencia
        que usted espera de su automóvil de lujo. Descubra la diferencia de una
        cobertura de seguros que excede las expectativas.{" "}
      </p>
      <b>Bienvenido a un mundo de seguridad y elegancia sin igual.</b>
      <Link to="/cotizador">
        <button className="btn">Cotizar</button>
      </Link>
    </div>
  );
};

export default Welcome;
