import React from 'react';
import Layout from '@/components/Layout';
import { useWishlistStore } from '@/stores/wishlistStore';
import ProductCard from '@/components/ProductCard';
import { Link } from 'react-router-dom';
import { ShoppingBag, Heart } from 'lucide-react';

const Wishlist = () => {
  const { items, clearWishlist } = useWishlistStore();
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">My Wishlist</h1>
            <p className="text-gray-600">Your favorite items saved for later</p>
          </div>
          
          {items.length > 0 && (
            <button 
              onClick={clearWishlist}
              className="mt-4 md:mt-0 bg-pet-error/10 text-pet-error hover:bg-pet-error/20 px-4 py-2 rounded-md transition-all duration-300"
            >
              Clear Wishlist
            </button>
          )}
        </div>
        
        {items.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fade-in">
            {items.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center animate-fade-in">
            <div className="mx-auto w-20 h-20 bg-pet-primary/10 flex items-center justify-center rounded-full mb-4">
              <Heart size={32} className="text-pet-primary" />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Your wishlist is empty</h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Save your favorite items to keep track of products you love
            </p>
            <Link 
              to="/products" 
              className="bg-pet-primary hover:bg-pet-primary/90 text-white py-3 px-6 rounded-md font-medium transition-all duration-300 hover:shadow-lg inline-flex items-center"
            >
              <ShoppingBag size={18} className="mr-2" />
              Explore Products
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Wishlist; 