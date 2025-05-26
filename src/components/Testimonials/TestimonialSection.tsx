import styles from "../../components/Testimonials/TestimonialsSection.module.css";

const TestimonialSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.testimonialContent}>
          <h2 className={styles.heading}>What they say about us</h2>
          <div className={styles.testimonial}>
            <div className={styles.profileImageContainer}>
              <img
                src="/src/assets/user.svg"
                alt="Profile"
                className={styles.profileImage}
              />
            </div>
            <div className={styles.rating}>
              <img
                src="/src/assets/full star.svg"
                alt="star"
                className={styles.star}
              />
              <img
                src="/src/assets/full star.svg"
                alt="star"
                className={styles.star}
              />
              <img
                src="/src/assets/full star.svg"
                alt="star"
                className={styles.star}
              />
              <img
                src="/src/assets/full star.svg"
                alt="star"
                className={styles.star}
              />
              <img
                src="/src/assets/empty star.svg"
                alt="star"
                className={styles.emptyStar}
              />
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
              <img src="/src/assets/image1.svg" alt="Gallery item" />
            </div>
            <div className={styles.galleryItem}>
              <img src="/src/assets/image2.svg" alt="Gallery item" />
            </div>
            <div className={styles.galleryItem}>
              <img src="/src/assets/image3.svg" alt="Gallery item" />
            </div>
            <div className={styles.galleryItem}>
              <img src="/src/assets/image4.svg" alt="Gallery item" />
            </div>
            <div className={styles.galleryItem}>
              <img src="/src/assets/image5.svg" alt="Gallery item" />
            </div>
            <div className={styles.galleryItem}>
              <img src="/src/assets/image6.svg" alt="Gallery item" />
            </div>
            <div className={styles.galleryItem}>
              <img src="/src/assets/image7.svg" alt="Gallery item" />
            </div>
            <div className={styles.galleryItem}>
              <img src="/src/assets/image8.svg" alt="Gallery item" />
            </div>
            <div className={styles.galleryItem}>
              <img src="/src/assets/image9.svg" alt="Gallery item" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TestimonialSection;
