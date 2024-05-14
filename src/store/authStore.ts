import axios from "axios";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface User {
  id: number;
  email: string;
  password: string;
}

interface AuthState {
  users: User[];

  loginUsers: (email: string, password: string) => Promise<void>;
  cleanStore: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      users: [],

      loginUsers: async (email: string, password: string) => {
        try {
          const { data: user } = await axios.post(
            "http://localhost:8000/api/users/login",
            { email, password }
          );
          set((state) => ({ ...state, users: [...state.users, user] }));
        } catch (error) {
          console.error("Error logging in:", error);
        }
      },
      cleanStore: () => set({}, true),
    }),
    {
      name: "auth-storage", // name of the storage item
      getStorage: () => localStorage, // (optional) by default, 'localStorage' is used
    }
  )
);
