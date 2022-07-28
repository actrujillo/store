import "../assets/css/ItemCarrito.css";

export default function ItemCarrito(props) {
  const { title, price, image, id } = props[0];

  const handleDelete = () => {
    props.deleteCarrito(id);
  };

  // const filtered = keys.filter(
  //   (value, index, self) => self.findIndex((v) => v.id === value.id) === index
  // );


  return (
    <div className="itemCarrito">
      <div className="itemCarrito-articulo">
        <div className="itemCarrito-img">
          <img src={image} alt="" />
        </div>
        <div className="itemCarrito-texto">
          <h2>
            {title}
          </h2>
          {/* <span className="cantidad">Cantidad: {}</span> */}
          <p> $ {price.toFixed(2)}</p>
        </div>

        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}
