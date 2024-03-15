import React from 'react';
import NavbarComponent from "../components/navbar-component";
import { Hero } from '../components/Hero';
import Sponsors from "../components/Sponsors";
import { About } from "../components/About";
import { HowItWorks } from "../components/HowItWorks";


const Page = () => {
    return (
      <>
        <NavbarComponent />

        <Hero />
        <Sponsors />
        <About />
        <HowItWorks />
        <Features />
        <Services />
        <Cta />
        <Testimonials />
        <Team />
        <Pricing />
        <Newsletter />
        <FAQ />
        <Footer />
        <ScrollToTop />
      </>
    );
};

export default Page;
