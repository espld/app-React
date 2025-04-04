import Contacto from "./Componentes/Contacto"
import ItemDetailContainer from "./Componentes/ItemDetailContainer"
import ItemListContainer from "./Componentes/ItemListContainer"
import Navbar from "./Componentes/Navbar"
import Nosotros from "./Componentes/Nosotros"
import "./main.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CartProvider } from "./Context/CartContext";
import Carrito from "./Componentes/Carrito"

function App() {

  // const user = "L";
  // const edad = 29;
  // const mail = "asdarrobaasd"

  return (
    <div>

      <CartProvider>
        <BrowserRouter>

          <Navbar />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/productos/" element={<ItemListContainer />} />
            <Route path="/productos/:categoria" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>

        </BrowserRouter>
      </CartProvider>
    </div>
  )
}

export default App
