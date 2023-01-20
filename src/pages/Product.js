import Products from "../components/Products";
import Cart from "../components/Cart";

export default function Product() {
  return (
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
  );
}
