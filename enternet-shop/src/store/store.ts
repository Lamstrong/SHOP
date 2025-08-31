import { api } from "@/api/api";
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
  fetchProducts: () => Promise<void>;
  loading: boolean;
  error: null;
  filters: {
    category: string;
    priceRange: [number, number];
    rating: number;
    searchQuery: string;
  };
  setFilter: (filter: Partial<StoreState["filters"]>) => void;
  resetFilters: () => void;
  getFilteredProducts: () => Product[];
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      productList: [],
      filters: {
        category: "",
        priceRange: [0, 1000],
        rating: 0,
        searchQuery: "",
      },
      loading: false,
      error: null,
      fetchProducts: async () => {
        if (get().productList.length > 0) {
          return;
        }

        set({ loading: true, error: null });

        try {
          const data = await api.getProducts();
          set({
            productList: data,
            loading: false,
          });
        } catch (error) {
          set({ error: error, loading: false });
          console.error(error);
        }
      },
      setFilter: (filter) =>
        set((state) => ({
          filters: { ...state.filters, ...filter },
        })),
      resetFilters: () =>
        set({
          filters: {
            category: "",
            priceRange: [0, 1000],
            rating: 0,
            searchQuery: "",
          },
        }),
      getFilteredProducts: () => {
        const { productList, filters } = get();
        return productList.filter((product) => {
          const matchesCategory =
            !filters.category || product.category === filters.category;

          const matchesPrice =
            product.price >= filters.priceRange[0] &&
            product.price <= filters.priceRange[1];

          const matchesRating = product.rating.rate >= filters.rating;

          const matchesSearch = product.title
            .toLowerCase()
            .includes(filters.searchQuery.toLowerCase());

          return (
            matchesCategory && matchesPrice && matchesRating && matchesSearch
          );
        });
      },
      cart: [],
      favorite: [],
      productCount: 1,
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
