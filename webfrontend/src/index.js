import React, { Component } from "react";
import { render } from "react-dom";
import Theme from "./components/index";
import "./assets/css/style.css";

class App extends Component {
  render() {
    return (
      <div>
        <Theme />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
