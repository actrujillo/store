import { useEffect, useContext } from "react";
import Contexto from "../context/Contexto";
import Item from "../components/Item";
import "../assets/css/Productos.css";
import { SyncLoader } from "react-spinners";

export const CategoriaElectro = () => {
  const { electro, productos, loading, setLoading } = useContext(Contexto);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    electro();
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
};
