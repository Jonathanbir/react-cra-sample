import { useState, useEffect } from "react";
import axios from "axios";
//外部套件
import Input from "./components/Input";
import "./assets/all.scss";

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
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <span className="navbar-brand">甜點蛋糕店</span>
          <button
            className="btn btn-outline-dark position-relative"
            type="submit"
          >
            購物車
            <span class="badge rounded-pill text-bg-danger position-absolute top-0 start-100 translate-middle">
              99
            </span>
          </button>
        </div>
      </nav>
      <div className="container mt-4">
        {/*外層隔線*/}
        <div className="row">
          <div className="col-md-7">
            {/*內層隔線*/}
            <div className="row row-cols-3 g-3">
              <div className="col">
                <div className="card">
                  <img
                    src="https://media.istockphoto.com/id/1361394182/photo/funny-british-shorthair-cat-portrait-looking-shocked-or-surprised.jpg?s=612x612&w=0&k=20&c=6yvVxdufrNvkmc50nCLCd8OFGhoJd6vPTNotl90L-vo="
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h6 className="card-title">
                      全蔬食健康餐 <span className="float-end">$NT 990</span>
                    </h6>
                    <button
                      type="button"
                      className="btn btn-outline-primary  w-100"
                    >
                      加入購物車
                    </button>
                  </div>
                </div>
              </div>{" "}
              <div className="col">
                <div className="card">
                  <img
                    src="https://media.istockphoto.com/id/1361394182/photo/funny-british-shorthair-cat-portrait-looking-shocked-or-surprised.jpg?s=612x612&w=0&k=20&c=6yvVxdufrNvkmc50nCLCd8OFGhoJd6vPTNotl90L-vo="
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h6 className="card-title">
                      全蔬食健康餐 <span className="float-end">$NT 990</span>
                    </h6>
                    <button
                      type="button"
                      className="btn btn-outline-primary  w-100"
                    >
                      加入購物車
                    </button>
                  </div>
                </div>
              </div>{" "}
              <div className="col">
                <div className="card">
                  <img
                    src="https://media.istockphoto.com/id/1361394182/photo/funny-british-shorthair-cat-portrait-looking-shocked-or-surprised.jpg?s=612x612&w=0&k=20&c=6yvVxdufrNvkmc50nCLCd8OFGhoJd6vPTNotl90L-vo="
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h6 className="card-title">
                      全蔬食健康餐 <span className="float-end">$NT 990</span>
                    </h6>
                    <button
                      type="button"
                      className="btn btn-outline-primary  w-100"
                    >
                      加入購物車
                    </button>
                  </div>
                </div>
              </div>{" "}
              <div className="col">
                <div className="card">
                  <img
                    src="https://media.istockphoto.com/id/1361394182/photo/funny-british-shorthair-cat-portrait-looking-shocked-or-surprised.jpg?s=612x612&w=0&k=20&c=6yvVxdufrNvkmc50nCLCd8OFGhoJd6vPTNotl90L-vo="
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h6 className="card-title">
                      全蔬食健康餐 <span className="float-end">$NT 990</span>
                    </h6>
                    <button
                      type="button"
                      className="btn btn-outline-primary  w-100"
                    >
                      加入購物車
                    </button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img
                    src="https://media.istockphoto.com/id/1361394182/photo/funny-british-shorthair-cat-portrait-looking-shocked-or-surprised.jpg?s=612x612&w=0&k=20&c=6yvVxdufrNvkmc50nCLCd8OFGhoJd6vPTNotl90L-vo="
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h6 className="card-title">
                      全蔬食健康餐 <span className="float-end">$NT 990</span>
                    </h6>
                    <button
                      type="button"
                      className="btn btn-outline-primary  w-100"
                    >
                      加入購物車
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="bg-light p-3">
              <table className="table align-middle">
                <tbody>
                  <tr>
                    <td>
                      <a href="#">x</a>
                    </td>
                    <td>
                      <img src="" alt="" />
                    </td>
                    <td>
                      全蔬食健康餐
                      <br />
                      <small className="text-muted">NT $220</small>
                    </td>
                    <td>
                      <select name="" id="" className="form-select"></select>
                    </td>
                    <td className="text-end">NT $440</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={5} className="text-end">
                      總金額 NT $440
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
