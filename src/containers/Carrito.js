import { useContext } from "react";
import Contexto from "../context/Contexto";
import ItemCarrito from "../components/ItemCarrito";
import "../assets/css/Carrito.css";

export default function Carrito() {
  const { carrito, deleteCarrito } = useContext(Contexto);

  // variable para obtener el precio y utilizarlo en el total del carrito
  const suma = carrito.map((item) => item[0].price);

  return (
    <div className="carrito">
      {carrito.map((item, i) => (
        <ItemCarrito
          {...item}
          key={i}
          deleteCarrito={deleteCarrito}
        ></ItemCarrito>
      ))}
      <span className="total">
        Total: ${" "}
        {suma.reduce((valorInit, amount) => valorInit + amount, 0).toFixed(2)}
      </span>
    </div>
  );
}
