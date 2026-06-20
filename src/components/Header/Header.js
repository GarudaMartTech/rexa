import React, { useEffect, useState } from "react";
// import { Rocket, Zap } from "lucide-react";

const Home = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Mouse Follow Glow */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(
        400px circle at ${mousePosition.x}px ${mousePosition.y}px,
        rgba(0,229,255,0.12),
        transparent 60%
      )`,
        }}
      />

      {/* Aurora Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-0 w-[700px] h-[700px] bg-cyan-500/20 blur-[220px] rounded-full animate-pulse" />

        <div className="absolute top-20 right-0 w-[700px] h-[700px] bg-purple-500/20 blur-[220px] rounded-full animate-pulse" />

        <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-blue blur-[220px] rounded-full animate-pulse" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-200 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
       

       

        

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-5xl w-full">
          <div className="group p-8 rounded-3xl border border-white/10 bg-[#19443C] backdrop-blur-2xl hover:border-cyan-400/40 hover:bg-cyan-600/50 transition-all duration-500">
            {/* <Zap className="w-12 h-12 text-purple-400 mb-5" /> */}

           

            <div className="flex justify-center items-center">
  <img
    src="/images/rexa mobility logo.png"
    alt="REXA"
    className="h-[160px] md:h-[250px] object-contain"
  />
</div>

            <p className="text-gray text-center">
             Driving the Future of Electric Mobility.
             
            </p>
            <div className="mt-4 text-center animate-pulse">
             <span className="px-6 py-3  text-black font-black rounded-full border animate-pulse border-cyan-400/20 bg-orange backdrop-blur-xl text-sm tracking-[4px] uppercase">
            🚀 Launching Soon
          </span>
          </div>
          </div>

          <div className="group p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl hover:border-purple-400/40 hover:bg-purple-500/5 transition-all duration-500">
            
            {/* <Rocket className="w-12 h-12 text-[#f90a0a] " /> */}

           

           <div className="flex justify-center items-center">
  <img
    src="/images/rexago1.png"
    alt="REXAGO"
    className="h-[160px] md:h-[250px] object-contain"
  />
</div>

            <p className="text-gray text-center ">
              Delivering Every Parcel, Faster and Smarter.
               
            </p>
            <div className="mt-4 text-center animate-pulse">
             <span className="px-6 py-3  text-black font-black rounded-full border animate-pulse border-cyan-400/20 bg-orange backdrop-blur-xl text-sm tracking-[4px] uppercase">
            🚀 Launching Soon
          </span>
          </div>
          </div>
        </div>

      

        {/* Footer */}
        <div className="mt-4 text-center underline text-gray text-sm">
          • All rights reserved © 2026 REXA MOBILITY 
        </div>
      </div>
    </div>
  );
};

export default Home;
