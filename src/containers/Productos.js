import { useContext } from "react";
import Contexto from "../context/Contexto";
import Item from "../components/Item";
import "../assets/css/Productos.css";
import { useEffect } from "react";
import { SyncLoader } from "react-spinners";
import { useRef } from "react";

export default function Productos() {
  const { listaProductos, productos, loading, setLoading } =
    useContext(Contexto);
  const tempProductos = useRef();

  const setProductos = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    listaProductos();
  };

  tempProductos.current = setProductos;

  useEffect(() => {
    tempProductos.current();
  }, []);

  return (
    <div className="products">
      {loading ? (
        <SyncLoader
          className="loader"
          size={10}
          color={"#333"}
          loading={loading}
        />
      ) : (
        productos.map((item) => <Item {...item} key={item.id}></Item>)
      )}
    </div>
  );
}
