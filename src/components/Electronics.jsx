import { Link } from "react-router-dom";
import imgElectro from "../assets/statics/electronics.jpg";
import "../assets/css/ItemHome.css";

export const Electronics = () => {
  return (
    <div className="itemHome">
      <Link to="/electronics">
        <img src={imgElectro} alt="electronics" />
        <h3>electronics</h3>
      </Link>
    </div>
  );
};
