import { useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import { CartContext, cartReducer, cartInit } from "./store";
import { Home, About, NotFound } from "./pages";
import Product from "./pages/Product";
import AlbumLayout from "./components/AlbumLayout";
import AlbumIndex from "./components/AlbumIndex";
import AlbumPhoto from "./components/AlbumPhoto";
import AlbumSearch from "./components/AlbumSearch";

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
        <Route path="/about" element={<About />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/album" element={<AlbumLayout />}>
          <Route index element={<AlbumIndex />}></Route>
          <Route path="search" element={<AlbumSearch />}></Route>
          <Route path=":id" element={<AlbumPhoto />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </CartContext.Provider>
  );
}
export default App;
