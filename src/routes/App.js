import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../containers/Home";
import Layout from "../components/Layout";
import Productos from "../containers/Productos";
import Carrito from "../containers/Carrito";
import UsarContexto from "../context/UsarContexto";
import { CategoriaWomen } from "../containers/CategoriaWomen";
import { CategoriaMen } from "../containers/CategoriaMen";
import { CategoriaElectro } from "../containers/CategoriaElectro";
import { CategoriaJewelry } from "../containers/CategoriaJewelry";

export default function App() {
  return (
    <>
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
              <Route exact path="/women" element={<CategoriaWomen />}></Route>
              <Route exact path="/men" element={<CategoriaMen />}></Route>
              <Route
                exact
                path="/electronics"
                element={<CategoriaElectro />}
              ></Route>
              <Route
                exact
                path="/jewelry"
                element={<CategoriaJewelry />}
              ></Route>
              <Route exact path="/carrito" element={<Carrito />}></Route>
            </Routes>
          </Layout>
        </UsarContexto>
      </BrowserRouter>
    </>
  );
}
