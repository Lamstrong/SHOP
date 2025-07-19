import { User, ChartBar, ListOrdered, Heart } from "lucide-react";

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
    <div className="flex gap-8">
      {links.map(({ icon: Icon, label, href }) => (
        <a
          key={label}
          href={href}
          className="flex flex-col items-center text-black text-sm no-underline gap-1 hover:text-blue-500 transition"
        >
          <Icon size={32} strokeWidth={1.5} />
          <span className="mt-1">{label}</span>
        </a>
      ))}
    </div>
  );
}
