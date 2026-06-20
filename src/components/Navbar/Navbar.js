import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 w-full z-50  ">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/30 backdrop-blur-2xl px-4 md:px-8 ">

          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/images/rexa21.png"
              alt="REXA"
              className="
                h-[50px]
                sm:h-[40px]
                md:h-[60px]
                lg:h-[60px]
                w-auto
                object-contain
              "
            />
          </div>

          {/* Contact Button */}
          <button
            onClick={() => navigate("/contact")}
            className="
              px-4
              sm:px-5
              md:px-6
              py-2
              md:py-3
              rounded-full
              bg-gradient-to-r
              from-cyan-500
              to-blue/60
              text-white
              text-sm
              md:text-base
              font-semibold
              hover:scale-105
              transition-all
              duration-300
              shadow-lg
              whitespace-nowrap
            "
          >
            Contact Us
          </button>

        </div>
      </div>
    </header>
  );
};

export default Navbar;