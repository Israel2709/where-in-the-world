import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export const Home = () => {
  const [countries, setCountries] = useState(null);
  useEffect(() => {
    const getCountries = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setCountries(data);
    };
    getCountries();
  }, []);
  return (
    <>
      <header className="bg-dark-blue">
        <div className="mx-auto w-3/4 py-4">
          <h1>Where in the world</h1>
        </div>
      </header>
      <main className="mx-auto w-3/4 py-8">
        <section className="mb-8 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {countries &&
            countries.map((country) => (
              <Link to={`/country-detail/${country.name.common}`}>
                <div className="bg-dark-blue overflow-hidden rounded">
                  <img
                    src={country.flags.svg}
                    alt=""
                    className="h-[150px] w-full bg-slate-500 object-cover"
                  />
                  <div className="p-4 pb-8">
                    <h2 className="mb-4 text-lg font-bold">
                      {country.name.official}
                    </h2>
                    <p>
                      <b>Population:</b> {country.population}
                    </p>
                    <p>
                      <b>Region:</b> {country.region}
                    </p>
                    <p>
                      <b>Capital:</b> {country.capital}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
        </section>
      </main>
    </>
  );
};
