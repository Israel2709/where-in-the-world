import "./App.css";
import { Contact } from "./Pages/Contact";
import { CountryDetail } from "./Pages/CountryDetail";
import { Home } from "./Pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        {/* localhost:5507 /  */}
        <Route path="/" element={<Home />} />

        {/* localhost:5507/country-detail*/}
        <Route path="/country-detail/:countryId" element={<CountryDetail />} />

        {/* localhost:5507/contacto */}

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
