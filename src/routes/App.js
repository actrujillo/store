import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../containers/Home";
import Layout from "../components/Layout";
import Productos from "../containers/Productos";
import Carrito from "../containers/Carrito";
import UsarContexto from "../context/UsarContexto";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <UsarContexto>
          <Layout>
            <Routes>
              <Route exact path="/" element={<Home />}>
                Home
              </Route>
              <Route exact path="/productos" element={<Productos />}>
                Productos
              </Route>
              <Route exact path="/carrito" element={<Carrito />}></Route>
            </Routes>
          </Layout>
        </UsarContexto>
      </BrowserRouter>
    </div>
  );
}
