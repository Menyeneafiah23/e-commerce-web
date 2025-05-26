import styles from "../../components/Testimonials/TestimonialsSection.module.css";
import fullStar from "../../assets/full star.svg";
import emptyStar from "../../assets/empty star.svg";
import Image1 from "../../assets/image1.svg";
import Image2 from "../../assets/image2.svg";
import Image3 from "../../assets/image3.svg";
import Image4 from "../../assets/image4.svg";
import Image5 from "../../assets/image5.svg";
import Image6 from "../../assets/image6.svg";
import Image7 from "../../assets/image7.svg";
import Image8 from "../../assets/image8.svg";
import Image9 from "../../assets/image9.svg";
import user from "../../assets/user.svg";

const TestimonialSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.testimonialContent}>
          <h2 className={styles.heading}>What they say about us</h2>
          <div className={styles.testimonial}>
            <div className={styles.profileImageContainer}>
              <img src={user} alt="Profile" className={styles.profileImage} />
            </div>
            <div className={styles.rating}>
              <img src={fullStar} alt="star" className={styles.star} />
              <img src={fullStar} alt="star" className={styles.star} />
              <img src={fullStar} alt="star" className={styles.star} />
              <img src={fullStar} alt="star" className={styles.star} />
              <img src={emptyStar} alt="star" className={styles.emptyStar} />
            </div>
            <p className={styles.testimonialText}>
              late helps you see how many more days you need to work to reach
              your financial goal.
            </p>
            <h3 className={styles.userName}>Regina Miles</h3>
            <p className={styles.userRole}>Designer</p>
          </div>
        </div>
        <div className={styles.galleryContainer}>
          <div className={styles.galleryGrid}>
            <div className={styles.galleryItem}>
              <img src={Image1} alt="Gallery item" />
            </div>
            <div className={styles.galleryItem}>
              <img src={Image2} alt="Gallery item" />
            </div>
            <div className={styles.galleryItem}>
              <img src={Image3} alt="Gallery item" />
            </div>
            <div className={styles.galleryItem}>
              <img src={Image4} alt="Gallery item" />
            </div>
            <div className={styles.galleryItem}>
              <img src={Image5} alt="Gallery item" />
            </div>
            <div className={styles.galleryItem}>
              <img src={Image6} alt="Gallery item" />
            </div>
            <div className={styles.galleryItem}>
              <img src={Image7} alt="Gallery item" />
            </div>
            <div className={styles.galleryItem}>
              <img src={Image8} alt="Gallery item" />
            </div>
            <div className={styles.galleryItem}>
              <img src={Image9} alt="Gallery item" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TestimonialSection;
