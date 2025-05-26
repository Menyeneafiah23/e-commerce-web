import styles from "./footer.module.css";
import fbIcon from "../../assets/fb.svg";
import instagramIcon from "../../assets/instagram.svg";
import twitterIcon from "../../assets/twitter.svg";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.brand}>
            <h2 className={styles.logo}>Bandage</h2>
            <div className={styles.socialIcons}>
              <a href="#" aria-label="Facebook">
                <img src={fbIcon} alt="fb icon" />
              </a>
              <a href="#" aria-label="Instagram">
                <img src={instagramIcon} alt="instagram icon" />
              </a>
              <a href="#" aria-label="Twitter">
                <img src={twitterIcon} alt="twitter icon" />
              </a>
            </div>
          </div>
          <div className={styles.linksGrid}>
            <div className={styles.linkColumn}>
              <h3 className={styles.head}>Company Info</h3>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Carrier</a>
                </li>
                <li>
                  <a href="#">We are hiring</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>
            <div className={styles.linkColumn}>
              <h3 className={styles.head}>Legal</h3>

              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Carrier</a>
                </li>
                <li>
                  <a href="#">We are hiring</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>
            <div className={styles.linkColumn}>
              <h3 className={styles.head}>Features</h3>
              <ul>
                <li>
                  <a href="#">Business Marketing</a>
                </li>
                <li>
                  <a href="#">User Analytic</a>
                </li>
                <li>
                  <a href="#">Live chat</a>
                </li>
                <li>
                  <a href="#">Unlimited Support</a>
                </li>
              </ul>
            </div>
            <div className={styles.linkColumn}>
              <h3 className={styles.head}>Resources</h3>

              <ul>
                <li>
                  <a href="#">IOS & Android</a>
                </li>
                <li>
                  <a href="#">Watch a Demo</a>
                </li>
                <li>
                  <a href="#">Customers</a>
                </li>
                <li>
                  <a href="#">API</a>
                </li>
              </ul>
            </div>
            <div className={styles.subscribeColumn}>
              <h3>Get In Touch</h3>
              <div className={styles.subscribeForm}>
                <input
                  type="email"
                  placeholder="Your Email"
                  className={styles.emailInput}
                />
                <button className={styles.subscribeButton}>Subscribe</button>
              </div>
              <p className={styles.subscribeText}>Lore imp sum dolor Amit</p>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>Made With Love By Finland All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
};
