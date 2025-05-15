import React, { useEffect, useRef } from 'react';
import { Award, Target, TrendingUp, Users } from 'lucide-react';

const WeDo = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-show');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div 
      ref={sectionRef}
      className="w-full bg-gradient-to-b from-[#961B2F] to-[#961B2F] py-28 relative z-[1] overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-40 h-40 rounded-full bg-[#961B2F] blur-[100px]"></div>
        <div className="absolute bottom-[20%] right-[10%] w-60 h-60 rounded-full bg-[#961B2F] blur-[120px]"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          <div className="w-full lg:w-[35%] fade-in">
            <div className="bg-gradient-to-br from-[#961B2F]/80 to-[#961B2F]/80 p-8 rounded-2xl shadow-lg backdrop-blur-sm border border-white/10 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-red-500/20 hover:shadow-xl">
              <div className="text-center mb-6">
                <div className="inline-block p-6 bg-gradient-to-r from-[#961B2F] to-[#961B2F] rounded-full shadow-inner shadow-[#961B2F]">
                  <TrendingUp size={48} className="text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white text-center mb-4">Think Grow Media</h3>
              <p className="text-purple-100/80 text-center">
                Elevating businesses through strategic digital marketing and innovative solutions
              </p>
            </div>
          </div>

          <div className="w-full lg:w-[65%] text-white space-y-8">
            <div className="fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
                Transform Your Digital Presence
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-[#961B2F] to-[#961B2F] rounded-full mb-6"></div>
              <p className="text-lg leading-relaxed text-purple-100/90">
                Think Grow Media is a cutting-edge digital marketing agency specializing in transforming businesses through innovative online solutions. We combine creativity with data-driven strategies to deliver exceptional results that help our clients stand out in today's competitive digital landscape.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ServiceItem 
                icon={<Target />}
                title="Strategic Marketing"
                description="Tailored digital marketing solutions aligned with your specific business goals and target audience"
              />
              <ServiceItem 
                icon={<Users />}
                title="Social Media"
                description="Comprehensive social media management and engaging content creation that resonates with your audience"
              />
              <ServiceItem 
                icon={<Award />}
                title="SEO Excellence"
                description="Advanced SEO techniques to improve your online visibility and organic search rankings"
              />
              <ServiceItem 
                icon={<TrendingUp />}
                title="Paid Advertising"
                description="Results-driven paid advertising campaigns that maximize ROI and drive qualified leads"
              />
            </div>
            
            <div className="pt-6 fade-in">
              <button className="px-8 py-3 bg-gradient-to-r from-[#961B2F] to-[#961B2F] rounded-full text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-red-500/30 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-900 focus:ring-offset-2 focus:ring-offset-[#4A0404]">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceItem = ({ icon, title, description }) => {
  return (
    <div className="fade-in flex items-start gap-4 p-5 rounded-xl transition-all duration-300 hover:bg-white/5 group">
      <div className="p-3 bg-gradient-to-br from-[#961B2F] to-[#961B2F] rounded-lg border border-red-500/20 text-mar-300 group-hover:text-white group-hover:bg-gradient-to-br group-hover:from-red-800 group-hover:to-red-900 transition-all duration-300">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-purple-100/80 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default WeDo;
