import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/Homepage/HomePage";
import ProductPage from "./components/Productpage/ProductPage";
import NavBar from "./components/NavBar/NavBar";
import CartPage from "./components/Cartpage/CartPage";

function App() {
  const [cartProducts, setCartProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Add the product to the cart
  const handleAddToCart = (product) => {
    setCartProducts((prevCart) => {
      // Check if the product already exists in the cart
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        // If product exists, increase the quantity by 1
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If product doesn't exist, add it to the cart with quantity 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove the product completely from the cart
  const handleRemoveFromCart = (productId) => {
    setCartProducts((prevCart) => prevCart.filter((product) => product.id !== productId));
  };

  // Decrease the quantity of the product
  const handleDecreaseQuantity = (productId) => {
    setCartProducts((prevCart) =>
      prevCart.map((product) =>
        product.id === productId
          ? { ...product, quantity: Math.max(product.quantity - 1, 1) } // Ensure quantity is never less than 1
          : product
      )
    );
  };

  return (
    <Router>
      <NavBar setSearchTerm={setSearchTerm} />
      <Routes>
        {/* Define route for HomePage */}
        <Route path="/" element={<HomePage />} />

        {/* Define route for ProductPage */}
        <Route
          path="/product"
          element={<ProductPage searchTerm={searchTerm} onAddCart={handleAddToCart} />}
        />

        {/* Define route for CartPage */}
        <Route
          path="/cart"
          element={
            <CartPage
              cartProducts={cartProducts}
              onAddCart={handleAddToCart}
              removeFromCart={handleRemoveFromCart}
              handleDecreaseQuantity={handleDecreaseQuantity}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
