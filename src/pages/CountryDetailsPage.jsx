import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function CountryDetails() {
  const [details, setDetails] = useState(null);
  const params = useParams();

  useEffect(() => {
    getData();
  }, [params.countryId]);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://ih-countries-api.herokuapp.com/countries/${params.countryId}`
      );
      console.log(response);
      setDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (details === null) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
    <h2>{details.name.official}</h2>
    <p>Capital: {details.capital}</p>
    <p>Area: {details.area} km²</p>
    <h3>Borders:</h3>
    <ul>
      {details.borders.map((border) => (
        <li key={border}>
          <Link to={`/${border}`}>{border}</Link>
        </li>
      ))}
    </ul>
  </div>
  );
}

export default CountryDetails;

