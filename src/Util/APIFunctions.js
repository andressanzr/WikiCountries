const APIFunctions = {
  getAllCountries: Component => {
    var countryList = [];
    fetch(
      "https://raw.githubusercontent.com/mledoze/countries/master/countries.json"
    )
      .then(res => {
        return res.json();
      })
      .then(data => {
        if (Component != null) {
          Component.setState({
            countries: data
          });
        } else {
          countryList = data;
        }
      });
    return countryList;
  },
  getCountryMatchParam: Component => {
    fetch(
      "https://raw.githubusercontent.com/mledoze/countries/master/countries.json"
    )
      .then(res => {
        return res.json();
      })
      .then(data => {
        Component.setState({
          country: data.filter(
            country => country.cca3 == Component.props.match.params.id
          )
        });
      });
  },
  filterByCca3: cca3 => {
    var paises = APIFunctions.getAllCountries();
    console.log("len" + paises.length);
    /*
    var country = paises.filter(
      country => country.cca3 === cca3
    );
   
    console.log(country);
    return country; */
  }
};
export default APIFunctions;
