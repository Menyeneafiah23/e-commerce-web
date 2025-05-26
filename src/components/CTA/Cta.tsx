import styles from "../CTA/Cta.module.css";
import CtaImage from "../../assets/background.png";

export const CTA = () => {
  return (
    <div className={styles.cta}>
      <div
        style={{
          backgroundImage: `url(${CtaImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%",
          width: "100%",
          position: "relative",
        }}
      >
        <div className={styles.textContent}>
          <p className={styles.tagline}>Designing Better Experience</p>
          <h1 className={styles.heading}>
            Problems trying to resolve the conflict between
          </h1>
          {/* <h2 className={styles.heading2}>the conflict between</h2> */}
          <p className={styles.subheading}>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics
          </p>
          {/* <p className={styles.subheading2}>realms of Classical physics</p> */}
          <div className={styles.price}>$16.48</div>
          <button className={styles.ctaButton}>ADD YOUR CALL TO ACTION</button>
        </div>
      </div>
    </div>
  );
};
