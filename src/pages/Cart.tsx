import React, { useState } from 'react';
import { useCartStore } from '@/stores/cartStore';
import { useProfileStore } from '@/stores/profileStore';
import { Trash2 } from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { toast } from 'sonner';
import CheckoutForm from '@/components/CheckoutForm';

const Cart = () => {
  const { items, removeItem, getCartTotal, clearCart } = useCartStore();
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  
  const handleCheckout = () => {
    setCheckoutOpen(true);
  };

  const handleCheckoutComplete = () => {
    setCheckoutOpen(false);
    clearCart();
    toast.success('Order placed successfully! Check your downloads folder for the order details.');
  };
  
  if (items.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <h2 className="text-xl mb-4">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">Looks like you haven't added any products to your cart yet.</p>
            <Link to="/">
              <Button className="bg-pet-purple hover:bg-pet-purple/90">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {items.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-16 w-16 flex-shrink-0">
                          <img className="h-16 w-16 rounded object-cover" src={item.image} alt={item.name} />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{item.name}</div>
                          <div className="text-sm text-gray-500">{item.category}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">₹{(item.price * 83).toFixed(0)}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{item.quantity}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">₹{(item.price * item.quantity * 83).toFixed(0)}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="bg-gray-50 px-6 py-4">
            <div className="flex justify-between items-center">
              <Button 
                variant="outline" 
                onClick={clearCart} 
                className="text-gray-600"
              >
                Clear Cart
              </Button>
              <div className="text-right">
                <p className="text-lg font-semibold">Total: ₹{(getCartTotal() * 83).toFixed(0)}</p>
                <Button 
                  className="mt-2 bg-pet-purple hover:bg-pet-purple/90"
                  onClick={handleCheckout}
                >
                  Checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AlertDialog open={checkoutOpen} onOpenChange={setCheckoutOpen}>
        <AlertDialogContent className="max-w-md">
          <AlertDialogHeader>
            <AlertDialogTitle>Complete Your Order</AlertDialogTitle>
            <AlertDialogDescription>
              Please fill in your details to complete your purchase.
            </AlertDialogDescription>
          </AlertDialogHeader>
          
          <CheckoutForm 
            cartItems={items} 
            cartTotal={getCartTotal()} 
            onCheckoutComplete={handleCheckoutComplete}
          />
        </AlertDialogContent>
      </AlertDialog>
    </Layout>
  );
};

export default Cart;
