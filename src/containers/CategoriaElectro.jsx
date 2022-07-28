import { useEffect, useContext } from "react";
import Contexto from "../context/Contexto";
import Item from "../components/Item";
import "../assets/css/Productos.css";
import { SyncLoader } from "react-spinners";
import { useRef } from "react";

export const CategoriaElectro = () => {
  const { electro, productos, loading, setLoading } = useContext(Contexto);
  const tempElectro = useRef();

  const setElectro = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    electro();
  };

  tempElectro.current = setElectro;

  useEffect(() => {
    tempElectro.current();
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
