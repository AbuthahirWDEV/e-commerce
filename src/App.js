import { React, useState } from "react";
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
    setCartProducts((prevCart) => [...prevCart, product]);
  };
  return (
    <Router>
      <NavBar setSearchTerm={setSearchTerm} />
      <Routes>
        {/* Define route for HomePage */}
        <Route path="/"  element={<HomePage />} />

        {/* Define route for ProductPage */}
        <Route
          path="/product"
          element={<ProductPage searchTerm={searchTerm} onAddCart={handleAddToCart} />}
        />

        <Route
          path="/cart"
          element={<CartPage cartProducts={cartProducts} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
