import React, { useState } from "react";
import ReactDOM from "react-dom";
import logo from "./logo.svg";
import "./index.css";
import "./style.scss";
console.log("aaaa");

const App = props => {
  const [test, setTest] = useState(0);
  return (
    <div onClick={() => setTest(test + 1)} className="App">
      <img className="App-Logo" src={logo} alt="React Logo" />
      <h1 className="App-Title">Hello Parcel x React - {test}</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
