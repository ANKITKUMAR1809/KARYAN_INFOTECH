import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import {
  Home,
  AboutUs,
  Contact,
  Blog,
  Login,
  Apply,
  Certificate,
  Courses,
  WebDevelopment,
  DigitalMarketing,
  GraphicDesigning,
  VideoEditing,
  SocialMediaGainer,
  Services,
  Internship,
  Dashboard,
} from "./pages";
import Footer from "./components/Footer";
import Popup from "./components/Popup";
import Query from "./components/dashboard/Query";
import StudentForm from "./components/dashboard/StudentForm";
import GoogleAnalytics from "./GoogleAnalytics";
import CustomCursor from "./components/CustomCursor";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton";

const App = () => {
  return (
    <BrowserRouter>
    <CustomCursor />
      {/* Google Analytics */}
      <GoogleAnalytics />
      <WhatsAppFloatingButton/>
      <Navbar />
      <Popup />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/login" element={<Login />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/services/web-development-in-bihar" element={<WebDevelopment />} />
        <Route path="/services/digital-marketing-in-bihar" element={<DigitalMarketing />} />
        <Route path="/services/graphic-designing-in-bihar" element={<GraphicDesigning />} />
        <Route path="/services/video-editing-in-bihar" element={<VideoEditing />} />
        <Route path="/services/social-media-gainer-in-bihar" element={<SocialMediaGainer />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="student-query" element={<Query/>} />
          <Route path="new-admission" element={<StudentForm/>} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
