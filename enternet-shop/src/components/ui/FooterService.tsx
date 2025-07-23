import styles from "./ui_css_modules/footerServices.module.css";

const footerServices = [
  {
    description: "Тестовое описание(ссылка)",
    href: "#",
  },
  {
    description: "Тестовое описание(ссылка)",
    href: "#",
  },
  {
    description: "Тестовое описание(ссылка)",
    href: "#",
  },
];

export default function FooterService() {
  return (
    <div>
      <h6 className={styles.titleService}>Бобёр</h6>
      {footerServices.map(({ description, href }) => (
        <div className={styles.serviceContainer} key={description}>
          <a className={styles.seviceLink} href={href}>
            {description}
          </a>
        </div>
      ))}
    </div>
  );
}
