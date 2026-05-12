import React from "react";
import logo from "../image/text.jpeg";
// import bikeLight from "../image/1234.png";
import  bgimage from "../image/bbbb.jpeg"

const LaunchingSoon = () => {
  return (
    <div
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black"
      style={{
        backgroundImage: `url(${bgimage})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >

      {/* Launching Soon Text */}
        <div className="mb-96">
          <h1 className="text-[#ffffff] mr-60 mb-18 text-4xl md:text-7xl uppercase tracking-[10px] font-light">
            Launching Soon
          </h1>

          
        </div>
      {/* Dark Overlay */}
      {/* <div className="absolute inset-0 "></div> */}

      {/* Content */}
      {/* <div className="relative z-10 flex flex-col items-center justify-center px-4"> */}
        
        {/* Logo */}
        <img
          src={logo}
          alt="REXA Logo"
          className="w-[120px] md:w-[150px]  mr-[550px] mb-[32px] object-contain "
        />

        

        
      {/* </div> */}
    </div>
  );
};

export default LaunchingSoon;