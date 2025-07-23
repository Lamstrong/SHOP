import styles from "./css/footer.module.css";
import FooterService from "./ui/FooterService";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerBody}>
        <FooterService />
      </div>
    </div>
  );
};

export default Footer;
