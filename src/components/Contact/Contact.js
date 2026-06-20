import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
return ( 

<div className="min-h-screen bg-black text-white relative overflow-hidden">


  {/* Aurora Background */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute -top-40 left-0 w-[700px] h-[700px] bg-cyan-500/20 blur-[220px] rounded-full" />
    <div className="absolute top-20 right-0 w-[700px] h-[700px] bg-purple-500/20 blur-[220px] rounded-full" />
  </div>

  {/* Grid */}
  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

  <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">

    {/* Heading */}
    <div className="text-center mb-16">
      <span className="px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-sm tracking-[3px] uppercase">
        Contact Us
      </span>

      {/* <h1 className="mt-8 text-5xl md:text-7xl font-black bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-transparent">
        Let's Connect
      </h1>

      <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
        Reach out to us for business inquiries, partnerships,
        collaborations and future opportunities.
      </p> */}
    </div>

    {/* Contact Cards */}
    <div className="grid md:grid-cols-3 gap-8">

      {/* Address */}
      <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl hover:border-cyan-400/40 transition-all duration-500">
        <MapPin className="w-12 h-12 text-cyan-400 mb-6" />

        <h3 className="text-2xl font-bold mb-4">
          Address
        </h3>

        <p className="text-gray-400 leading-7">
          #2HM-113, Ground Floor, 2nd H Main Road, Kasturinagar - 560043
          <br />
          Bangalore, Karnataka
          <br />
          India
        </p>
      </div>

      {/* Phone */}
      <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl hover:border-green-400/40 transition-all duration-500">
        <Phone className="w-12 h-12 text-green-400 mb-6" />

        <h3 className="text-2xl font-bold mb-4">
          Phone
        </h3>

        <p className="text-gray-400">
          +91 98765 43210
        </p>
      </div>

      {/* Email */}
      <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl hover:border-purple-400/40 transition-all duration-500">
        <Mail className="w-12 h-12 text-purple-400 mb-6" />

        <h3 className="text-2xl font-bold mb-4">
          Email
        </h3>

        <p className="text-gray-400">
          rexamobility@gmail.com
        </p>
      </div>

    </div>

   

  </div>
</div>


);
};

export default Contact;
