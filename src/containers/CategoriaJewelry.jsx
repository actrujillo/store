import { useEffect, useContext } from "react";
import Contexto from "../context/Contexto";
import Item from "../components/Item";
import "../assets/css/Productos.css";

export const CategoriaJewelry = () => {
  const { jewelry, productos } = useContext(Contexto);

  useEffect(() => {
    jewelry();
  }, []);

  return (
    <div className="products">
      {productos.map((item) => (
        <Item {...item} key={item.id}></Item>
      ))}
    </div>
  );
};
