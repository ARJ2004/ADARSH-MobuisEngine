import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section
      className="text-white py-20 md:py-32"
      style={{
        backgroundImage: "url('src/lib/Gradient.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container-width flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 mb-12 lg:mb-0">
          <h1 className="text-[80px] font-sora font-semibold mb-6 leading-tight">
            Land job interviews<br />
            <span className="text-light">10x faster</span>
          </h1>
          <p className="text-[18px] font-dm-sans font-normal mb-8 opacity-90 max-w-xl">
            We help job seekers optimize their resumes and applications to get more interviews with top companies.
          </p>
          <button className="btn-secondary hover:bg-[#022183] hover:text-white">
            Get Started <ArrowRight size={20} />
          </button>
        </div>
        
        <div className="lg:w-1/3 relative">
          <div className="bg-white text-dark rounded-lg p-6 shadow-xl relative z-10">
            <div className="flex justify-between items-start mb-4">
              <h4 className="text-primary font-dm-sans font-semibold text-[24px] uppercase">eBook / Free</h4>
              <span className="text-primary font-bold">PDF</span>
            </div>
            <h3 className="text-[32px] font-dm-sans font-semibold mb-6">WINNING RESUME TRENDS 2025</h3>
            <div className="w-full h-40 bg-light rounded-md mb-6"></div>
            <div className="flex items-center gap-2 text-[16px] font-dm-sans font-normal text-gray-600">
              <span>Free to download</span>
              <div className="h-4 w-px bg-gray-300"></div>
              <span>15 pages</span>
            </div>
          </div>
          
          {/* Blue blob decoration */}
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary rounded-full opacity-20 blur-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
