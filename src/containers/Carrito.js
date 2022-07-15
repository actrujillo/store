import { useContext } from "react";
import Contexto from "../context/Contexto";
import ItemCarrito from "../components/ItemCarrito";
import "../assets/css/Carrito.css";

function removeDuplicates(products) {
  const seenIds = new Set();
  const filteredProducts = [];

  for (const product of products) {
    if (!seenIds.has(product.id)) {
      filteredProducts.push(product);
      seenIds.add(product.id);
    }
  }
  return filteredProducts;
}

export default function Carrito() {
  const { carrito, deleteCarrito } = useContext(Contexto);

  // aparece pero solo indica comportamiento
  console.log(carrito.map((ite) => ite[0].id).filter((i) => i !== i.id));

  const products = carrito.map((item) => item[0]);

  const filteredProducts = removeDuplicates(products);

  return (
    <div className="carrito">
      {filteredProducts.map((item, i) => (
        <ItemCarrito
          {...item}
          key={i}
          deleteCarrito={deleteCarrito}
        ></ItemCarrito>
      ))}
      <span className="total">
        Total: $
        {filteredProducts
          .map((product) => product.price)
          .reduce((valorInit, amount) => valorInit + amount, 0)
          .toFixed(2)}
      </span>
    </div>
  );
}
