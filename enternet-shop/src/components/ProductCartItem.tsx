import { useStore } from "@/store/store";
import styles from "./css/cartItem.module.css";
import { Product } from "@/store/store";
import { Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/hooks/useCart";
import { useState } from "react";

interface ProductCartItemProps {
  item: Product;
  onRemove: (id: number) => void;
}

const ProductCartItem = ({ item, onRemove }: ProductCartItemProps) => {
  const { cart } = useCart();
  let { productCount } = useStore();
  const [num, setNum] = useState(productCount);

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
          <button onClick={() => onRemove(item.id)} className={styles.trash}>
            <Trash2 size={18} />
          </button>
        </div>
      </div>
      <div className={styles.counter}>
        <button>-</button>
        <span>{num}</span>
        <button onClick={() => setNum(num + 1)}>+</button>
      </div>
      <div className={styles.priceColumn}>
        <span className={styles.originalPrice}>{item.price}</span>
      </div>
    </div>
  );
};

export default ProductCartItem;
