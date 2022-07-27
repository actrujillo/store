import { useEffect, useContext } from "react";
import Contexto from "../context/Contexto";
import Item from "../components/Item";
import "../assets/css/Productos.css";
import { SyncLoader } from "react-spinners";

export const CategoriaJewelry = () => {
  const { jewelry, productos, loading, setLoading } = useContext(Contexto);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    jewelry();
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
