import { Link } from "react-router-dom";
import "../assets/css/Header.css";
import carrito from "../assets/statics/carrito.png";

export default function Header() {
  return (
    <>
      <header>
        <h1>
          <Link to="/">Tienda Store</Link>
        </h1>
        <ul>
          <li>
            <Link to="/productos">Productos</Link>
          </li>
          <li>
            <Link to="/carrito">
              <img src={carrito} alt="carrito de compras" />
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
}
