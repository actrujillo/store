import { Link } from "react-router-dom"
import '../assets/css/ViewAll.css'

export const ViewAll = () => {
  return (
    <div className="linkProd">
      <Link to="/productos" >View all products</Link>
    </div>
  )
}
