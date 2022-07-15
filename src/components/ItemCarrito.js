import "../assets/css/ItemCarrito.css";

export default function ItemCarrito(props) {
  const { title, price, image, id } = props;

  const handleDelete = () => {
    props.deleteCarrito(id);
  };

  return (
    <div className="itemCarrito">
      <div className="itemCarrito-articulo">
        <div className="itemCarrito-img">
          <img src={image} alt="" />
        </div>
        <div className="itemCarrito-texto">
          <h2>
            Producto: <br />
            {title}
          </h2>
          <span className="cantidad">Cantidad: {}</span>
          <p>Precio: $ {price.toFixed(2)}</p>
        </div>

        <button onClick={handleDelete}>Eliminar producto</button>
      </div>
    </div>
  );
}
