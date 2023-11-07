import { Link } from "react-router-dom";
import "../css/Header.css";

export default function Header() {
  return (
    <div className="container-fluid">
      <div className="container">
        <header>
          <nav>
            <Link to="/cotizador">
              <img src="/toledoMotors-light.png" alt="Toledo Motors" />
            </Link>
            <Link to="/historial">
              <button className="btn">HISTORIAL</button>
            </Link>
          </nav>
        </header>
      </div>
    </div>
  );
}
