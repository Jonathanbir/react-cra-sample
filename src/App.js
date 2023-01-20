import { useState, useEffect } from "react";
import axios from "axios";
//外部套件
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";
import "./assets/scss/all.scss";

function App() {
  const [text, setText] = useState("");

  const onChangleHandler = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    (async () => {
      console.log(process.env.REACT_APP_PATH);
      const result = await axios.get("https://randomuser.me/api/");
      console.log(result);
    })();
  }, []);

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
