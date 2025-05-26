import { useState } from "react";
import { useGetProductsQuery } from "../features/apiSlice";
import ProductGrid from "../ProductGrid/ProductGrid";
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";
import styles from "./ProductsPage.module.css";

const Products_per_page = 10;

const ProductsPage = () => {
  const [page, setPage] = useState(0);

  const { data, isLoading, isFetching, isError } = useGetProductsQuery({
    limit: Products_per_page,
    skip: page * Products_per_page,
  });
  const handleLoadMore = () => {
    setPage(page + 1);
  };
  const hasMore = data
    ? page * Products_per_page + data.products.length < data.total
    : false;
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.featuredText}>Featured Products</div>
        <h1 className={styles.title}>BESTSELLER PRODUCTS</h1>
        <p className={styles.subtitle}>
          Problems trying to resolve the conflict between the two major realms
          of Classical physics
        </p>
      </div>
      {isLoading && (
        <div className={styles.productLoading}>
          PLEASE WAIT YOUR PRODUCTS ARE LOADING...
        </div>
      )}

      {isError && (
        <div>
          <p className={styles.error}>404... </p>
          <h3 className={styles.errorMessage}>
            {" "}
            FAILED TO LOAD PRODUCTS...Please try again later.
          </h3>
        </div>
      )}
      {data && data.products.length > 0 && (
        <ProductGrid products={data.products} />
      )}
      <LoadMoreButton
        onClick={handleLoadMore}
        loading={isFetching}
        hasMore={hasMore}
      />
    </div>
  );
};
export default ProductsPage;
