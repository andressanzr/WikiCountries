import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import APIFunctions from "../Util/APIFunctions";

export class Countries extends Component {
  state = {
    countries: []
  };
  componentDidMount() {
    APIFunctions.getAllCountries(this);
  }

  render() {
    return (
      <div className="col-4" id="boxFlex">
        <h1>List of Countries</h1>
        <div className="list-group" style={{ overflow: "scroll" }}>
          {this.state.countries.map(country => {
            return (
              <NavLink to={"/country/" + country.cca3} key={country.cca3}>
                <button
                  type="button"
                  className="list-group-item list-group-item-action"
                >
                  <img
                    src={
                      "https://www.countryflags.io/" +
                      country.cca2 +
                      "/flat/64.png"
                    }
                    width="38px"
                    style={{ marginRight: "10px" }}
                  />
                  {country.name.common}
                </button>
              </NavLink>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Countries;
