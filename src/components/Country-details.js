import React, { Component } from "react";

import APIFunctions from "../Util/APIFunctions";

export class CountryDetails extends Component {
  state = {
    country: ""
  };
  componentDidUpdate() {
    APIFunctions.getCountryMatchParam(this);
    /*
    if (this.state.country != null) {
      if (this.state.country.borders != null) {
        this.state.country.borders.map(cca3Code => {
          var country = APIFunctions.getAllCountries().filter(
            country => country.cca3 === cca3Code
          );
          console.log(country);
          return `<li><NavLink to="/country/${cca3Code}" /> ${country}</li>`;
        });
      } else {
        console.log("no borders ");
      }
    } else {
      console.log("no state");
    }
    */
  }
  componentDidMount() {
    APIFunctions.getCountryMatchParam(this);
  }

  render() {
    const countryDisplay = this.state.country[0];
    return (
      <div className="col-5">
        {countryDisplay ? (
          <div>
            <h1>{countryDisplay.name.common}</h1>
            <p>Capital: {countryDisplay.capital[0]}</p>
            <p>Borders:</p>
          </div>
        ) : (
          "loading"
        )}
      </div>
    );
  }
}

export default CountryDetails;
