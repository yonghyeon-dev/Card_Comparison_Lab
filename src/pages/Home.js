import React from "react";
import Hero from "../components/Hero";
import CardComparison from "../components/CardComparison";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <CardComparison />
    </div>
  );
};

export default Home;
