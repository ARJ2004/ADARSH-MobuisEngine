import React from 'react';

const team = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    name: "David Chen",
    title: "Founder & CEO",
    bio: "David is a former tech recruiter with over 15 years of experience at top companies like Google and Amazon. He founded MobusEngine to help candidates stand out in competitive job markets."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    name: "Sarah Johnson",
    title: "Head of Resume Strategy",
    bio: "Sarah has reviewed over 10,000 resumes throughout her career in HR. She specializes in creating ATS-optimized resumes that help candidates get past screening algorithms and into interviews."
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-dark-gradient text-white">
      <div className="container-width">
        <h2 className="text-[40px] font-dm font-medium mb-16">
          About Us
        </h2>
        
        <div className="space-y-12 md:space-y-16">
          {team.map((member) => (
            <div key={member.id} className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div>
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3">
                  <h4 className="text-[24px] font-dm font-semibold">{member.name}</h4>
                  <span className="text-light font-medium text-[18px]">{member.title}</span>
                </div>
                <p className="text-gray-300 max-w-3xl text-[16px] font-dm">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
