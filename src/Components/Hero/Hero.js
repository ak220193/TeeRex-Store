import React from "react";
import { Link } from "react-router-dom";
import heroImage from '../../assets/pexels-photo-1706912.jpeg';

import "./Hero.css";

const Hero = () => {
  return <section id="Hero">
  <div className="Hero-container" id="
  Hero-container">
  <div className="Caption">
  <h1> Let's Find Your Perfect Tees </h1>
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore.</p>

  <Link to="/products"> {/* Use Link for navigation */}
  <button className="btn">Shop now</button>
</Link>
  </div>
  <div className="Hero-right" id="Hero-right">
  <img src={heroImage} alt="banner" />
  
  
  </div>
  </div>
  
  
  
  </section>;
};

export default Hero;
