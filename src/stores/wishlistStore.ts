
import { create } from 'zustand';
import { Product } from '@/components/ProductCard';
import { toast } from 'sonner';

interface WishlistState {
  items: Product[];
  addItem: (product: Product) => void;
  removeItem: (productId: number) => void;
  toggleItem: (product: Product) => void;
  isInWishlist: (productId: number) => boolean;
  clearWishlist: () => void;
}

export const useWishlistStore = create<WishlistState>((set, get) => ({
  items: [],
  
  addItem: (product) => {
    set((state) => {
      // Only add if not already in wishlist
      if (!state.items.some(item => item.id === product.id)) {
        return { items: [...state.items, product] };
      }
      return state;
    });
  },
  
  removeItem: (productId) => {
    set((state) => ({
      items: state.items.filter(item => item.id !== productId)
    }));
  },
  
  toggleItem: (product) => {
    const { items } = get();
    const isInWishlist = items.some(item => item.id === product.id);
    
    if (isInWishlist) {
      get().removeItem(product.id);
      toast(`${product.name} removed from wishlist`);
    } else {
      get().addItem(product);
      toast(`${product.name} added to wishlist`);
    }
  },
  
  isInWishlist: (productId) => {
    return get().items.some(item => item.id === productId);
  },
  
  clearWishlist: () => {
    set({ items: [] });
  }
}));
