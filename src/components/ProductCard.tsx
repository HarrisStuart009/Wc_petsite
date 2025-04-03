import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { useCartStore } from '@/stores/cartStore';
import { useWishlistStore } from '@/stores/wishlistStore';
import { useToast } from '@/components/ui/use-toast';
import { toast } from 'sonner';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  description: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCartStore();
  const { toggleItem, isInWishlist } = useWishlistStore();
  const { toast: uiToast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    addItem(product);
    
    toast.success(`Added to cart: ${product.name}`, {
      position: 'bottom-right',
    });
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    toggleItem(product);
    
    toast(inWishlist ? 'Removed from wishlist' : 'Added to wishlist', {
      icon: inWishlist ? '💔' : '❤️',
      position: 'bottom-right',
    });
  };

  // Check if product is in wishlist
  const inWishlist = isInWishlist(product.id);

  return (
    <div className="group relative animate-fade-in transition-all duration-300 hover:-translate-y-2 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-lg">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden aspect-square">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="badge badge-primary absolute top-2 left-2">
            {product.category}
          </span>
        </div>
        
        <div className="p-4">
          <div className="flex flex-col space-y-1">
            <h3 className="font-medium text-gray-800 group-hover:text-pet-primary transition-colors line-clamp-1">
              {product.name}
            </h3>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i}
                  size={14} 
                  className={i < product.rating ? "fill-pet-accent text-pet-accent" : "text-gray-300"} 
                />
              ))}
              <span className="text-xs font-medium text-gray-700 ml-1">{product.rating}.0</span>
            </div>
            <p className="font-bold text-pet-primary mt-1">₹{(product.price * 83).toFixed(0)}</p>
          </div>
          
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
            <button
              className={`p-2 rounded-full transition-all duration-300 ${
                inWishlist 
                  ? 'text-pet-error bg-pet-error/10 hover:bg-pet-error/20' 
                  : 'text-gray-400 bg-gray-100 hover:bg-gray-200 hover:text-gray-700'
              }`}
              onClick={handleToggleWishlist}
              aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
            >
              <Heart 
                size={18} 
                className={`transition-transform duration-300 ${inWishlist ? 'fill-pet-error animate-pulse-scale' : 'hover:scale-110'}`}
              />
            </button>
            
            <button
              className="bg-pet-accent text-white py-2 px-3 rounded-md flex items-center transition-all duration-300 hover:bg-pet-accent/90 hover:scale-105 active:scale-95 shadow-sm"
              onClick={handleAddToCart}
            >
              <ShoppingCart size={15} className="mr-1.5" />
              <span className="text-xs font-medium">Add to Cart</span>
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
