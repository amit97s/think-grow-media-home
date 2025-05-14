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
    <footer className="w-full bg-gradient-to-b from-[#2D1B69] via-[#2D1B69] to-[#251455] py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Column - Logo and Info */}
          <div className="space-y-8">
            <h2 className="text-6xl font-bold text-white tracking-tight">THINK GROW</h2>
            <div className="space-y-2 text-purple-200/80">
              <p>123 Digital Avenue</p>
              <p>San Francisco, CA 94105</p>
              <p className="text-xl font-light">hello@thinkgrow.media</p>
            </div>
          </div>

          {/* Right Column - Newsletter */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-4xl text-white font-medium">Stay connected</h3>
              <p className="text-xl text-purple-200/80 leading-relaxed">
                Join our newsletter and stay updated on the latest trends in marketing.
              </p>
            </div>

            {submitted ? (
              <div className="text-xl text-purple-200/80">
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
                    className="w-full bg-transparent text-white text-xl py-4 border-b border-purple-300/30 focus:border-purple-300 transition-colors duration-300 outline-none placeholder:text-purple-200/50"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute right-0 bottom-3 p-2 rounded-full bg-purple-300/20 text-purple-200 hover:bg-purple-300/30 transition-colors duration-300"
                  >
                    <ArrowRight className="w-6 h-6" />
                  </button>
                </div>
              </form>
            )}

            <p className="text-purple-200/60 text-lg max-w-md">
              Think Grow is your partner for branding, storytelling, content creation, and performance marketing.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;