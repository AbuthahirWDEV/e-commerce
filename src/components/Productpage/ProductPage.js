import React, { useState, useEffect } from "react";
import { Pagination, Skeleton } from "@mui/material"; // Import Skeleton for loading animation
import ProductCard from "../ProductCard/ProductCard"; // Import your ProductCard component
import productData from "../../datas/ecommerce-products.json"; // Your product data source
import "./ProductPage.css";

const ProductPage = ({ onAddCart, searchTerm }) => {
  const [products, setProducts] = useState([]); // State to hold the products
  const [page, setPage] = useState(1); // State to track the current page
  const [loading, setLoading] = useState(true); // State to manage loading state
  const itemsPerPage = 8; // Number of items to show per page

  // Function to handle page change
  const handlePageChange = (_, newPage) => {
    setPage(newPage); // Update the page state
  };

  // Function to fetch products for the current page
  const fetchProducts = () => {
    setLoading(true); // Set loading state to true while fetching
    let filteredProducts = productData;

    // Filter the products based on the searchTerm
    if (searchTerm) {
      filteredProducts = productData.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // If no products match the searchTerm, show "No results found"
    if (filteredProducts.length === 0) {
      setProducts([]);
      setLoading(false); // Set loading to false once the products are fetched
      return;
    }

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
    setProducts(paginatedProducts);
    setLoading(false);

    setTimeout(() => {
      setProducts(paginatedProducts);
      setLoading(false); // Set loading to false after the delay
    }, 1500); // Set loading to false once the products are fetched
  };

  // Fetch products whenever the page or searchTerm changes
  useEffect(() => {
    fetchProducts();
  }, [page, searchTerm]);

  return (
    <div>
      {/* Check if no products are found */}
      {searchTerm && products.length === 0 ? (
        <div className="no-results-message">No results found</div>
      ) : (
        <>
          <div className="homepage-grid">
            {loading
              ? // Show Skeleton loaders while products are loading
                Array.from({ length: itemsPerPage }).map((_, index) => (
                  <div key={index} className="product-card-skeleton">
                    <Skeleton variant="rectangular" width={210} height={300} />
                    <Skeleton width="60%" />
                    <Skeleton width="40%" />
                  </div>
                ))
              : // Show the actual products once loading is finished
                products.map((product) => (
                  <div key={product.id}>
                    <ProductCard products={product} onAddCart={onAddCart} />
                  </div>
                ))}
          </div>
          <div>
            <Pagination
              count={Math.ceil(productData.length / itemsPerPage)} // Total number of pages
              page={page} // Current page
              onChange={handlePageChange} // Handle page change
              color="primary" // Pagination color
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ProductPage;
