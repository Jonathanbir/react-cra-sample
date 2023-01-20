import { useReducer } from "react";
import { CartContext, cartReducer, cartInit } from "./store";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import { Routes, Route } from "react-router-dom";
//外部套件
import Navbar from "./components/Navbar";
import "./assets/scss/all.scss";

function App() {
  const reducer = useReducer(cartReducer, cartInit);

  return (
    <CartContext.Provider value={reducer}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Routes>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <Routes>
        <Route path="/product" element={<Product />}></Route>
      </Routes>
    </CartContext.Provider>
  );
}
export default App;
