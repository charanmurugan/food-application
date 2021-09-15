import React from "react";
import Sidebar from "./Components/sidebar";
import Home from "./Components/home";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Checkout from "./Components/checkout";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Sidebar />
            <Home />
          </Route>
          <Route exact path="/checkout">
            <Checkout />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
