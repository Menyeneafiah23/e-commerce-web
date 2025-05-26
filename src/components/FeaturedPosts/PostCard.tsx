import styles from "./PostCard.module.css";
import arrowRight from "../../assets/arrow right.svg";
import alarm from "../../assets/alarm.svg";
import stats from "../../assets/stats.svg";

interface PostProps {
  post: {
    image: string;
    title: string;
    description: string;
    date: string;
    comments: number;
  };
}
const PostCard: React.FC<PostProps> = ({ post }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={post.image} alt={post.title} className={styles.image} />
        <span className={styles.newLabel}>NEW</span>
      </div>
      <div className={styles.content}>
        <div className={styles.tags}>
          <span className={`${styles.tag} ${styles.color}`}>Google</span>
          <span className={styles.tag}>Trending</span>
          <span className={styles.tag}>New</span>
        </div>
        <h3 className={styles.postTitle}>{post.title}</h3>
        <p className={styles.description}>{post.description}</p>
        <div className={styles.meta}>
          <div className={styles.metaItem}>
            <img src={alarm} alt="alarm icon" className={styles.icon} />
            <span>{post.date}</span>
          </div>
          <div className={styles.metaItem}>
            <img src={stats} alt="stat icon" className={styles.icon} />
            <span>{post.comments} comments</span>
          </div>
        </div>
        <div className={styles.learnMore}>
          <span>Learn More</span>
          <img src={arrowRight} alt="arrow" className={styles.arrowIcon} />
        </div>
      </div>
    </div>
  );
};
export default PostCard;
