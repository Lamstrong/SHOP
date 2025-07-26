import { Product } from "@/store/store";

const API_BASE_URL = "https://fakestoreapi.com";

async function requestData<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export const api = {
  getProducts: async (): Promise<Product[]> => {
    try {
      return await requestData("/products");
    } catch (err) {
      console.error(`Error fetching product`, err);
      return [];
    }
  },

  //получаем продукт по ID

  getProduct: async (id: number): Promise<Product | null> => {
    try {
      return await requestData<Product>(`/products/${id}`);
    } catch (err) {
      console.error(`Error fetching product ${id}`, err);
    }
  },
};
