import React from "react";
import Hero from "./Hero/Hero";
import { CarruselWrapper } from "./Carrusel/CarruselWrapper";
import Products from "./OurProducts/Products";
import BestWayToBuy from "./WayToBuyCripto/BestWayToBuy";
import BannerMotion from "./Banner/Banner";
import Information from "./Information/Information";
import PreFooter from "./PreFooter/PreFooter";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <Hero />
     <CarruselWrapper />
       <Products />
     <BestWayToBuy />
      <BannerMotion />
 <Information />
 <PreFooter />     </>
  );
};

export default Home;
