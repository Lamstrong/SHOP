import { Product, useStore } from "@/store/store";
import styles from "./css/filter.module.css";
import { useMemo } from "react";

const Filters = () => {
  const { filters, setFilter, resetFilters } = useStore();
  const productList = useStore((state) => state.productList);
  const ratingCountArray = [1, 2, 3, 4, 5];

  const catigories = useMemo(
    () => [...new Set(productList.map((p) => p.category))],
    [productList]
  );
  console.log(filters);

  return (
    <div className={styles.filterContainer}>
      <div className={styles.categoryBody}>
        <h3>Категории</h3>
        <select
          value={filters.category}
          onChange={(e) => setFilter({ category: e.target.value })}
        >
          <option value="">Все категории</option>
          {catigories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.priceBody}>
        <h3>Цена</h3>
        <input
          type="range"
          value={filters.priceRange[1]}
          onChange={(e) =>
            setFilter({
              priceRange: [filters.priceRange[0], Number(e.target.value)],
            })
          }
          min="0"
          max="1000"
        />
        <span>{filters.priceRange[1]}</span>
      </div>
      <div className={styles.ratingBody}>
        <h3>Рейтинг</h3>
        {ratingCountArray.map((rating) => (
          <label key={rating}>
            <input
              type="radio"
              checked={filters.rating === rating}
              onChange={() => setFilter({ rating })}
            />
            {rating}+ ★
          </label>
        ))}
      </div>
      <div className={styles.searchBody}></div>
      <button onClick={resetFilters}>Сбросить фильтры</button>
    </div>
  );
};

export default Filters;
