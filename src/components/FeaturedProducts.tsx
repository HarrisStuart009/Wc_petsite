
import React from 'react';
import ProductCard from './ProductCard';
import { Product } from './ProductCard';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface FeaturedProductsProps {
  title: string;
  viewAllLink: string;
  products: Product[];
}

const FeaturedProducts = ({ title, viewAllLink, products }: FeaturedProductsProps) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
          <Link to={viewAllLink} className="text-pet-purple hover:text-pet-blue flex items-center">
            View All <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
