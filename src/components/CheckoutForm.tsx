import React from 'react';
import { useForm } from 'react-hook-form';
import { useProfileStore } from '@/stores/profileStore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AlertDialogFooter } from '@/components/ui/alert-dialog';
import { toast } from 'sonner';
import { Product } from '@/components/ProductCard';

interface CartItem extends Product {
  quantity: number;
}

interface CheckoutFormProps {
  cartItems: CartItem[];
  cartTotal: number;
  onCheckoutComplete: () => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
}

const CheckoutForm = ({ cartItems, cartTotal, onCheckoutComplete }: CheckoutFormProps) => {
  const { profile, updateProfile, updateAddress } = useProfileStore();
  
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      name: profile.name,
      email: profile.email,
      phone: profile.phone,
      street: profile.address.street,
      city: profile.address.city,
      state: profile.address.state,
      zipCode: profile.address.zipCode,
    }
  });

  const onSubmit = (data: FormData) => {
    // Update profile store with form data
    updateProfile({
      name: data.name,
      email: data.email,
      phone: data.phone,
    });
    
    updateAddress({
      street: data.street,
      city: data.city,
      state: data.state,
      zipCode: data.zipCode,
    });
    
    // Create CSV data
    const headers = "Name,Email,Phone,Street,City,State,ZipCode,Products,Total\n";
    
    // Format product list for CSV
    const productsList = cartItems.map(item => 
      `${item.name} (${item.quantity} x ₹${(item.price * 83).toFixed(0)})`
    ).join("; ");
    
    // Create CSV row
    const csvRow = [
      data.name,
      data.email,
      data.phone,
      data.street,
      data.city,
      data.state,
      data.zipCode,
      `"${productsList}"`,
      `₹${(cartTotal * 83).toFixed(0)}`
    ].join(',');
    
    // Combine headers and row
    const csvContent = headers + csvRow;
    
    // Create and download CSV file
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `order_${Date.now()}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.success('Order details saved successfully!');
    onCheckoutComplete();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 py-4">
      <div className="grid grid-cols-1 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input 
            id="name" 
            {...register('name', { required: 'Name is required' })} 
            placeholder="Your full name" 
          />
          {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input 
            id="email" 
            type="email" 
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })} 
            placeholder="your-email@example.com" 
          />
          {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input 
            id="phone" 
            {...register('phone', { required: 'Phone number is required' })} 
            placeholder="Your phone number" 
          />
          {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="street">Street Address</Label>
          <Input 
            id="street" 
            {...register('street', { required: 'Street address is required' })} 
            placeholder="123 Main St" 
          />
          {errors.street && <p className="text-sm text-red-500">{errors.street.message}</p>}
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="city">City</Label>
            <Input 
              id="city" 
              {...register('city', { required: 'City is required' })} 
              placeholder="City" 
            />
            {errors.city && <p className="text-sm text-red-500">{errors.city.message}</p>}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="state">State</Label>
            <Input 
              id="state" 
              {...register('state', { required: 'State is required' })} 
              placeholder="State" 
            />
            {errors.state && <p className="text-sm text-red-500">{errors.state.message}</p>}
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="zipCode">ZIP Code</Label>
          <Input 
            id="zipCode" 
            {...register('zipCode', { required: 'ZIP Code is required' })} 
            placeholder="12345" 
          />
          {errors.zipCode && <p className="text-sm text-red-500">{errors.zipCode.message}</p>}
        </div>
      </div>
      
      <AlertDialogFooter>
        <Button type="submit" className="bg-pet-purple hover:bg-pet-purple/90">
          Complete Order
        </Button>
      </AlertDialogFooter>
    </form>
  );
};

export default CheckoutForm;
