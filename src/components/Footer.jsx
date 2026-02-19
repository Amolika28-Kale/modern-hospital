// components/Footer.jsx
import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="mb-4">
              <h3 className="text-xl font-bold">Modern Hospital</h3>
              <p className="text-blue-400">Orthopedic Center</p>
            </div>
            <p className="text-gray-400 text-sm">
              Specialized orthopedic care with compassion. Advanced surgical techniques, experienced specialists, and patient-first approach.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-gray-400 hover:text-blue-500 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-blue-500 transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-blue-500 transition-colors">Services</a></li>
              <li><a href="#doctor" className="text-gray-400 hover:text-blue-500 transition-colors">Our Doctor</a></li>
              <li><a href="#facilities" className="text-gray-400 hover:text-blue-500 transition-colors">Facilities</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-blue-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Joint Replacement Surgery</li>
              <li>Fracture & Trauma Care</li>
              <li>Spine Treatment</li>
              <li>Arthroscopy</li>
              <li>Sports Injury Treatment</li>
              <li>Physiotherapy & Rehab</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Modern Hospital - Orthopedic Center
Camp, Pune
Maharashtra - 411001, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-500" />
                <span className="text-gray-400">+91 1234567890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-500" />
                <span className="text-gray-400">info@modernhospital.in</span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-blue-500" />
                <span className="text-gray-400">Emergency: 24/7 Available</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            ATLASSkillTech Keyboard shortcuts Map data ©2026 Terms Report a map error
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;