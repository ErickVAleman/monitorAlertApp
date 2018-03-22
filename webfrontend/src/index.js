import React, { Component } from "react";
import { render } from "react-dom";
import {BrowserRouter} from 'react-router-dom'
import Index from './components/index'
import "./assets/css/style.css";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>        
          <Index />
        </BrowserRouter>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
