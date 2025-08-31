import { Product, useStore } from "@/store/store";
import styles from "./css/filter.module.css";
import { useMemo } from "react";

const Filters = () => {
  const { filters, setFilter, resetFilters } = useStore();
  const productList = useStore((state) => state.productList);
  const ratingCountArray = [4, 3, 2, 1, 0];

  const catigories = useMemo(
    () => [...new Set(productList.map((p) => p.category))],
    [productList]
  );
  console.log(filters);

  return (
    <div className={styles.filtersContainer}>
      <h2 className={styles.filtersTitle}>Фильтры</h2>

      <div className={styles.filterSection}>
        <label className={styles.filterLabel}>Поиск</label>
        <input
          type="text"
          value={filters.searchQuery}
          onChange={(e) => setFilter({ searchQuery: e.target.value })}
          placeholder="Название товара..."
          className={styles.filterInput}
        />
      </div>

      <div className={styles.filterSection}>
        <label className={styles.filterLabel}>Категории</label>
        <select
          value={filters.category}
          onChange={(e) => setFilter({ category: e.target.value })}
          className={styles.filterSelect}
        >
          <option value="">Все категории</option>
          {catigories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.filterSection}>
        <label className={styles.filterLabel}>
          Цена до: ${filters.priceRange[1]}
        </label>
        <input
          type="range"
          min="0"
          max="1000"
          value={filters.priceRange[1]}
          onChange={(e) =>
            setFilter({
              priceRange: [filters.priceRange[0], Number(e.target.value)],
            })
          }
          className={styles.priceRange}
        />
        <div className={styles.priceValue}>
          ${filters.priceRange[0]} - ${filters.priceRange[1]}
        </div>
      </div>

      <div className={styles.filterSection}>
        <label className={styles.filterLabel}>Рейтинг</label>
        <div className={styles.ratingGroup}>
          {ratingCountArray.map((rating) => (
            <label key={rating} className={styles.ratingLabel}>
              <input
                type="radio"
                name="rating"
                checked={filters.rating === rating}
                onChange={() => setFilter({ rating })}
                className={styles.ratingInput}
              />
              {rating === 0 ? "Любой рейтинг" : `${rating}+ ★`}
            </label>
          ))}
        </div>
      </div>

      <button onClick={resetFilters} className={styles.resetButton}>
        Сбросить фильтры
      </button>
    </div>
  );
};

export default Filters;
