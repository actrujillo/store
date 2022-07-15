import { useContext } from "react";
import Contexto from "../context/Contexto";
import "../assets/css/Item.css";

export default function Item(props) {
  const { title, image, price, id } = props;
  const { addCarrito } = useContext(Contexto);

  return (
    <>
      <div className="item-producto">
        <h5>{title}</h5>
        <img src={image} alt="" />
        <span>{price.toFixed(2)}</span>
        <button
          onClick={() => {
            addCarrito(id);
          }}
        >
          +
        </button>
      </div>
    </>
  );
}
