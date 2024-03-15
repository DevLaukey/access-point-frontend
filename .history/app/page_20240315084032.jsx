import React from 'react';
import NavbarComponent from "../components/navbar-component";
import { Hero } from '../components/landing/Hero';
import Sponsors from "../components/landing/Sponsors";
import { About } from "../components/landing/About";
import { HowItWorks } from "../components/landing/HowItWorks";
import {Features} from "../components/landing/Features";

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
