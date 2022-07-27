import { useContext } from "react";
import Contexto from "../context/Contexto";
import Item from "../components/Item";
import "../assets/css/Productos.css";
import { useEffect } from "react";
import { SyncLoader } from "react-spinners";

export default function Productos() {
  const { listaProductos, productos, loading, setLoading } =
    useContext(Contexto);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    listaProductos();
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
