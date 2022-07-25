import { useEffect } from "react";
import { useContext } from "react";
import Contexto from "../context/Contexto";
import "../assets/css/Productos.css";
import Item from "../components/Item";

export const CategoriaWomen = () => {
  const { women, productos } = useContext(Contexto);

  useEffect(() => {
    women();
  }, []);

  return (
    <div className="products">
      {productos.map((item) => (
        <Item {...item} key={item.id}></Item>
      ))}
    </div>
  );
};
