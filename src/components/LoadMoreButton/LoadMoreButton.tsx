import React from "react";
import styles from "./LoadMoreButton.module.css";
interface LoadMoreButtonProps {
  onClick: () => void;
  loading: boolean;
  hasMore: boolean;
}
const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({
  onClick,
  loading,
  hasMore,
}) => {
  return (
    <div className={styles.loadMoreContainer}>
      <button
        className={styles.loadMoreButton}
        onClick={onClick}
        disabled={loading || !hasMore}
      >
        {loading ? "Loading..." : "Load More Products"}
      </button>
    </div>
  );
};
export default LoadMoreButton;
