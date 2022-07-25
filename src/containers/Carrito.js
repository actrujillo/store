import { useContext } from "react";
import Contexto from "../context/Contexto";
import ItemCarrito from "../components/ItemCarrito";
import "../assets/css/Carrito.css";

export default function Carrito() {
  const { carrito, deleteCarrito } = useContext(Contexto);

  // filtro los id de los productos que aparecen en el carrito
  console.log(carrito.map((ite) => ite[0].id).filter((i) => i !== i.id));

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
        Total: $
        {carrito
          .map((item) => item[0].price)
          .reduce((valorInit, amount) => valorInit + amount, 0)
          .toFixed(2)}
      </span>
    </div>
  );
}
