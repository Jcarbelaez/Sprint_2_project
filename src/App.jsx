import React from "react";
import "./styles.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Cards from "./components/Cards/Cards";
import Filters from "./components/Filters/Filters";
import { hotelsData } from "./assets/data.js";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Filters />
      {hotelsData.map((value) => (
        <div className="main-container">
          <Cards
            slug={value.slug}
            name={value.name}
            photo={value.photo}
            description={value.description}
            availabilityFrom={value.availabilityFrom}
            availabilityTo={value.availabilityTo}
            rooms={value.rooms}
            city={value.city}
            country={value.country}
            price={value.price}
          />
        </div>
      ))}
      <Footer />
    </div>
  );
}
