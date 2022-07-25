import { Link } from "react-router-dom";
import "../assets/css/Header.css";
import carrito from "../assets/statics/carrito.svg";

export default function Header() {
  return (
    <>
      <header>
        <h1>
          <Link to="/">True Store</Link>
        </h1>
        <ul>
          <li>
            <Link to="/carrito">
              <img
                src={carrito}
                className="carritoImg"
                alt="carrito de compras"
              />
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
}
