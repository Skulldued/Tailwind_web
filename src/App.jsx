import React from "react";
import { useEffect } from "react";
import bgvideo from "./assets/earth-bg.mp4";
import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";
import Service from "./Component/Service/Service";
import Banner from "./Component/Banner/Banner";
import BannerSame from "./Component/Banner/BannerSame";
import Footer from "./Component/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
const App = () => {

React.useEffect(()=>{
  AOS.init({
    duration:1200,
    easing:"ease-in-out",
  });
});



  return (
    <div>
      <div className="h-[700px] relative">
        <video
          className="w-full right-0 top-0 h-[700px] object-cover z[-1]"
          autoPlay
          loop
          muted
        >
          <source src={bgvideo} type="video/mp4"></source>
        </video>
        <Navbar />
        <Hero/>
      </div>
      {/* services card section  */}
      <Service/>
      <Banner/>
      <BannerSame />
      <Footer/>
    </div>
  );
};

export default App;
