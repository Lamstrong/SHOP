import styles from "@/components/css/CartPage.module.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductCartItem from "@/components/ProductCartItem";
import { useStore } from "@/store/store";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { cart, removeFromCart } = useStore();
  return (
    <div>
      <Header />
      <div className={styles.cartPage}>
        {/* Левая колонка */}
        <div className={styles.leftColumn}>
          <div className={styles.cartBlock}>
            <h2 className={styles.blockTitle}>Корзина</h2>

            {cart.length === 0 ? (
              <div className={styles.cartNullContainer}>
                <div className={styles.cartNullMessage}>Ваша корзина пуста</div>
                <Link className={styles.cartNullLink} to={"/"}>
                  Вренуться к покупкам
                </Link>
              </div>
            ) : (
              <div>
                {cart.map((item) => (
                  <ProductCartItem
                    key={item.id}
                    item={item}
                    onRemove={removeFromCart}
                  />
                ))}
              </div>
            )}
          </div>

          <div className={styles.cartBlock}>
            <h3 className={styles.blockSubtitle}>Способ доставки</h3>
            <a href="#" className={styles.link}>
              Выбрать адрес доставки
            </a>
          </div>

          <div className={styles.cartBlock}>
            <h3 className={styles.blockSubtitle}>Способ оплаты</h3>
            <a href="#" className={styles.link}>
              Войти или зарегистрироваться, чтобы выбрать способ оплаты
            </a>
          </div>

          <div className={styles.cartBlock}>
            <h3 className={styles.blockSubtitle}>Мои данные</h3>
            <a href="#" className={styles.link}>
              Войти или зарегистрироваться, чтобы оформить заказ
            </a>
          </div>
        </div>

        {/* Правая колонка */}
        <div className={styles.rightColumn}>
          <div className={styles.summaryCard}>
            <a href="#" className={styles.link}>
              Выбрать адрес доставки
            </a>
            <div className={styles.summaryRow}>
              <span>Товары, 1 шт.</span>
              <span>34 000 ₽</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Моя скидка</span>
              <span className={styles.discount}>–20 060 ₽</span>
            </div>
            <div className={styles.totalRow}>
              <span>Итого</span>
              <span className={styles.totalPrice}>13 940 ₽</span>
            </div>
            <button className={styles.orderButton}>Заказать</button>
            <div className={styles.agreement}>
              <input type="checkbox" checked readOnly />
              <label>
                Соглашаюсь с <a href="#">правилами пользования</a> торговой
                площадкой и возврата
              </label>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
