import styles from "./FeaturedProducts.module.css";

export const FeaturedProducts = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h6 className={styles.subtitle}>Featured Products</h6>
          <h2 className={styles.title}>THE BEST SERVICES</h2>
          <p className={styles.description}>
            Problems trying to resolve the conflict between
          </p>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <img
                src="/src/assets/UpSIdeDown book.svg"
                alt="UpsideDown book icon"
                className={styles.icon}
              />
            </div>
            <h3 className={styles.cardTitle}>Easy Wins</h3>
            <p className={styles.cardDescription}>
              Get your best looking smile now!
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <img
                src="/src/assets/open book.svg"
                alt="Open book icon"
                className={styles.icon}
              />
            </div>
            <h3 className={styles.cardTitle}>Concrete</h3>
            <p className={styles.cardDescription}>
              Defalcate is most focused in helping you discover your most
              beautiful smile
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <img
                src="/src/assets/Arrow.svg"
                alt="Arrow"
                className={styles.icon}
              />
            </div>
            <h3 className={styles.cardTitle}>Hack Growth</h3>
            <p className={styles.cardDescription}>
              Overcome any hurdle or any other problem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
