
import React from 'react';
import { Truck, ShieldCheck, Award, RefreshCw } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Truck className="w-8 h-8 text-pet-blue" />,
      title: "Free & Fast Delivery",
      description: "Free delivery for all orders over $50"
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-pet-purple" />,
      title: "Secure Payment",
      description: "100% secure payment methods"
    },
    {
      icon: <Award className="w-8 h-8 text-pet-orange" />,
      title: "Quality Guarantee",
      description: "Only premium pet accessories"
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-pet-teal" />,
      title: "Easy Returns",
      description: "30-day money-back guarantee"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
