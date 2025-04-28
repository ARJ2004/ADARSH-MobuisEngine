import React from 'react';
import { ArrowRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "Thanks to MobusEngine, I landed 4 interviews in my first week of job searching. Their resume optimization service made all the difference.",
    author: "Michael T.",
    role: "Software Engineer"
  },
  {
    id: 2,
    text: "The resume they created for me perfectly highlighted my skills, and I got hired at my dream company within 3 weeks!",
    author: "Jennifer L.",
    role: "Marketing Director"
  },
  {
    id: 3,
    text: "After 6 months of searching with no luck, MobusEngine helped me get 5 interviews in just one month. Worth every penny!",
    author: "Robert K.",
    role: "Financial Analyst"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="container-width">
        <h2 className="text-4xl font-dm font-medium mb-16">
          What our clients have to say
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div key={item.id} className="bg-primary rounded-lg p-6 text-white relative">
              <div className="absolute top-6 left-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 11L7 14H5V12L8 9V7H3V14H10V11ZM21 11L18 14H16V12L19 9V7H14V14H21V11Z" fill="white" fillOpacity="0.7"/>
                </svg>
              </div>
              
              <p className="mt-12 mb-10 text-lg font-dm">
                {item.text}
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-lg font-dm">{item.author}</p>
                  <p className="text-sm text-light font-dm">{item.role}</p>
                </div>
                
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM12 8.5H8.5V12H7.5V8.5H4V7.5H7.5V4H8.5V7.5H12V8.5Z" fill="white"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <button className="btn-primary text-lg font-dm">
            See more testimonials <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
