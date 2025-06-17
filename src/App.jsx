import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import {
  Home,
  AboutUs,
  Contact,
  Services,
  Blog,
  Disclaimer,
  FAQ,
  Login,
  PrivacyPolicy,
  Products,
  Apply,
  Support,
  TermsConditions,
} from "./pages";
import Footer from "./components/Footer";
import Internship from "./pages/Internship";
import Popup from "./components/Popup";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Popup />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/support" element={<Support />} />
        <Route path="/login" element={<Login />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
