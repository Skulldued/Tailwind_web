import React from "react";
import Mountain from "../../assets/moon-surface-hd.png";
const Hero = () => {
  return (
    <div className="bg-black/20 h-full absolute top-5 left-12 z-50">
      <div className="h-full flex justify-center items-center p-4">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-4 lg:pr-36 ">
            <h1 data-aos="fade-up" className="text-white text-5xl font-bold">Orbit The Sun</h1>
            <p data-aos="fade-up" data-aos-delay="200"  className="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae labore qui ut ratione voluptate libero, reiciendis facilis! Possimus at eveniet, dolorum ut edit quasi asperiores harum nulla quam magnam aperiam labore fugiat!
           s dolor recusandae ea impedit, ipsum at?</p>
           <button data-aos="fade-up" data-aos-delay="500" className="text-black hover:bg-red-700 hover:text-white outline-none border-0 bg-blue-300 px-4 py-1  rounded-full duration-200">
            Learn More
           </button>
          </div>
          <div></div>
        </div>
      </div>
      {/* surgace section */}
      <img src={Mountain} alt="" className="absolute right-0 bottom-0 w-full brightness-50 z-10" />
      {/* bootom gradient section */}
      <div className="absolute bottom-0 z-30 bg-gradient-to-b from-transparent from-10% to-black to-90% h-[20px] sm:h-[50px] md:[60px] ">

      </div>
    </div>
  );
};

export default Hero;
