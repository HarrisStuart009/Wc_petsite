import React from 'react';
import Layout from '@/components/Layout';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold mb-4">Send us a message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pet-purple/30 focus:border-pet-purple"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pet-purple/30 focus:border-pet-purple"
                  placeholder="Your email address"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pet-purple/30 focus:border-pet-purple"
                  placeholder="What is this regarding?"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pet-purple/30 focus:border-pet-purple"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button 
                type="button" 
                className="pet-btn pet-btn-primary flex items-center"
              >
                <Send size={16} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">Contact Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="text-pet-orange mr-3 mt-1" size={20} />
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p className="text-gray-600">123 Pet Street, Furry City, PC 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-pet-orange mr-3 mt-1" size={20} />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-pet-orange mr-3 mt-1" size={20} />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-600">woof@pawtastic.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">Business Hours</h2>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact; 