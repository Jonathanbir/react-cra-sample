import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../store";

export default function Navbar() {
  const [state] = useContext(CartContext);
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <span className="navbar-brand">甜點蛋糕店</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                首頁
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/about">
                關於我們
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/product">
                商品頁
              </Link>
            </li>
          </ul>
          <button
            className="btn btn-outline-dark position-relative"
            type="submit"
          >
            購物車
            <span className="badge rounded-pill text-bg-danger position-absolute top-0 start-100 translate-middle">
              {state.cartList.length}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
