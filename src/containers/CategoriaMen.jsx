import { useEffect, useContext } from "react";
import Contexto from "../context/Contexto";
import "../assets/css/Productos.css";
import Item from "../components/Item";

export const CategoriaMen = () => {
  const { men, productos } = useContext(Contexto);

  useEffect(() => {
    men();
  }, []);

  return (
    <div className="products">
      {productos.map((item) => (
        <Item {...item} key={item.id}></Item>
      ))}
    </div>
  );
};
