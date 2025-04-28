import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const services = [
  {
    id: 'resume',
    title: 'Resume Rebuild',
    price: 1000,
    oneTime: true,
    features: [
      'Complete resume redesign',
      'ATS optimization',
      'Keyword research',
      'Career narrative development',
      'Achievement highlighting',
      'Industry-specific formatting',
      'Unlimited revisions for 2 weeks',
    ]
  },
  {
    id: 'interview',
    title: 'Interview Prep',
    price: 500,
    oneTime: true,
    features: [
      '2-hour mock interview session',
      'Personalized feedback',
      'Industry-specific questions',
      'Behavioral question training',
      'Salary negotiation tactics',
      'Video recording of session',
      'Follow-up strategy session',
    ]
  }
];

const ResumeSection = () => {
  return (
    <section className="py-16 md:py-24 bg-light">
      <div className="container-width">
        <h2 className="text-4xl font-dm font-medium mb-6 text-center">
          Resume Building & Coaching
        </h2>
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-16 text-lg font-dm">
          For professionals who need a complete career makeover, our premium services provide comprehensive support to transform your job prospects.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.id} className="card flex flex-col">
              <h3 className="text-2xl font-dm font-semibold mb-2">{service.title}</h3>
              <div className="flex items-end mb-8">
                <span className="text-3xl font-bold">${service.price}</span>
                {service.oneTime && <span className="text-gray-500 ml-1 text-base font-dm">one-time</span>}
              </div>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-primary flex-shrink-0" />
                    <span className="text-gray-700 text-base font-dm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="btn-primary w-full">
                Get Started <ArrowRight size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
