import React from 'react';
import { ArrowRight } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-primary text-white">
      <div className="container-width">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <h2 className="text-[40px] font-dm font-medium mb-4">
              STILL HAVE DOUBTS?
            </h2>
            <h3 className="text-[32px] font-dm font-semibold mb-0">Contact us</h3>
          </div>
          
          <button className="bg-white text-primary font-medium px-6 py-3 rounded-full mt-6 md:mt-0 hover:bg-light transition-colors flex items-center gap-2">
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
