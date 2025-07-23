import styles from "./css/footer.module.css";
import FooterService from "./ui/FooterService";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <FooterService />
    </div>
  );
};

export default Footer;
