import React from "react";
import logo from "../../assets/logo.png";
const Navbar = () => {
  return (
    <div data-aos="fade-down" className="fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm py-4 sm:py-4">
      <div className="container">
        <div className="flex justify-between items-center ">
          <div className="flex items-center font-bold">
            <img src={logo} alt="logo" className="w-10" />
            <span className="text-white text-2xl">Sunny</span>
          </div>
          <div className="flex text-white items-center gap-6">
            <ul className="flex  gap-8 items-center text-xl py-4 sm:py-0">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="">Galaxy</a>
              </li>
            </ul>
            <div>
              <button className="btn  border-2 px-3 py-1 rounded-full">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
