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
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button type="button" className="btn btn-primary">
          Primary
        </button>
        {text}
        <Input
          id="sampleText"
          text="這是一個Input"
          value={text}
          onChangleHandler={onChangleHandler}
        />
      </header>
    </div>
  );
}

export default App;
