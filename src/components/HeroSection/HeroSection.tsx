import styles from "../../components/HeroSection/HeroSection.module.css";

const HeroSection = () => {
  return (
    <section>
      <div className={styles.heroContainer}>
        <div className={styles.first}>
          <img
            src="/src/assets/hero image1.svg"
            alt="hero image"
            className={` ${styles.wideImg} ${styles.one}`}
          />
        </div>

        <div className={styles.second}>
          <img
            src="/src/assets/hero image2.svg"
            className={`${styles.wideImg} ${styles.margin}`}
            alt="hero image"
          />
          <div className={styles.third}>
            <img
              src="/src/assets/hero image3.svg"
              className={styles.thirdImg}
              alt="hero image"
            />
            <img
              src="/src/assets/hero image4.svg"
              className={styles.thirdImg}
              alt="hero image"
            />
          </div>
        </div>

        {/* <div className={styles.textOne}>
          <p className={styles.five}>5 times</p>
          <p className={styles.furniture}>FURNITURE</p>
          <p className={styles.read}>Read more</p>
        </div>
        <div className={styles.textTwo}>
          <p className={styles.five}>5 times</p>
          <p className={styles.furniture}>FURNITURE</p>
          <p className={styles.read}>Read more</p>
        </div>
        <div className={styles.textThree}>
          <p className={styles.five}>5 times</p>
          <p className={styles.furniture}>FURNITURE</p>
          <p className={styles.read}>Read more</p>
        </div>
        <div className={styles.textFour}>
          <p className={styles.five}>5 times</p>
          <p className={styles.furniture}>FURNITURE</p>
          <p className={styles.read}>Read more</p>
        </div> */}
      </div>
    </section>
  );
};
export default HeroSection;
