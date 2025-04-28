import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Navbar = () => (
  <nav
    className="container-width py-4 flex justify-between items-center backdrop-blur-md"
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      opacity: 5,
    }}
  >
    <div className="flex items-center gap-2">
      <img src="/Group 21 (1).png" alt="Logo" className="h-8 w-8" />
      <span className="font-dm text-2xl font-semibold text-white">MobuisEngine</span>
    </div>

    <div className="hidden md:flex items-center gap-8 font-dm">
      <a href="#" className="hover:text-primary transition-colors">Home</a>
      <a href="#about" className="hover:text-primary transition-colors">About Us</a>
      <a href="#plans" className="hover:text-primary transition-colors">Plans</a>
      <a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a>
      <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
    </div>

    <Button className="hidden md:flex items-center gap-2 rounded-full bg-white text-primary hover:bg-[#022183] hover:text-white transition-colors">
      Get Started <ArrowRight size={16} />
    </Button>

    <div className="md:hidden">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 12H21M3 6H21M3 18H21"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  </nav>
);

export default Navbar;
