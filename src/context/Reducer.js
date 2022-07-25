// TYPES

const LISTA_PRODUCTOS = "LISTA_PRODUCTOS";
const WOMEN = "WOMEN";
const MEN = "MEN";
const ELECTRO = "ELECTRO";
const JEWELRY = "JEWELRY";
const ADD_CARRITO = "ADD_CARRITO";
const DELETE_CARRITO = "DELETE_CARRITO";

// armamos los types y ahora tenemos que generar un const con los payload que va a cargar el dato
// el type nos indica la parte de arriba para que siga la orden
// action va a guardar esas ordenes y genera funcionamiento

export default function Reducer(state, action) {
  const { payload, type } = action;

  // en el switch el ...state 'deconstruye' el estado(lo que hay) y envia la orden que sigue, en este caso, activa productos

  switch (type) {
    case LISTA_PRODUCTOS:
      return { ...state, productos: payload };
    case WOMEN:
      return { ...state, productos: payload };
    case MEN:
      return { ...state, productos: payload };
    case ELECTRO:
      return { ...state, productos: payload };
    case JEWELRY:
      return { ...state, productos: payload };
    case ADD_CARRITO:
      return {
        ...state,
        carrito: [
          ...state.carrito,
          state.productos.filter((ite) => ite.id === parseInt(payload)),
        ],
      };
    case DELETE_CARRITO:
      return {
        ...state,
        carrito: state.carrito.filter(
          (items) => items[0].id !== parseInt(payload)
        ),
      };

    default:
      console.log("error");
  }
}
