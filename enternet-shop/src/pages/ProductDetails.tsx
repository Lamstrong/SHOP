import styles from "@/components/css/productDetails.module.css";
import { Product, useStore } from "@/store/store";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Star, MessageCircle } from "lucide-react";
import { api } from "@/api/api";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/hooks/useCart";
import { useFavorite } from "@/hooks/useFavorite";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoadind] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { addToCart, isIntCart } = useCart();
  const { addToFavorite, isInFavorite, toggleFavorite } = useFavorite();

  useEffect(() => {
    const loadProduct = async () => {
      if (!id) return;

      try {
        const data = await api.getProduct(parseInt(id));
        setProduct(data);
      } catch (err) {
        setError("Не удалось загрузить информацию о товаре");
        console.error(err);
      } finally {
        setLoadind(false);
      }
    };
    loadProduct();
  }, [id]);

  if (loading) return <div className="text-center py-8">Загрузка...</div>;
  if (error)
    return <div className="text-center py-8 text-red-500">{error}</div>;
  if (!product) return <div className="text-center py-8">Товар не найден</div>;

  return (
    <div className={styles.productDetailsContainer}>
      <Header />
      <div className={styles.productDetailsBody}>
        <div className={styles.productImgContainer}>
          <img
            className={styles.productImage}
            src={product.image}
            alt="ImageNotFound"
          />
        </div>
        <div className={styles.productInfo}>
          <h3 className={styles.title}>{product.title}</h3>
          <div className={styles.ratingBlock}>
            <p className={styles.productRating}>
              <Star size={16} />
              {product.rating.rate}
            </p>
            <p className={styles.productRatingCount}>
              {<MessageCircle size={16} />}
              {product.rating.count}
            </p>
          </div>
          <p className={styles.descriptionProduct}>{product.description}</p>
        </div>

        <div className={styles.productTake}>
          {/* Цена */}
          <div className={styles.priceRow}>
            <h3 className={styles.productPrice}>{product.price} $</h3>
            {/* Кнопка избранного */}
          </div>

          <div className={styles.btnsRow}>
            <button
              onClick={() => toggleFavorite(product)}
              className={`${styles.favoriteBtn} ${
                isInFavorite(product.id) ? styles.favoriteActive : ""
              }`}
              aria-label="Добавить в избранное"
            >
              {isInFavorite(product.id) ? "♥" : "♡"}
            </button>

            {/* Кнопка "В корзину" */}
            {isIntCart(product.id) ? (
              <Link className={styles.goInCart} to={"/cart"}>
                Перейти в корзину
              </Link>
            ) : (
              <button
                onClick={() => addToCart(product)}
                className={styles.cartBtn}
              >
                В корзину
              </button>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
