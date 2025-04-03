import React from 'react';
import Layout from '@/components/Layout';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock blog posts
const blogPosts = [
  {
    id: 1,
    title: "10 Essential Tips for New Pet Owners",
    excerpt: "Bringing a new pet home is exciting but can also be overwhelming. Here are our top tips to help you and your new furry friend adjust...",
    image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    date: "March 15, 2023",
    author: "Dr. Jane Smith",
    category: "Pet Care"
  },
  {
    id: 2,
    title: "The Best Cat Toys for Indoor Cats",
    excerpt: "Indoor cats need mental and physical stimulation to stay happy and healthy. These toys will keep your feline friend entertained for hours...",
    image: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    date: "April 2, 2023",
    author: "Feline Specialist",
    category: "Cats"
  },
  {
    id: 3,
    title: "Understanding Your Dog's Body Language",
    excerpt: "Dogs communicate primarily through body language. Learning to read these signals can help you better understand your canine companion...",
    image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    date: "May 10, 2023",
    author: "Canine Behaviorist",
    category: "Dogs"
  },
  {
    id: 4,
    title: "Nutrition Guide for Small Pets",
    excerpt: "Proper nutrition is essential for the health of small pets like hamsters, guinea pigs, and rabbits. Here's what you need to know...",
    image: "https://images.unsplash.com/photo-1591561582301-7ce6587cc286?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    date: "June 18, 2023",
    author: "Small Animal Vet",
    category: "Small Pets"
  }
];

const Blog = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-2">Pet Blog</h1>
        <p className="text-gray-600 mb-8">Tips, advice, and stories for pet lovers</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <div key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105" 
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span className="bg-pet-purple/10 text-pet-purple px-2 py-0.5 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
                
                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar size={14} className="mr-1" />
                  <span className="mr-4">{post.date}</span>
                  <User size={14} className="mr-1" />
                  <span>{post.author}</span>
                </div>
                
                <Link 
                  to={`/blog/${post.id}`} 
                  className="text-pet-blue font-medium flex items-center hover:text-pet-purple transition-colors"
                >
                  Read More <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Stay updated with the latest pet care tips, product reviews, and exclusive offers.
          </p>
          
          <div className="flex max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-pet-purple/30 focus:border-pet-purple"
            />
            <button className="bg-pet-purple text-white px-6 py-3 rounded-r-md hover:bg-purple-600 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog; 