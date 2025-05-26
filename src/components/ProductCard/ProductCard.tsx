import React from "react";
import type { Product } from "../../types/product";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  product: Product;
}
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Calculating the original price based on discount percentage
  const originalPrice =
    Math.round((product.price / (1 - product.discountPercentage / 100)) * 100) /
    100;
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={product.thumbnail}
          alt={product.title}
          className={styles.image}
        />
      </div>
      <div className={styles.category}>Graphic Design</div>
      <div className={styles.department}>English Department</div>
      <div className={styles.priceContainer}>
        <span className={styles.originalPrice}>
          ${originalPrice.toFixed(2)}
        </span>
        <span className={styles.discountedPrice}>
          ${product.price.toFixed(2)}
        </span>
      </div>
    </div>
  );
};
export default ProductCard;
