
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand and About */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold text-white">Paw<span className="text-pet-orange">tastic</span></span>
            </Link>
            <p className="text-gray-300 mb-4">
              Your one-stop shop for all premium pet accessories. Making tails wag since 2023.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white transition-colors">Shop All</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Pet Blog</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/dogs" className="text-gray-300 hover:text-white transition-colors">Dogs</Link>
              </li>
              <li>
                <Link to="/category/cats" className="text-gray-300 hover:text-white transition-colors">Cats</Link>
              </li>
              <li>
                <Link to="/category/birds" className="text-gray-300 hover:text-white transition-colors">Birds</Link>
              </li>
              <li>
                <Link to="/category/small-pets" className="text-gray-300 hover:text-white transition-colors">Small Pets</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-pet-orange" />
                <p className="text-gray-300">123 Pet Street, Furry City, PC 12345</p>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-2 text-pet-orange" />
                <p className="text-gray-300">(555) 123-4567</p>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-2 text-pet-orange" />
                <p className="text-gray-300">woof@pawtastic.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Pawtastic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
