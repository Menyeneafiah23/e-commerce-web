import styles from "./FeaturedPosts.module.css";
import PostCard from "../FeaturedPosts/PostCard";
import post1 from "../../assets/post 1.svg";
import post2 from "../../assets/post 2.svg";
import post3 from "../../assets/post 3.svg";

const FeaturedPosts = () => {
  const posts = [
    {
      id: 1,
      image: post1,
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10,
    },
    {
      id: 2,
      image: post2,
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10,
    },
    {
      id: 3,
      image: post3,
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10,
    },
  ];
  return (
    <section className={styles.featuredSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.practiceAdvice}>Practice Advice</span>
          <h2 className={styles.title}>Featured Posts</h2>
        </div>

        <div className={styles.postsGrid}>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default FeaturedPosts;
