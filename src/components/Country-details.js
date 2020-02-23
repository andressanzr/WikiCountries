import React, { Component } from "react";
import { Link } from "react-router-dom";

export class CountryDetails extends Component {
  render() {
    const country = this.props.countries.filter(
      country => country.cca3 === this.props.match.params.id
    );
    var bordersList = [];

    country[0].borders.map(border => {
      this.props.countries.map(country => {
        if (country.cca3 === border) {
          bordersList.push(country);
        }
      });
    });

    var currenciesList = Object.keys(country[0].currencies);
    var languagesList = Object.keys(country[0].languages);
    return (
      <div className="col-5">
        {country[0] ? (
          <div>
            <h1>{country[0].name.common}</h1>
            <p>Capital: {country[0].capital[0]}</p>
            <p>Area: {country[0].area} km²</p>
            <p>Spoken languages:</p>
            <ul>
              {languagesList.map(lang => {
                return <li>{country[0].languages[lang]}</li>;
              })}
            </ul>

            <p>
              Currencies:{" "}
              {currenciesList.map(curr => {
                return (
                  country[0].currencies[curr].name +
                  " (" +
                  country[0].currencies[curr].symbol +
                  ")"
                );
              })}
            </p>
            <p>Borders:</p>
            {bordersList.length ? (
              <ul>
                {bordersList.map(border => {
                  return (
                    <li>
                      <Link to={"/country/" + border.cca3} key={border.cca3}>
                        {border.name.common}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            ) : (
              "No borders"
            )}
          </div>
        ) : (
          "loading"
        )}
      </div>
    );
  }
}

export default CountryDetails;
