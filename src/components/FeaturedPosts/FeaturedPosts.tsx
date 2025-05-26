import styles from "./FeaturedPosts.module.css";
import PostCard from "../FeaturedPosts/PostCard";

const FeaturedPosts = () => {
  const posts = [
    {
      id: 1,
      image: "/src/assets/post 1.svg",
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10,
    },
    {
      id: 2,
      image: "/src/assets/post 2.svg",
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10,
    },
    {
      id: 3,
      image: "/src/assets/post 3.svg",
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
