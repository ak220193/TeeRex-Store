import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";

import Categories from "../Components/Categories/Categories";
import Deal from "../Components/Deal/Deal";
import Footer from "../Components/Footer/Footer";




const Mainpage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      
    

      <Categories />
    
      <Deal />
      
      <Footer />
    </div>
  );
};

export default Mainpage;
