import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import {
  Home,
  AboutUs,
  Contact,
  Services,
  Blog,
  Login,
  Apply,
  Certificate,
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
        <Route path="/internship" element={<Internship />} />
        <Route path="/login" element={<Login />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/certificate" element={<Certificate/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
