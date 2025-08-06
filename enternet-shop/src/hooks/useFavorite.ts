import { useStore } from "@/store/store";
import { Product } from "@/store/store";

export const useFavorite = () => {
  const { favorite, addToFavorite, removeFromFavorite } = useStore();

  const isInFavorite = (productId: number) => {
    return favorite.some((item) => item.id === productId);
  };

  const toggleFavorite = (product: Product) => {
    if (isInFavorite(product.id)) {
      removeFromFavorite(product.id);
    } else {
      addToFavorite(product);
    }
  };

  return {
    favorite,
    addToFavorite,
    removeFromFavorite,
    isInFavorite,
    toggleFavorite,
  };
};
