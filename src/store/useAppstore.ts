import { create } from "zustand";

// Define the interface for the store's state
export interface StoreState {
  signupModal: boolean;
  loginModal: boolean; // Initial value
  setLoginModal: (value: boolean) => void;
  setSignupModal: (value: boolean) => void;
}

// Create the Zustand store
const useAppstore = create<StoreState>((set) => ({
  signupModal: false, // Initial value
  loginModal: false, // Initial value
  setLoginModal: (value: boolean) => set({ loginModal: value, signupModal: false }), // Setter function
  setSignupModal: (value: boolean) => set({ signupModal: value, loginModal: false }), // Setter function
}));

export default useAppstore;
