import { useStore } from "@/store/store";
import styles from "./css/cartItem.module.css";
import { Product } from "@/store/store";
import { Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductCartItemProps {
  item: Product;
  onRemove: (id: number) => void;
}

const ProductCartItem = ({ item, onRemove }: ProductCartItemProps) => {
  const { cart } = useStore();

  return (
    <div className={styles.cartItem}>
      <Link to={`/product/${item.id}`}>
        <img
          src={item.image}
          alt="Товар"
          className={styles.productImage}
          loading="lazy"
        />
      </Link>
      <div className={styles.productInfo}>
        <Link to={`/product/${item.id}`}>
          <p className={styles.productTitle}>{item.title}</p>
        </Link>
        {/* <p className={styles.productDetails}>белый</p> */}
        <p className={styles.productDetails}>
          Только предоплата · Только курьером
        </p>
        <div className={styles.actions}>
          <span className={styles.heart}>♡</span>
          <button onClick={() => onRemove(item.id)} className={styles.trash}>
            <Trash2 />
          </button>
        </div>
      </div>
      <div className={styles.counter}>
        <button>-</button>
        <span>1</span>
        <button>+</button>
      </div>
      <div className={styles.priceColumn}>
        <span className={styles.originalPrice}>{item.price}</span>
      </div>
    </div>
  );
};

export default ProductCartItem;
