
import { create } from 'zustand';
import { Product } from '@/components/ProductCard';

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartItemCount: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  
  addItem: (product) => {
    set((state) => {
      // Check if the item is already in the cart
      const existingItemIndex = state.items.findIndex(item => item.id === product.id);
      
      if (existingItemIndex !== -1) {
        // Item exists, increment quantity
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1
        };
        return { items: updatedItems };
      } else {
        // Item doesn't exist, add it with quantity 1
        return { items: [...state.items, { ...product, quantity: 1 }] };
      }
    });
  },
  
  removeItem: (productId) => {
    set((state) => ({
      items: state.items.filter(item => item.id !== productId)
    }));
  },
  
  clearCart: () => {
    set({ items: [] });
  },
  
  getCartTotal: () => {
    const { items } = get();
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  },
  
  getCartItemCount: () => {
    const { items } = get();
    return items.reduce((count, item) => count + item.quantity, 0);
  }
}));
