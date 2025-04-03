import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden">
      {/* Full width landscape image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Happy pets playing" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
      </div>
      
      {/* Content overlay */}
      <div className="container mx-auto px-4 h-full relative z-10">
        <div className="flex h-full items-center">
          <div className="w-full md:w-1/2 text-white animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-pet-accent">Spoil</span> Your <span className="text-pet-primary">Furry</span> Friends
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-lg">
              Discover premium accessories, toys, and treats that will make your pets wag their tails with joy!
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/products" 
                className="bg-pet-primary hover:bg-pet-primary/90 text-white py-3 px-6 rounded-md font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center"
              >
                Shop Now
                <ArrowRight size={18} className="ml-2 animate-bounce-x" />
              </Link>
              <Link 
                to="/category/food" 
                className="bg-transparent border-2 border-pet-accent text-pet-accent hover:bg-pet-accent/20 py-3 px-6 rounded-md font-medium transition-all duration-300"
              >
                Browse Food
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
