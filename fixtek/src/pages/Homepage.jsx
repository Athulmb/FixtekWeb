
// src/pages/Homepage.jsx
import React from "react";
import HeroSection from "../Components/Home/HeroSection";
import AboutSection from "../Components/Home/AboutSection";
import ServiceSection from "../Components/Home/ServiceSection";

import Testimonials from "../Components/Home/Testimonials";
import Footer from "../Components/common/Footersection";
import WhyChooseFixtek from "../Components/Home/WhyChooseFixtek";

function Homepage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <Testimonials />

      <WhyChooseFixtek />
      <Footer />
    </>
  );
}
export default Homepage;


