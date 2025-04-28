import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

const plans = [
  {
    id: 'essentials',
    name: 'App/Resume',
    price: 35,
    period: 'month',
    features: [
      'Resume review and optimization',
      'ATS-friendly formatting',
      'Keyword optimization',
      'One revision round',
      '3-day delivery',
    ],
    popular: false,
  },
  {
    id: 'standard',
    name: 'Starter',
    price: 50,
    period: 'month',
    features: [
      'Everything in App/Resume, plus:',
      'Cover letter writing',
      'LinkedIn profile optimization',
      'Two revision rounds',
      '2-day delivery',
    ],
    popular: true,
  },
  {
    id: 'pro',
    name: 'Plus',
    price: 100,
    period: 'month',
    features: [
      'Everything in Starter, plus:',
      'Tailored applications for 5 jobs',
      'Interview preparation guide',
      'Unlimited revisions for 30 days',
      '1-day rush delivery',
    ],
    popular: false,
  }
];

const PricingSection = () => {
  return (
    <section id="plans" className="py-16 md:py-24 bg-white">
      <div className="container-width">
        <h2 className="text-3xl md:text-4xl font-dm font-medium mb-16 text-center">
          Job Application Service Plans
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan) => (
            <div 
              key={plan.id} 
              className={`card border ${plan.popular ? 'border-primary' : 'border-gray-200'} flex flex-col`}
            >
              {plan.popular && (
                <div className="bg-primary text-white text-xs py-1 px-3 rounded-full self-end">
                  Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              
              <div className="flex items-end mb-8">
                <span className="text-3xl font-bold">${plan.price}</span>
                <span className="text-gray-500 ml-1">/ {plan.period}</span>
              </div>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-primary flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="btn-primary w-full">
                Get Started
              </button>
            </div>
          ))}
        </div>
        
        {/* Advanced plan */}
        <div className="bg-primary text-white rounded-lg p-8 flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="text-2xl font-bold mb-2">Advanced</h3>
            <div className="flex items-center mb-4">
              <span className="text-3xl font-bold">$150</span>
              <span className="opacity-80 ml-1">/ month</span>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle size={20} className="text-light flex-shrink-0" />
                <span>All features in Plus plan</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={20} className="text-light flex-shrink-0" />
                <span>Dedicated career coach</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={20} className="text-light flex-shrink-0" />
                <span>Weekly 1:1 coaching calls</span>
              </li>
            </ul>
          </div>
          
          <button className="btn-secondary hover:bg-[#022183] hover:text-white">
            Get Started <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
