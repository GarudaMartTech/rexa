import React from "react";
import "./App.css";

import { Route, Routes } from "react-router-dom";

import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <ToastContainer />
    </div>
  );
};

export default App;
