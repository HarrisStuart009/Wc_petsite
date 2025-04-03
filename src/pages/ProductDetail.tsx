import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Product } from '@/components/ProductCard';
import { ShoppingCart, Heart, ArrowLeft, Star } from 'lucide-react';
import { useCartStore } from '@/stores/cartStore';
import { useWishlistStore } from '@/stores/wishlistStore';
import { toast } from 'sonner';
import { getProductById, getAllProducts } from '@/utils/productData';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  
  const { addItem } = useCartStore();
  const { toggleItem, isInWishlist } = useWishlistStore();

  useEffect(() => {
    // Simulate API call to fetch product details
    const fetchProduct = () => {
      setLoading(true);
      try {
        const foundProduct = getProductById(Number(id));
        
        if (foundProduct) {
          setProduct(foundProduct);
        }
      } finally {
        setLoading(false);
      }
    };
    
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      // Add product with selected quantity
      for (let i = 0; i < quantity; i++) {
        addItem(product);
      }
      
      toast.success(`Added to cart: ${product.name}`, {
        position: 'bottom-right',
      });
    }
  };

  const handleToggleWishlist = () => {
    if (product) {
      toggleItem(product);
      
      toast(inWishlist ? 'Removed from wishlist' : 'Added to wishlist', {
        icon: inWishlist ? '💔' : '❤️',
        position: 'bottom-right',
      });
    }
  };

  // Check if product is in wishlist
  const inWishlist = product ? isInWishlist(product.id) : false;

  // Related products - would normally be based on category or tags
  const relatedProducts = product 
    ? getAllProducts().filter(p => 
        p.id !== Number(id) && p.category === product.category
      ).slice(0, 4)
    : [];

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pet-blue"></div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center p-8 bg-white rounded-lg shadow-sm">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <p className="mb-6">Sorry, we couldn't find the product you're looking for.</p>
            <Link to="/products" className="pet-btn pet-btn-primary">
              Browse Products
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link to="/" className="text-gray-500 hover:text-pet-blue flex items-center text-sm">
            <ArrowLeft size={14} className="mr-1" /> Back to shopping
          </Link>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            {/* Product Image */}
            <div className="rounded-lg overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Product Details */}
            <div className="flex flex-col">
              <span className="text-sm font-medium text-pet-purple bg-pet-purple/10 px-3 py-1 rounded-full w-fit mb-3">
                {product.category}
              </span>
              
              <h1 className="text-2xl md:text-3xl font-bold mb-2">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={i < product.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500">{product.rating}.0/5</span>
              </div>
              
              <div className="text-2xl font-bold text-pet-blue mb-6">
                ₹{(product.price * 83).toFixed(0)}
              </div>
              
              <p className="text-gray-600 mb-6">
                {product.description}
              </p>
              
              <div className="flex items-center mb-6">
                <span className="mr-4">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button 
                    className="px-3 py-1 border-r border-gray-300 hover:bg-gray-100"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  <span className="px-4 py-1">{quantity}</span>
                  <button 
                    className="px-3 py-1 border-l border-gray-300 hover:bg-gray-100"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 mt-auto">
                <button
                  className="pet-btn pet-btn-primary flex-1 flex items-center justify-center"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart size={18} className="mr-2" />
                  Add to Cart
                </button>
                
                <button
                  className={`p-3 rounded-md transition-colors ${
                    inWishlist 
                      ? 'text-red-500 bg-red-50 border border-red-100 hover:bg-red-100' 
                      : 'text-gray-500 bg-gray-100 border border-gray-200 hover:bg-gray-200'
                  }`}
                  onClick={handleToggleWishlist}
                  aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
                >
                  <Heart 
                    size={20} 
                    className={inWishlist ? 'fill-red-500' : ''}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedProducts.map(related => (
                <div key={related.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <Link to={`/product/${related.id}`} className="block">
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={related.image} 
                        alt={related.name} 
                        className="w-full h-full object-cover transition-transform hover:scale-105" 
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-gray-800 hover:text-pet-purple transition-colors">
                        {related.name}
                      </h3>
                      <p className="font-bold text-pet-blue mt-1">₹{(related.price * 83).toFixed(0)}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetail; 