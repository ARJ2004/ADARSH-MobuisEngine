import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container-width py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="src/lib/Group 21 (1).png" alt="Logo" className="h-8 w-8" />
              <span className="font-dm text-2xl font-semibold text-white">MobuisEngine</span>
            </div>
            <p className="font-dm-sans text-[18px] text-gray-400 max-w-xs">
              Helping job seekers land their dream jobs with optimized resumes and personalized career coaching.
            </p>
          </div>

          <div>
            <h4 className="font-dm-sans font-semibold text-[24px] mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="font-dm-sans text-[16px] text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="font-dm-sans text-[16px] text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="font-dm-sans text-[16px] text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="font-dm-sans text-[16px] text-gray-400 hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-dm-sans font-semibold text-[24px] mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="font-dm-sans text-[16px] text-gray-400 hover:text-white transition-colors">Resume Templates</a></li>
              <li><a href="#" className="font-dm-sans text-[16px] text-gray-400 hover:text-white transition-colors">Interview Tips</a></li>
              <li><a href="#" className="font-dm-sans text-[16px] text-gray-400 hover:text-white transition-colors">Career Advice</a></li>
              <li><a href="#" className="font-dm-sans text-[16px] text-gray-400 hover:text-white transition-colors">Help Center</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-dm-sans font-semibold text-[24px] mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="font-dm-sans text-[16px] text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="font-dm-sans text-[16px] text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="font-dm-sans text-[16px] text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="font-dm-sans text-[16px] text-gray-400 hover:text-white transition-colors">GDPR</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="font-dm-sans text-[16px] text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 MobusEngine. All rights reserved.
          </p>

          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              {/* Social Media Icons */}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
