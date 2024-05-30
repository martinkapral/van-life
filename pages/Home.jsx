import React from "react";
import { Link } from "react-router-dom";
import homeImg from "../assets/images/home-hero.png";

export default function Home() {
  return (
    <div className="home-container">
      <img src={homeImg} className="home-hero-image" />
      <div className="about-page-content">
        <h1>You got the travel plans, we got the travel vans.</h1>
        <p>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link to="vans">Find your van</Link>
      </div>
    </div>
  );
}
