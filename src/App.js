import React from "react";
import "./App.css";
// import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
// import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
// import About from "./components/About/About";
// import Contact from "./components/Contact/Contact";
// import ScrollToTop from "./components/ScrollToTop.js";
// import Privacypolicy from "./components/Privacy-policy";
// import Termconditions from "./components/Term-conditions";
// import Disclaimer from "./components/disclaimer";
// import ReturnsRefunds from "./components/Returns-Refunds";
// import HomeAppliances from "./components/HomeAppliances/HomeAppliances";
// import KitchenAppliances from "./components/KitchenAppliances/KitchenAppliances";
// import KitchenAppliancesDetails from "./components/KitchenAppliances/KitchenAppliancesPage";
// import Support from "./components/Support/Support";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import HomeAppliancesDetails from "./components/HomeAppliances/HomeAppliancesDetails";
// import HomeAppliancesDetails from "./components/HomeAppliances/HomeAppliancesPage";
// import HomeApp from "./components/HomeAppliances/HomeApp";
// import KitchenApp from "./components/KitchenAppliances/KitchenApp";
// import DiwaliPage from "./components/Header/Diwali.js";
// import Dealer  from "./components/Dealership/Dealer.js";
// import Bloom  from "./components/Bloom/Bloom.js";
// import Refriblog  from "./components/Refriblog/Refriblog.js";
// import Acblog  from "./components/Acblog/Acblog.js";
const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      {/* <Dealer />   */}
      {/* <ScrollToTop> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about-us" element={<About />} /> */}
          {/* <Route path="/all-product" element={<Product />} /> */}
          {/* <Route path="/contact-us" element={<Contact />} /> */}
          {/* <Route path="/luxury-appliances" element={<HomeAppliances />} /> */}
          {/* <Route
            path="/luxury-appliances/:id"
            element={<HomeAppliancesDeta/ils />}
          /> */}
          {/* <Route path="/luxury-appliances/:id/:itemId/:route" element={<HomeApp />} /> */}
          {/* <Route path="/small-appliances" element={<KitchenAppliances />} /> */}
          {/* <Route */}
             {/* path="/small-appliances/:id" */}
             {/* element={<KitchenAppliancesDetails />} */}
          {/* /> */}
          {/* <Route path="/diwali-offer" element={<DiwaliPage />} /> */}
          {/* <Route path="/bloom" element={<Bloom />} /> */}
          {/* <Route path="/refriblog" element={<Refriblog />} /> */}
          {/* <Route path="/acblog" element={<Acblog />} /> */}
          {/* <Route path="/small-appliances/:id/:itemId/:route" element={<KitchenApp />} /> */}
          {/* <Route path="/support" element={<Support />} /> */}
          {/* <Route path="/privacy-policy" element={<Privacypolicy />} /> */}
          {/* <Route path="/terms-conditions" element={<Termconditions />} /> */}
          {/* <Route path="/disclaimer" element={<Disclaimer />} /> */}
          {/* <Route path="/return-refunds" element={<ReturnsRefunds />} /> */}
        </Routes>
      {/* </ScrollToTop> */}
      {/* <Footer /> */}
      <ToastContainer />
    </div>
  );
};

export default App;
