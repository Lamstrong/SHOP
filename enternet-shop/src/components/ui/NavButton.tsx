import { User, Heart, ShoppingCart, Package } from "lucide-react";
import styles from "./ui_css_modules/navButton.module.css";
import { useCart } from "@/hooks/useCart";
import { useFavorite } from "@/hooks/useFavorite";
import { Link } from "react-router-dom";
const links = [
  {
    icon: User,
    label: "Войти",
    href: "#",
    showCount: false,
  },
  {
    icon: Heart,
    label: "Избранное",
    href: "/favorite",
    showCount: true,
  },
  {
    icon: Package,
    label: "Заказы",
    href: "#",
    showCount: false,
  },
  {
    icon: ShoppingCart,
    label: "Корзина",
    href: "/cart",
    showCount: true,
  },
];

export default function NavButton() {
  const { cart } = useCart();
  const { favorite } = useFavorite();

  const getCount = (label: string) => {
    switch (label) {
      case "Избранное":
        return favorite.length;
      case "Корзина":
        return cart.length;
      default:
        return 0;
    }
  };

  return (
    <div className={styles.navContainer}>
      {links.map(({ icon: Icon, label, href, showCount }) => (
        <Link key={label} to={href} className={styles.navItem}>
          <div className={styles.iconWrapper}>
            <Icon size={32} strokeWidth={1.5} />
            {showCount && getCount(label) > 0 && (
              <span className={styles.badge}>{getCount(label)}</span>
            )}
          </div>
          <span className="mt-1">{label}</span>
        </Link>
      ))}
    </div>
  );
}
