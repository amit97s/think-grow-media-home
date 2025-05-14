import { useState, useEffect } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visibleIndex, setVisibleIndex] = useState(0);
  const services = [
    "E-commerce",
    "Digital Marketing",
    "SEO",
    "Lead Generation",
    "Social Media",
    "Branding"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleIndex((prev) => (prev < services.length - 1 ? prev + 1 : 0));
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <header className="w-full z-[100]">
      <div className="">
        <div className="flex items-center justify-between h-[270px] bg-gradient-to-b from-[#3D2A8A] via-[#2D1B69] to-[#251455] backdrop-blur-sm px-8 rounded-none relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#2D1B69]/40 via-[#1A103F]/30 to-black/20 pointer-events-none"></div>
          <div className="flex items-center h-full relative">
            <h1 className="text-5xl font-bold text-[#F1F3F0] tracking-wider drop-shadow-lg">
              ThinkGrow
              <div className="h-[40px] mt-4 relative overflow-hidden">
                {services.map((service, index) => (
                  <span
                    key={service}
                    className={`absolute left-0 text-2xl font-normal transition-all duration-500
                      ${index === visibleIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  >
                    {service}
                    <span className={`absolute -bottom-2 left-0 w-full h-0.5 bg-[#A6A7A3] transform origin-left transition-transform duration-500
                      ${index === visibleIndex ? 'scale-x-100' : 'scale-x-0'}`}></span>
                  </span>
                ))}
              </div>
            </h1>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-gradient-to-b from-[#1A103F] to-black rounded-b-lg">
            <nav className="px-8 py-6">
              <ul className="space-y-6">
                <li>
                  <a href="#" className="block text-[#F1F3F0]/90 hover:text-[#F1F3F0] transition-colors duration-300 text-lg uppercase tracking-wider font-medium">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="block text-[#F1F3F0]/90 hover:text-[#F1F3F0] transition-colors duration-300 text-lg uppercase tracking-wider font-medium">
                    What We Do
                  </a>
                </li>
                <li>
                  <a href="#" className="block text-[#F1F3F0]/90 hover:text-[#F1F3F0] transition-colors duration-300 text-lg uppercase tracking-wider font-medium">
                    Why Us
                  </a>
                </li>
                <li>
                  <a href="#" className="block text-[#F1F3F0]/90 hover:text-[#F1F3F0] transition-colors duration-300 text-lg uppercase tracking-wider font-medium">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
