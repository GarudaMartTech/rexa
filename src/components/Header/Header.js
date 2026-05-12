import React from "react";

const Header = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* ===================================================== */}
      {/* BACKGROUND */}
      {/* ===================================================== */}

      <div className="absolute inset-0 bg-black" />

      {/* RED AMBIENT GLOW */}

      <div
        className="
          absolute
          top-[-20%]
          left-1/2
          -translate-x-1/2
          w-[900px]
          h-[900px]
          rounded-full
          bg-red/20
          blur-[180px]
          pointer-events-none
        "
      />

      {/* DARK OVERLAY */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-black
          via-black/60
          to-black
        "
      />

      {/* ===================================================== */}
      {/* TOP LOGO / BRAND */}
      {/* ===================================================== */}

      <div
        className="
          absolute
          top-0
          left-1/2
          z-30
          w-full
          max-w-[450px]
          -translate-x-1/2
          px-4
          pt-6
          md:pt-8
        "
      >
        <div className="flex items-center justify-center">
          <img
            src={require("../image/name.png")}
            alt="Company Name"
            loading="eager"
            className="
              h-auto
              w-full
              object-contain
              select-none
            "
          />
        </div>
      </div>

      {/* ===================================================== */}
      {/* CENTER IMAGE */}
      {/* ===================================================== */}

      <div
        className="
          absolute
          inset-0
          z-10
          flex
          items-center
          justify-center
          px-4
        "
      >
        {/* IMAGE */}

        <img
          src={require("../image/1234.png")}
          alt="Electric Bike Tail Light"
          loading="eager"
          className="
            relative
            z-20
            w-full
            max-w-[850px]
            object-contain
            select-none
            transition-all
            duration-500
           
          "
        />
      </div>

      {/* ===================================================== */}
      {/* BOTTOM CONTENT */}
      {/* ===================================================== */}

      <div
        className="
          relative
          z-30
          flex
          h-full
          flex-col
          items-center
          justify-end
          px-6
          pb-10
          text-center
        "
      >
        {/* LAUNCH TEXT */}

        <h2
          className="
            mb-8
            bg-white
            bg-clip-text
            text-3xl
            font-black
            uppercase
            leading-none
            tracking-[4px]
            text-transparent
            drop-shadow-[0_0_40px_rgba(255,0,0,0.9)]
            sm:text-4xl
            md:text-5xl
            md:tracking-[6px]
          "
        >
          Launching Soon
        </h2>

        {/* PREMIUM LINE */}

        <div
          className="
            h-[2px]
            w-32
            bg-gradient-to-r
            from-transparent
            via-white
            to-transparent
            md:w-48
          "
        />
      </div>
    </section>
  );
};

export default Header;