import { useContext } from "react";
import Contexto from "../context/Contexto";
import "../assets/css/Item.css";

export default function Item(props) {
  const { title, image, price, id } = props;
  const { addCarrito } = useContext(Contexto);

  return (
    <div className="item">
      <div className="item-img">
        <img src={image} alt="product" />
      </div>
      <h5>{title}</h5>
      <span className="price">$ {price.toFixed(2)}</span>
      <button
        onClick={() => {
          addCarrito(id);
        }}
      >
        Add to cart
      </button>
    </div>
  );
}
