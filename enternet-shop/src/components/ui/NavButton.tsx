import { User, ChartBar, ListOrdered, Heart } from "lucide-react";
import styles from "./ui_css_modules/navButton.module.css";
const links = [
  {
    icon: User,
    label: "Войти",
    href: "#",
  },
  {
    icon: Heart,
    label: "Избранное",
    href: "#",
  },
  {
    icon: ChartBar,
    label: "Заказы",
    href: "#",
  },
  {
    icon: ListOrdered,
    label: "Корзина",
    href: "#",
  },
];

export default function NavButton() {
  return (
    <div className={styles.navContainer}>
      {links.map(({ icon: Icon, label, href }) => (
        <a key={label} href={href} className={styles.navItem}>
          <Icon size={32} strokeWidth={1.5} />
          <span className="mt-1">{label}</span>
        </a>
      ))}
    </div>
  );
}
