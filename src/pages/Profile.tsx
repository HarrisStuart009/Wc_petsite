
import React from 'react';
import { useForm } from 'react-hook-form';
import { useProfileStore } from '@/stores/profileStore';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ProfileFormData {
  name: string;
  email: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
}

const Profile = () => {
  const { profile, updateProfile, updateAddress } = useProfileStore();
  
  const { register, handleSubmit, formState: { errors, isDirty } } = useForm<ProfileFormData>({
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

  const onSubmit = (data: ProfileFormData) => {
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
    
    toast.success('Profile updated successfully!');
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-2xl font-bold mb-6">Your Profile</h1>
        
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>
              Update your personal information and address details.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    {...register('name', { required: 'Name is required' })} 
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
                  />
                  {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone" 
                    {...register('phone', { required: 'Phone number is required' })} 
                  />
                  {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
                </div>
                
                <div className="pt-2">
                  <h3 className="font-medium mb-2">Shipping Address</h3>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="street">Street Address</Label>
                  <Input 
                    id="street" 
                    {...register('street', { required: 'Street address is required' })} 
                  />
                  {errors.street && <p className="text-sm text-red-500">{errors.street.message}</p>}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2 md:col-span-1">
                    <Label htmlFor="city">City</Label>
                    <Input 
                      id="city" 
                      {...register('city', { required: 'City is required' })} 
                    />
                    {errors.city && <p className="text-sm text-red-500">{errors.city.message}</p>}
                  </div>
                  
                  <div className="space-y-2 md:col-span-1">
                    <Label htmlFor="state">State</Label>
                    <Input 
                      id="state" 
                      {...register('state', { required: 'State is required' })} 
                    />
                    {errors.state && <p className="text-sm text-red-500">{errors.state.message}</p>}
                  </div>
                  
                  <div className="space-y-2 md:col-span-1">
                    <Label htmlFor="zipCode">ZIP Code</Label>
                    <Input 
                      id="zipCode" 
                      {...register('zipCode', { required: 'ZIP Code is required' })} 
                    />
                    {errors.zipCode && <p className="text-sm text-red-500">{errors.zipCode.message}</p>}
                  </div>
                </div>
              </div>
              
              <div className="pt-2">
                <Button 
                  type="submit" 
                  className="bg-pet-purple hover:bg-pet-purple/90"
                  disabled={!isDirty}
                >
                  Save Changes
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Profile;
