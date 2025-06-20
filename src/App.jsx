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
        <Route path="/kiec/" element={<Home />} />
        <Route path="/kiec/about-us" element={<AboutUs />} />
        <Route path="/kiec/contact-us" element={<Contact />} />
        <Route path="/kiec/services" element={<Services />} />
        <Route path="/kiec/blog" element={<Blog />} />
        <Route path="/kiec/internship" element={<Internship />} />
        <Route path="/kiec/login" element={<Login />} />
        <Route path="/kiec/apply" element={<Apply />} />
        <Route path="/kiec/certificate" element={<Certificate/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
