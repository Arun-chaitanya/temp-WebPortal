import { create } from "zustand";

// Define the interface for the store's state
export interface StoreState {
  signupModal: boolean;
  setSignupModal: (value: boolean) => void;
}

// Create the Zustand store
const useAppstore = create<StoreState>((set) => ({
  signupModal: false, // Initial value
  setSignupModal: (value: boolean) => set({ signupModal: value }), // Setter function
}));

export default useAppstore;
