import styles from "./css/header.module.css";
import { Search, User, ChartBar, ListOrdered } from "lucide-react";
import NavButton from "./ui/NavButton";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <a href="#" className={styles.logo}>
        <img src="vite.svg" alt="notFound" />
      </a>
      <div className={styles.inputContainer}>
        <input className={styles.inputSearch} type="text" />
        <button className={styles.searchBtn}>
          <Search />
        </button>
      </div>
      <div className={styles.componentNavBar}>
        <NavButton />
      </div>
    </div>
  );
};

export default Header;
