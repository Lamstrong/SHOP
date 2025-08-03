import { Product } from "@/store/store";
import { Link } from "react-router-dom";
import { useStore } from "@/store/store";
import styles from "./css/producCart.module.css";
import { MessageCircle, Star } from "lucide-react";

interface productCardProps {
  product: Product;
}

const ProductCard = ({ product }: productCardProps) => {
  return (
    <div className={styles.ProductCartContainer}>
      <Link to={`/product/${product.id}`}>
        <img
          className={styles.productCardImage}
          src={product.image}
          alt={product.title}
        />
      </Link>

      <div className={styles.productDescriptoinBody}>
        <h3 className={styles.productPrice}>{product.price} $</h3>
        <Link to={`/product/${product.id}`}>
          <h3 className={styles.productTitle}>{product.title}</h3>
        </Link>

        <div className={styles.rating}>
          <p className={styles.productRating}>
            <Star size={16} />
            {product.rating.rate}
          </p>
          <p className={styles.productRatingCount}>
            {<MessageCircle size={16} />}
            {product.rating.count}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
