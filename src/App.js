import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

import Countries from "./components/Countries";
import CountryDetails from "./components/Country-details";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container">
        <div className="row">
          <Route path="/" component={Countries} />
          <Route
            exact
            path="/country/:id"
            /* PASANDO PROPS POR ROUTE */
            render={props => <CountryDetails {...props} prueba="hola" />}
          />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
