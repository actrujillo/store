import { useEffect, useContext, useRef } from "react";
import Contexto from "../context/Contexto";
import "../assets/css/Productos.css";
import Item from "../components/Item";
import { SyncLoader } from "react-spinners";

export const CategoriaMen = () => {
  const { men, productos, loading, setLoading } = useContext(Contexto);
  const tempMen = useRef();

  const setMen = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    men();
  };

  tempMen.current = setMen;

  useEffect(() => {
    tempMen.current();
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
