import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Product {
  id: string;
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
}

export const useStore = create<StoreState>()(
  persist(
    (set) => ({
      productList: [],
      cart: [],
      favorite: [],
    }),
    { name: "e-shop-storage" }
  )
);
