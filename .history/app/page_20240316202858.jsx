import React from 'react';
import NavbarComponent from "../components/navbar-component";
import { Hero } from '../components/landing/Hero';
import Sponsors from "../components/landing/Sponsors";
import { About } from "../components/landing/About";
import { HowItWorks } from "../components/landing/HowItWorks";
import {Features} from "../components/landing/Features";
// import { Cta } from "../components/landing/Cta";
import { Services } from "../components/landing/Services";
import { Testimonials } from "../components/landing/Testimonials";
import { Team } from "../components/landing/Team";
import { Pricing } from "../components/landing/Pricing";
import { Newsletter } from "../components/landing/Newsletter";
import { FAQ } from "../components/landing/FAQ";
import { Footer } from "../components/landing/Footer";
import {ScrollToTop} from "../components/landing/ScrollToTop";

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
