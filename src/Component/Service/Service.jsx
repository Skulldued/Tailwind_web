import React from "react";
import { FaReact } from "react-icons/fa";
import { FaShuttleSpace, FaSpaceAwesome } from "react-icons/fa6";
import Wave from "../../assets/wave Gif.gif";
const ServiceData = [
  {
    title: "sun",
    content: "300-1500km",
    description:
      "Solar system observations capturing stunning images of the universe",
    icon: <FaReact className="text-7xl" />,
    aosDelay: "300",
  },
  {
    title: "Moon",
    content: "300-1500km",
    description:
      "Moon solar system observations capturing stunning images of the universe",
    icon: <FaShuttleSpace className="text-7xl" />,
    aosDelay: "300",
  },
  {
    title: "Gps",
    content: "300-1500km",
    description:
      "Moon solar system observations capturing stunning images of the universe",
    icon: <FaSpaceAwesome className="text-7xl" />,
    aosDelay: "300",
  },
];
const Service = () => {
  return (
    <div className="bg-black text-white relative z-50">
      <div className="container">
        <div className="min-h[400px] ">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 relative z-10">
            {ServiceData.map((items, index) => (
              <div data-aos="fade-up" data-aos-delay={items.aosDelay} className="min-h-[180px] flex flex-col justify-center items-center rounded-xl  bg-sky-900/60 backdrop-blur-sm text-center gap-3 py-8 text-2xl px-3  w-full lg:w-[300px] mx-auto " key={index}>
                {items.icon}
                <h1>{items.title}</h1>
                <p>{items.content}</p>
                <p className="text-sm">{items.description}</p>
              </div>
            ))}
          </div>
          <img src={Wave} className="h-[200px] w-full object-cover mix-blend-screen -translate-y-20 relative z-[0]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Service;
