// components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, AlertCircle } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Doctor', href: '#doctor' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#location' },
  ];

  const scrollToSection = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
            <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
   
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2" onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}>
            <div className="flex flex-col">
              <span className={`font-bold text-xl leading-tight ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
                Modern Hospital
              </span>
              <span className={`text-sm ${isScrolled ? 'text-blue-600' : 'text-blue-200'}`}>
                Orthopedic Center
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className={`font-medium transition-colors hover:text-blue-600 ${
                  isScrolled ? 'text-gray-600' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a href="tel:+911234567890" className={`flex items-center space-x-1 ${isScrolled ? 'text-gray-600' : 'text-white'}`}>
              <Phone className="w-4 h-4" />
              <span>+91 1234567890</span>
            </a>
            <button 
              onClick={() => scrollToSection('#appointment')}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden ${isScrolled ? 'text-gray-600' : 'text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4">
            <div className="flex flex-col space-y-3 px-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 hover:text-blue-600 font-medium transition-colors py-2"
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                >
                  {link.name}
                </a>
              ))}
              <a href="tel:+911234567890" className="flex items-center space-x-2 text-gray-600 py-2">
                <Phone className="w-4 h-4" />
                <span>+91 1234567890</span>
              </a>
              <button 
                onClick={() => scrollToSection('#appointment')}
                className="bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 w-full"
              >
                Book Appointment
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
    </>
  );
};

export default Navbar;