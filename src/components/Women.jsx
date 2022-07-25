import { Link } from "react-router-dom";
import imgWomen from "../assets/statics/women.jpg";
import "../assets/css/ItemHome.css";

export const Women = (value) => {
  return (
    <div className="itemHome">
      <Link to="/women">
        <img src={imgWomen} alt="women's clothing" />
        <h3 value="women">women</h3>
      </Link>
    </div>
  );
};
