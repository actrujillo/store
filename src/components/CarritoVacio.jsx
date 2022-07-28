import { Link } from "react-router-dom";
import "../assets/css/CarritoVacio.css";

export const CarritoVacio = () => {
  return (
    <div className="carritoVacio">
      <h3>There are no items in your cart.</h3>
      <Link to="/productos">Purchase items online</Link>
    </div>
  );
};
