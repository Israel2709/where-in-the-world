import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const CountryDetail = () => {
  const [countryData, setCountryData] = useState(null);
  const params = useParams();
  useEffect(() => {
    const getCountryByName = async () => {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${params.countryId}`,
      );

      const data = await response.json();
      console.log(data);
      setCountryData(data[0]);
    };
    getCountryByName();
  }, []);
  return (
    <>
      <p>{JSON.stringify(params)}</p>
      <h1>Country Detail</h1>
      {countryData && <h1 className="text-4xl">{countryData.name.common}</h1>}
    </>
  );
};
