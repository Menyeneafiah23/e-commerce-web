import { useState } from "react";
import {
  MenuIcon,
  ChevronDown,
  XIcon,
  User,
  Search,
  ShoppingCart,
  Heart,
} from "lucide-react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <h1 className={styles.logo}>Bandage</h1>

        <div
          className={`${styles.menuItems} ${isMenuOpen ? styles.active : ""}`}
        >
          <a href="#home" className={styles.menuItem}>
            Home
          </a>
          <a href="#shop" className={styles.menuItem}>
            Shop
            <ChevronDown size={16} />
          </a>
          <a href="#about" className={styles.menuItem}>
            About
          </a>
          <a href="#blog" className={styles.menuItem}>
            Blog
          </a>
          <a href="#contact" className={styles.menuItem}>
            Contact
          </a>
          <a href="#pages" className={styles.menuItem}>
            Pages
          </a>
        </div>

        <div className={styles.mainIcon}>
          <div>
            <div className={styles.mainIconWrap}>
              <div className={` ${styles.log} ${styles.hide}`}>
                <User size={20} className={styles.di} />
                <span className={`${styles.flex} ${styles.i} ${styles.lo}`}>
                  Login / Register
                </span>
              </div>
              <Search size={20} className={`${styles.i} ${styles.i}`} />
              <ShoppingCart size={20} className={`${styles.ic} ${styles.k}`} />
              <Heart size={20} className={`${styles.hide} ${styles.i}`} />

              <button
                className={styles.mobileMenuButton}
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
