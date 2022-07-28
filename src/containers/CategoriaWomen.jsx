import { useEffect } from "react";
import { useContext } from "react";
import Contexto from "../context/Contexto";
import "../assets/css/Productos.css";
import Item from "../components/Item";
import { SyncLoader } from "react-spinners";
import { useRef } from "react";

export const CategoriaWomen = () => {
  const { women, productos, loading, setLoading } = useContext(Contexto);
  const tempWomen = useRef();

  const setWomen = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    women();
  };

  tempWomen.current = setWomen;

  useEffect(() => {
    tempWomen.current();
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
