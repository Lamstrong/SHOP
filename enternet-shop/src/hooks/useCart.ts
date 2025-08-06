import { useStore } from "@/store/store";

export const useCart = () => {
  const { cart, addToCart, removeFromCart } = useStore();

  const isIntCart = (productId: number) => {
    return cart.some((item) => item.id === productId);
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    isIntCart,
  };
};
