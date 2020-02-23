import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

import countriesJSON from "./countries.json";
import Countries from "./components/Countries";
import CountryDetails from "./components/Country-details";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container">
        <div className="row">
          <Route
            path="/"
            render={props => <Countries {...props} countries={countriesJSON} />}
          />
          <Route
            exact
            path="/country/:id"
            /* PASANDO PROPS POR ROUTE */
            render={props => (
              <CountryDetails
                {...props}
                prueba="hola"
                countries={countriesJSON}
              />
            )}
          />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
