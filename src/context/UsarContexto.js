import Contexto from "./Contexto";
import axios from "axios";
import { useReducer, useState } from "react";
import Reducer from "./Reducer";

export default function UsarContexto(props) {
  // const [estado, setEstado] = useState([]);
  // usamos este useState para poder agregar como estado los productos de la api al array productos
  const { children } = props;

  const estadoInicial = {
    productos: [],
    carrito: [],
  };

  const [state, dispatch] = useReducer(Reducer, estadoInicial);

  const [loading, setLoading] = useState(false);
  // el dispatch va a disparar la orden para que diga el TYPE a operar, y en el payload se genera la DATA

  const listaProductos = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    // setEstado(res.data);
    dispatch({ type: "LISTA_PRODUCTOS", payload: res.data });
  };

  const addCarrito = (item) => {
    dispatch({ type: "ADD_CARRITO", payload: item });
  };

  const deleteCarrito = (item) => {
    dispatch({ type: "DELETE_CARRITO", payload: item });
  };

  const women = async () => {
    const res = await axios.get(
      "https://fakestoreapi.com/products/category/women's%20clothing"
    );
    dispatch({ type: "WOMEN", payload: res.data });
  };

  const men = async () => {
    const res = await axios.get(
      "https://fakestoreapi.com/products/category/men's%20clothing"
    );
    dispatch({ type: "MEN", payload: res.data });
  };

  const electro = async () => {
    const res = await axios.get(
      "https://fakestoreapi.com/products/category/electronics"
    );
    dispatch({ type: "ELECTRO", payload: res.data });
  };

  const jewelry = async () => {
    const res = await axios.get(
      "https://fakestoreapi.com/products/category/jewelery"
    );
    dispatch({ type: "JEWELRY", payload: res.data });
  };

  return (
    <Contexto.Provider
      value={{
        productos: state.productos,
        carrito: state.carrito,
        listaProductos,
        addCarrito,
        deleteCarrito,
        women,
        men,
        electro,
        jewelry,
        loading,
        setLoading,
      }}
    >
      {children}
    </Contexto.Provider>
  );
}
