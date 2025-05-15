import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
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
        <div className="flex items-center justify-between h-[270px] bg-gradient-to-b from-[#961B2F] via-[#961B2F] to-[#961B2F] backdrop-blur-sm px-8 rounded-none relative overflow-hidden">
          <div className="flex items-center h-full relative gap-6">
            <img
              src={logo}
              alt="ThinkGrow Logo"
              className="h-20 w-auto md:h-24 lg:h-28 xl:h-32 object-contain transition-all duration-300"
              style={{ minWidth: "60px" }}
            />
            <h1 className="text-4xl md:text-5xl font-bold text-[#F1F3F0] tracking-wider drop-shadow-lg flex flex-col justify-center">
              ThinkGrow Media
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
          <div className="md:hidden bg-gradient-to-b from-[#4A0404] to-black rounded-b-lg">
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
