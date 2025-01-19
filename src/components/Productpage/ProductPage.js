import React, { useState, useEffect } from "react";
import { Pagination } from "@mui/material"; // Import Pagination component from MUI
import ProductCard from "../ProductCard"; // Import your ProductCard component
import productData from "../../datas/ecommerce-products.json"; // Your product data source
import "./ProductPage.css";
const ProductPage = ({ onAddCart, searchTerm }) => {
  const [products, setProducts] = useState([]); // State to hold the products
  const [page, setPage] = useState(1); // State to track the current page
  const itemsPerPage = 4; // Number of items to show per page

  // Function to handle page change
  const handlePageChange = (_, newPage) => {
    setPage(newPage); // Update the page state
  };

  // Function to fetch products for the current page
  const fetchProducts = () => {
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
      return;
    }
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
    setProducts(paginatedProducts);
  };

  // Fetch products whenever the page changes
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
            {products.map((product) => (
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
