import { Link } from "react-router-dom";
import imgJewelry from "../assets/statics/jewelry.jpg";
import "../assets/css/ItemHome.css";

export const Jewelry = () => {
  return (
    <div className="itemHome">
      <Link to="/jewelry">
        <img src={imgJewelry} alt="jewelry" />
        <h3>jewelry</h3>
      </Link>
    </div>
  );
};
