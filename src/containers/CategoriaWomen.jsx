import { useEffect } from "react";
import { useContext } from "react";
import Contexto from "../context/Contexto";
import "../assets/css/Productos.css";
import Item from "../components/Item";
import { SyncLoader } from "react-spinners";

export const CategoriaWomen = () => {
  const { women, productos, loading, setLoading } = useContext(Contexto);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    women();
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
