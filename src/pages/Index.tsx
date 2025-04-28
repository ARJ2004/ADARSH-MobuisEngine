
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import HowWeWorkSection from '../components/HowWeWorkSection';
import AboutSection from '../components/AboutSection';
import TestimonialsSection from '../components/TestimonialsSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import PricingSection from '../components/PricingSection';
import ResumeSection from '../components/ResumeSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <HowWeWorkSection />
      <AboutSection />
      <TestimonialsSection />
      <WhyChooseUsSection />
      <PricingSection />
      <ResumeSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
