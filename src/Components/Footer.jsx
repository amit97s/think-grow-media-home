import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
  };

  return (
    <footer className="w-full bg-gradient-to-b from-[#2F0E13] via-black to-black py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Column - Logo and Info */}
          <div className="space-y-8">
            <h2 className="text-6xl font-bold text-white tracking-tight">THINK GROW</h2>
            <div className="space-y-2 text-[#FFE5E5]">
              <p>Unit No-710, 7th Floor, Tower-C, B-8 Noida One</p>
              <p> Sector - 62, Noida -201309 (U.P.)</p>
              <p className="text-xl font-light">info@thinkgrowmedia.com</p>
            </div>
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-4xl text-white font-medium">Stay connected</h3>
              <p className="text-xl text-[#FFE5E5] leading-relaxed">
                Join our newsletter and stay updated on the latest trends in marketing.
              </p>
            </div>

            {submitted ? (
              <div className="text-xl text-[#FFE5E5]">
                Thanks for subscribing! ✨
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail"
                    className="w-full bg-transparent text-white text-xl py-4 border-b border-[#FF9999]/30 focus:border-[#FF9999] transition-colors duration-300 outline-none placeholder:text-[#FFE5E5]/50"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute right-0 bottom-3 p-2 rounded-full bg-[#800000]/20 text-[#FFE5E5] hover:bg-[#800000]/40 transition-colors duration-300"
                  >
                    <ArrowRight className="w-6 h-6" />
                  </button>
                </div>
              </form>
            )}

            <p className="text-[#FFE5E5]/60 text-lg max-w-md">
              Think Grow is your partner for branding, storytelling, content creation, and performance marketing.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;