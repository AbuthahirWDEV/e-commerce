import React, { useState, useEffect } from "react";
import { Pagination } from "@mui/material"; // Import Pagination component from MUI
import ProductCard from "../ProductCard"; // Import your ProductCard component
import productData from "../../datas/ecommerce-products.json"; // Your product data source
import "./ProductPage.css";
const ProductPage = () => {
  const [products, setProducts] = useState([]); // State to hold the products
  const [page, setPage] = useState(1); // State to track the current page
  const itemsPerPage = 4; // Number of items to show per page

  // Function to handle page change
  const handlePageChange = (_, newPage) => {
    setPage(newPage); // Update the page state
  };

  // Function to fetch products for the current page
  const fetchProducts = () => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedProducts = productData.slice(startIndex, endIndex); // Get products for the current page
    setProducts(paginatedProducts);
  };

  // Fetch products whenever the page changes
  useEffect(() => {
    fetchProducts();
  }, [page]);

  return (
    <div>
      <div className="homepage-grid">
        {/* <div className="product-list"> */}
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard products={product} />{" "}
            {/* Render ProductCard for each product */}
          </div>
        ))}
        {/* </div> */}

        {/* Pagination Component */}
      </div>
      <div>
        <Pagination
          count={Math.ceil(productData.length / itemsPerPage)} // Total number of pages
          page={page} // Current page
          onChange={handlePageChange} // Handle page change
          color="primary" // Pagination color
        />
      </div>
    </div>
  );
};

export default ProductPage;
