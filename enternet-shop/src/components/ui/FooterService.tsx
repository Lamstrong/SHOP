import { title } from "process";

const footerServices = [
  {
    title: "Тестовый текст1",
    description: "Тестовое описание(ссылка)",
    href: "#",
  },
  {
    title: "Тестовый текст2",
    description: "Тестовое описание(ссылка)",
    href: "#",
  },
  {
    title: "Тестовый текст3",
    description: "Тестовое описание(ссылка)",
    href: "#",
  },
];

export default function FooterService() {
  return (
    <div>
      {footerServices.map(({ title, description, href }) => (
        <div key={title}>
          <h6>{title}</h6>
          <a href={href}>{description}</a>
        </div>
      ))}
    </div>
  );
}
