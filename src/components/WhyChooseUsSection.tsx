import React from 'react';

const features = [
  {
    id: 1,
    icon: <span role="img" aria-label="heart">❤️</span>,
    title: "Trusted by Top Talent",
    description: "Over 10,000 professionals have used our services to land jobs at Fortune 500 companies."
  },
  {
    id: 2,
    icon: <span role="img" aria-label="person">👤</span>,
    title: "Resume That Gets Noticed",
    description: "Our optimized resumes are 10x more likely to get past ATS systems and into a recruiter's hands."
  },
  {
    id: 3,
    icon: <span role="img" aria-label="star">⭐</span>,
    title: "Dedicated Support",
    description: "Get personalized guidance and advice from our career experts throughout your job search."
  }
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-light">
      <div className="container-width">
        <h2 className="text-3xl md:text-4xl font-dm-sans font-medium mb-16 text-center">
          Why Choose Us?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item) => (
            <div key={item.id} className="rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">
                {item.icon}
              </div>
              <h4 className="mb-3 text-xl font-bold">{item.title}</h4>
              <p className="text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
