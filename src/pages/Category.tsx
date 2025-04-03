import React, { useEffect, useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import ProductCard, { Product } from '@/components/ProductCard';
import { ArrowLeft, Filter } from 'lucide-react';
import { getProductsByCategory } from '@/utils/productData';
import FilterDialog, { FilterData } from '@/components/FilterDialog';

// Map category slugs to display names
const categoryDisplayNames: { [key: string]: string } = {
  'dogs': 'Dogs',
  'cats': 'Cats',
  'birds': 'Birds',
  'small-pets': 'Small Pets',
  'new-arrivals': 'New Arrivals',
  'food': 'Food'
};

const Category = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const [categoryProducts, setCategoryProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  
  // State for managing filters
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState<FilterData>({
    priceRange: [0, 5000], // Initial price range in ₹
    categories: [],
  });
  
  useEffect(() => {
    // Simulate API call to fetch category products
    const fetchCategoryProducts = () => {
      setLoading(true);
      try {
        if (categorySlug) {
          const products = getProductsByCategory(categorySlug);
          setCategoryProducts(products);
          
          // Calculate new max price based on category products
          if (products.length > 0) {
            const prices = products.map(product => product.price * 83);
            const maxPrice = Math.ceil(Math.max(...prices) / 100) * 100;
            setFilters(prev => ({
              ...prev,
              priceRange: [0, maxPrice]
            }));
          }
        } else {
          setCategoryProducts([]);
        }
      } finally {
        setLoading(false);
      }
    };
    
    fetchCategoryProducts();
  }, [categorySlug]);

  // Calculate the maximum price for the slider
  const maxPrice = useMemo(() => {
    const prices = categoryProducts.map(product => product.price * 83);
    return prices.length > 0 ? Math.ceil(Math.max(...prices) / 100) * 100 : 5000;
  }, [categoryProducts]);

  // Apply filters to products
  const filteredProducts = useMemo(() => {
    return categoryProducts.filter(product => {
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
  }, [categoryProducts, filters]);

  const handleApplyFilters = (newFilters: FilterData) => {
    setFilters(newFilters);
  };

  const categoryName = categorySlug ? (categoryDisplayNames[categorySlug] || categorySlug) : 'Products';
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link to="/products" className="text-gray-500 hover:text-pet-blue flex items-center text-sm">
            <ArrowLeft size={14} className="mr-1" /> Back to all products
          </Link>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">{categoryName}</h1>
            <p className="text-gray-600">
              {categorySlug === 'new-arrivals' 
                ? 'Check out our latest pet products' 
                : `Browse our collection of premium ${categoryName.toLowerCase()} products`}
            </p>
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
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pet-blue"></div>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center p-8 bg-white rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">No products found</h2>
            <p className="text-gray-500 mb-6">
              {filters.priceRange[0] > 0 || filters.priceRange[1] < maxPrice || filters.categories.length > 0
                ? "We couldn't find any products matching your filters."
                : "We couldn't find any products in this category."}
            </p>
            {filters.priceRange[0] > 0 || filters.priceRange[1] < maxPrice || filters.categories.length > 0 ? (
              <button 
                className="bg-pet-primary text-white px-4 py-2 rounded-md hover:bg-pet-primary/90 transition-colors"
                onClick={() => setFilters({ priceRange: [0, maxPrice], categories: [] })}
              >
                Reset Filters
              </button>
            ) : (
              <Link to="/products" className="bg-pet-primary text-white px-4 py-2 rounded-md hover:bg-pet-primary/90 transition-colors inline-block">
                Browse All Products
              </Link>
            )}
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

export default Category; 