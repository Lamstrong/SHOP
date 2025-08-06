import styles from "@/components/css/favotitePage.module.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductCard from "@/components/productCard";
import { useFavorite } from "@/hooks/useFavorite";
import { useStore } from "@/store/store";
import { PackageOpen } from "lucide-react";
import { useState } from "react";

const Favorite = () => {
  const { favorite } = useStore();

  return (
    <div className={styles.favoriteContainer}>
      <Header />
      <div className={styles.favoriteBody}>
        {favorite.length === 0 ? (
          <div className={styles.emptyFavorite}>
            <PackageOpen size={100} />
            <p className={styles.message}>В избранном пока пусто</p>
            <p className={styles.recomendationMassage}>
              Добавляйте товары с помощью ❤️, чтобы не потерять их и купить
              позже
            </p>
          </div>
        ) : (
          favorite.map((item) => <ProductCard key={item.id} product={item} />)
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Favorite;
