import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdMail, IoMdCall } from "react-icons/io";
import { FaInstagramSquare,FaFacebookSquare,FaLinkedin  } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-gray-700 text-white w-full 5">
      <div className="px-3 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 py-5  gap-5">
          {/* first column */}
          <div className="first">
            <div className="space-y-2">
              <h3 className="sm:text-3xl text-xl sm:text-left text-justify font-bold">
                Be Ready To Grow
              </h3>
              <p>
                Get Exclusive <b>best Update</b> straight to your inbox.
              </p>
              <div className="flex items-center">
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-transparent border border-1 p-2 w-full h-[100%] inline-block focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-slate-500 "
                />
                <button className="py-2 px-4 bg-orange-500">Ok</button>
              </div>
            </div>
          </div>
          {/* second column */}
          <div className="second">
            <div className="space-y-2">
              <h2 className="text-[25px] font-bold">Important Links</h2>
              <div>
                <ul className="flex flex-col gap-4">
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
                </ul>
              </div>
            </div>
          </div>
          {/* third column */}
          <div className="second">
            <div className="space-y-2">
              <h2 className="text-[25px] font-bold">Quicks Links</h2>
              <div>
                <ul className="flex flex-col gap-4">
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
                </ul>
              </div>
            </div>
          </div>
          {/* fourth links */}
          <div className="fourth">
            <div className="space-y-2">
              <h2 className="text-[25px] font-bold">Contact Us</h2>
              <div className="flex items-center gap-2">
                <HiLocationMarker />
                <p>Patna,Bihar</p>
              </div>
              <div className="flex items-center gap-2">
                <IoMdMail />
                <a href="mailto:sunnyrajkcb@gmail.com">sunnyrajkcb@gmail.com</a>
              </div>
              <div className="flex items-center gap-2">
                <IoMdCall />
                <a href="tel:8936811660">8936811660</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="copyright-section hidden sm:block w-full bg-black text-white p-4">
        <div className="grid sm:grid-cols-3 grid-cols-1 ">
          <div className="flex justify-center">
            <p>@copyright2024Sunny </p>
          </div>
          <div className="flex text-white gap-4  justify-center ">
            <FaInstagramSquare className="text-2xl" />
            <FaFacebookSquare  className="text-2xl" />
            <FaLinkedin  className="text-2xl"  />
          </div>
          <div className="flex text-white gap-4 justify-center ">
            <p>Privacy Policy</p>
            <p>Term & Condition</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
