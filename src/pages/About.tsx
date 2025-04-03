import React from 'react';
import Layout from '@/components/Layout';

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">About Pawtastic</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-bold mb-4">Our Story</h2>
          <p className="mb-4">
            Pawtastic was founded in 2023 with a simple mission: to provide premium quality pet products 
            that enhance the lives of pets and their owners. What started as a small passion project has 
            grown into a trusted brand loved by pet owners nationwide.
          </p>
          
          <h2 className="text-xl font-bold mb-4 mt-8">Our Values</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Quality:</strong> We never compromise on the quality of our products.</li>
            <li><strong>Safety:</strong> All our products undergo rigorous testing to ensure they're safe for your pets.</li>
            <li><strong>Innovation:</strong> We're constantly improving and developing new products to meet your pet's needs.</li>
            <li><strong>Sustainability:</strong> We're committed to environmentally friendly practices in all aspects of our business.</li>
          </ul>
          
          <h2 className="text-xl font-bold mb-4 mt-8">Meet Our Team</h2>
          <p className="mb-4">
            Our team consists of passionate pet lovers who understand the special bond between pets and their owners. 
            From product designers to customer support, everyone at Pawtastic is dedicated to making pet care easier and more enjoyable.
          </p>
          
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p>
              Have questions or feedback? We'd love to hear from you! Visit our <a href="/contact" className="text-pet-blue hover:underline">Contact Page</a> or email us at woof@pawtastic.com.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About; 