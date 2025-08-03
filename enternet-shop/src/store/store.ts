import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface StoreState {
  productList: Product[];
  cart: Product[];
  favorite: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  addToFavorite: (product: Product) => void;
  removeFromFavorite: (productId: number) => void;
}

export const useStore = create<StoreState>()(
  persist(
    (set) => ({
      productList: [],
      cart: [],
      favorite: [],
      addToCart: (product) =>
        set((state) => ({ cart: [...state.cart, product] })),
      removeFromCart: (productId) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== productId),
        })),
      addToFavorite: (product) =>
        set((state) => ({ favorite: [...state.favorite, product] })),
      removeFromFavorite: (productId) =>
        set((state) => ({
          favorite: state.favorite.filter((item) => item.id !== productId),
        })),
    }),
    { name: "e-shop-storage" }
  )
);
