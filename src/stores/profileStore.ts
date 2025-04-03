
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserProfile {
  name: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
}

interface ProfileState {
  profile: UserProfile;
  updateProfile: (data: Partial<UserProfile>) => void;
  updateAddress: (address: Partial<UserProfile['address']>) => void;
}

const defaultProfile: UserProfile = {
  name: '',
  email: '',
  phone: '',
  address: {
    street: '',
    city: '',
    state: '',
    zipCode: ''
  }
};

export const useProfileStore = create<ProfileState>()(
  persist(
    (set) => ({
      profile: defaultProfile,
      updateProfile: (data) => set((state) => ({
        profile: { ...state.profile, ...data }
      })),
      updateAddress: (address) => set((state) => ({
        profile: {
          ...state.profile,
          address: { ...state.profile.address, ...address }
        }
      }))
    }),
    {
      name: 'user-profile'
    }
  )
);
