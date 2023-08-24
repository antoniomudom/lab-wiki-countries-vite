import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CountryDetails from "./pages/CountryDetailsPage";

function App() {
  console.log("probando app");
  return (
    <>
      <div className="App" style={{ fontSize: "15", backgroundColor: "blue" }}>
        <h1>WikiCountries</h1>
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/:countryId" element={<CountryDetails />} />
      </Routes>
    </>
  );
}

export default App;
