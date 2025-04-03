import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import ProductCard, { Product } from '@/components/ProductCard';
import { toast } from 'sonner';
import { Search as SearchIcon, ArrowLeft } from 'lucide-react';
import { searchProducts } from '@/utils/productData';

const Search = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q') || '';
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [relatedSearches, setRelatedSearches] = useState<string[]>([]);

  useEffect(() => {
    setLoading(true);
    
    // Search for products that match the query
    const filtered = searchProducts(query);
    setProducts(filtered);
    setLoading(false);
    
    // Generate related searches based on categories and product types
    if (query) {
      const relatedTerms = [
        'Dogs', 'Cats', 'Birds', 'Small Pets', 
        'Toys', 'Food', 'Accessories', 'Beds', 'Treats', 'Grooming'
      ].filter(term => !term.toLowerCase().includes(query.toLowerCase()))
       .slice(0, 5);
      
      setRelatedSearches(relatedTerms);
    }
    
    if (filtered.length === 0 && query) {
      toast.info(`No products found matching "${query}"`);
    }
  }, [query]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Header section */}
        <div className="mb-8">
          <div className="flex items-center mb-2">
            <Link to="/" className="text-gray-500 hover:text-pet-purple mr-2">
              <ArrowLeft size={18} />
            </Link>
            <h1 className="text-2xl md:text-3xl font-bold">
              Search Results
            </h1>
          </div>
          {query && (
            <p className="text-gray-600">
              Showing results for: <span className="text-pet-purple font-medium">{query}</span>
            </p>
          )}
        </div>
        
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pet-purple"></div>
          </div>
        ) : products.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center max-w-2xl mx-auto">
            <SearchIcon size={48} className="text-gray-300 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-4">No products found</h2>
            <p className="text-gray-500 mb-6">
              We couldn't find any products matching your search for "{query}".
            </p>
            
            {relatedSearches.length > 0 && (
              <div>
                <p className="text-gray-700 font-medium mb-3">Try searching for:</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {relatedSearches.map((term, i) => (
                    <Link 
                      key={i} 
                      to={`/search?q=${encodeURIComponent(term)}`}
                      className="px-3 py-1.5 bg-gray-100 hover:bg-pet-purple/10 text-gray-800 hover:text-pet-purple rounded-full text-sm transition-colors"
                    >
                      {term}
                    </Link>
                  ))}
                </div>
              </div>
            )}
            
            <div className="mt-8">
              <Link to="/" className="pet-btn pet-btn-primary">
                Return to Home
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <p className="text-sm text-gray-500 mb-6">Found {products.length} product(s)</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Search;
