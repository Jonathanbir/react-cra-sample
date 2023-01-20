import { useReducer } from "react";
import { CartContext } from "./store";

//外部套件
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";
import "./assets/scss/all.scss";

function App() {
  const cartReducer = useReducer(
    (state, action) => {
      const cartList = [...state.cartList];
      console.log(action);
      switch (action.type) {
        case "ADD_TO_CART":
          cartList.push(action.payload);
          return {
            ...state,
            cartList,
          };
        default:
          return state;
      }
    },
    {
      cartList: [],
    }
  );

  return (
    <CartContext.Provider value={cartReducer}>
      <Navbar />
      <div className="container mt-4">
        {/*外層隔線*/}
        <div className="row">
          <div className="col-md-7">
            {/*內層隔線*/}
            <Products />
          </div>
          <div className="col-md-5">
            <Cart />
          </div>
        </div>
      </div>
    </CartContext.Provider>
  );
}

export default App;
