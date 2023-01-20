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
      // #1 先取得當前購物車目標品項索引
      const index = cartList.findIndex((item) => item.id === action.payload.id);
      console.log(index);
      console.log(action);
      switch (action.type) {
        case "ADD_TO_CART":
          if (index === -1) {
            //還未加入到購物車內
            cartList.push(action.payload);
          } else {
            //當前購物車的項目與加入的項目一致
            cartList[index].quantity += action.payload.quantity;
          }
          // const array = cartList.map((item) => {
          //   return item.quantity * item.price;
          // });
          // const total = array.reduce((a, b) => {
          //   return a + b;
          // }, 0);
          //reduce
          return {
            ...state,
            cartList,
            total: calculateTotalPrice(cartList),
          };
        case "CHANGE_CART_QUANTITY":
          cartList[index].quantity = action.payload.quantity;
          return {
            ...state,
            cartList,
            total: calculateTotalPrice(cartList),
          };
        case "REMOVE_CART_ITEM":
          cartList.splice(index, 1);
          return {
            ...state,
            cartList,
            total: calculateTotalPrice(cartList),
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

function calculateTotalPrice(cartList) {
  return cartList
    .map((item) => {
      return item.quantity * item.price;
    })
    .reduce((a, b) => a + b, 0);
}
export default App;
