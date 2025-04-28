import React from 'react';

const steps = [
  {
    number: 1,
    title: "Submit Your Resume",
    description: "Simply upload your current resume to get started with our services."
  },
  {
    number: 2,
    title: "Get a Full Audit Report",
    description: "Our experts will analyze your resume and provide detailed feedback."
  },
  {
    number: 3,
    title: "Receive Your Optimized CV",
    description: "We'll enhance your resume to highlight your strengths and achievements."
  },
  {
    number: 4,
    title: "Start the Interview",
    description: "With your new resume, you'll start receiving interview invitations."
  }
];

const HowWeWorkSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-width">
        <h2 className="text-[40px] font-dm font-medium text-center mb-16">
          How we work?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div className="step" key={step.number}>
              <div className="step-number text-[32px] font-dm font-semibold">
                {step.number}
              </div>
              <h4 className="text-[24px] font-dm font-semibold mb-3">{step.title}</h4>
              <p className="text-[16px] font-dm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
