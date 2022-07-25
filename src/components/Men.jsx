import { Link } from "react-router-dom";
import imgMen from "../assets/statics/men.jpg";
import "../assets/css/ItemHome.css";

export const Men = () => {
  return (
    <div className="itemHome">
      <Link to="/Men">
        <img src={imgMen} alt="men's clothing" />
        <h3>men</h3>
      </Link>
    </div>
  );
};
