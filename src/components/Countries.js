import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Countries extends Component {
  state = {
    countries: this.props.countries
  };
  handleChange = e => {
    var filteredCountryList = this.props.countries.filter(country => {
      if (country.name.common.toLowerCase().indexOf(e.target.value) !== -1)
        return country;
    });
    this.setState({
      countries: filteredCountryList
    });
  };
  render() {
    return (
      <div className="col-4" id="boxFlex">
        <h1>List of Countries</h1>
        <p>
          Search:
          <input
            type="text"
            className="form-control"
            placeholder="Search for a country"
            onChange={this.handleChange}
          />
        </p>
        <div
          className="list-group"
          style={{ overflow: "scroll", maxHeight: "90vh" }}
        >
          {this.state.countries.map(country => {
            return (
              <Link to={"/country/" + country.cca3} key={country.cca3}>
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
                    alt={"flag of " + country.name.common}
                    width="38px"
                    style={{ marginRight: "10px" }}
                  />
                  {country.name.common}
                </button>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Countries;
