import React, { useState, useMemo } from 'react';
import Layout from '@/components/Layout';
import ProductCard, { Product } from '@/components/ProductCard';
import { Filter } from 'lucide-react';
import { getAllProducts } from '@/utils/productData';
import FilterDialog, { FilterData } from '@/components/FilterDialog';

const Products = () => {
  const allProducts = getAllProducts();
  
  // State for managing filters
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState<FilterData>({
    priceRange: [0, 5000], // Initial price range in ₹
    categories: [],
  });

  // Calculate the maximum price for the slider
  const maxPrice = useMemo(() => {
    const prices = allProducts.map(product => product.price * 83);
    return Math.ceil(Math.max(...prices) / 100) * 100;
  }, [allProducts]);

  // Apply filters to products
  const filteredProducts = useMemo(() => {
    return allProducts.filter(product => {
      const productPrice = product.price * 83;
      const matchesPrice = productPrice >= filters.priceRange[0] && productPrice <= filters.priceRange[1];
      
      const matchesCategory = filters.categories.length === 0 || 
        filters.categories.some(cat => {
          if (cat === 'beds-furniture') return product.category === 'Beds & Furniture';
          return product.category.toLowerCase() === cat || 
                 product.category.toLowerCase().includes(cat);
        });
      
      return matchesPrice && matchesCategory;
    });
  }, [allProducts, filters]);

  const handleApplyFilters = (newFilters: FilterData) => {
    setFilters(newFilters);
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">All Products</h1>
            <p className="text-gray-600">Browse our collection of premium pet products</p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <button 
              className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-md transition-colors"
              onClick={() => setIsFilterOpen(true)}
            >
              <Filter size={18} />
              <span>Filter</span>
            </button>
            
            <FilterDialog 
              isOpen={isFilterOpen}
              onOpenChange={setIsFilterOpen}
              onApplyFilters={handleApplyFilters}
              currentFilters={filters}
              maxPrice={maxPrice}
            />
          </div>
        </div>
        
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-xl font-semibold mb-4">No products match your filters</h2>
            <p className="text-gray-500 mb-6">
              Try adjusting your filter criteria to see more products.
            </p>
            <button 
              className="bg-pet-primary text-white px-4 py-2 rounded-md hover:bg-pet-primary/90 transition-colors"
              onClick={() => setFilters({ priceRange: [0, maxPrice], categories: [] })}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Products; 