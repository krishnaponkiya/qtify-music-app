
import React from "react";
import headphones from "../../assets/headphones.png";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          100 Thousand Songs,
          <br />
          Ad-Free
        </h1>

        <h1>
          Over Thousands of Podcast Episodes
        </h1>
      </div>

      <div className="hero-image">
        <img src={headphones} alt="Headphones" />
      </div>
    </section>
  );
};

export default Hero;
