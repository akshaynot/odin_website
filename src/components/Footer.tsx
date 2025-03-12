import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-orange-500 mb-4">ODIN</h3>
          <p className="text-gray-400">
            Empowering Communities, Enhancing Lives through sustainable development and cultural preservation.
          </p>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/about" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">About Us</Link></li>
            <li><Link to="/work" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">Our Work</Link></li>
            <li><Link to="/get-involved" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">Get Involved</Link></li>
            <li><Link to="/news" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">News</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
          <ul className="space-y-2">
            <li className="flex items-center text-gray-400">
              <MapPin size={18} className="mr-2" />
              123 NGO Street, City, Country
            </li>
            <li className="flex items-center text-gray-400">
              <Phone size={18} className="mr-2" />
              +1 234 567 890
            </li>
            <li className="flex items-center text-gray-400">
              <Mail size={18} className="mr-2" />
              contact@odin.org
            </li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-gray-800">
        <p className="text-center text-gray-400">
          © 2024 ODIN Cultural and Social Welfare Society. All rights reserved.
        </p>
      </div>
    </footer>
  );
}