import { useContext } from "react";
import Contexto from "../context/Contexto";
import Item from "../components/Item";
import "../assets/css/Productos.css";
import { useEffect } from "react";

export default function Productos() {
  const { listaProductos, productos } = useContext(Contexto);
  useEffect(() => {
    listaProductos();
  }, []);

  return (
    <>
      {productos.map((item) => (
        <Item {...item} key={item.id}></Item>
      ))}
    </>
  );
}
