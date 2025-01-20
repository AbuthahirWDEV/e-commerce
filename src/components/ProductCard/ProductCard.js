import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { toast } from "react-toastify";
import './ProductCard.css'; // Ensure you have an external CSS file to handle the styles

const ProductCard = ({ products, onAddCart }) => {
  const handleClick = () => {
    toast(`${products.name} Added to cart`);
    onAddCart(products);
  };

  return (
    <div className="card-container">
      <img className="image" src={products.image} alt={products.name} />
      <div className="contents">
        <h3>{products.name}</h3>
        <p>{products.short_description}</p>
        <span>{products.price}</span>
      </div>
      <button className="btn" onClick={handleClick}>
        <div>
          <FaShoppingCart size="24px" />
        </div>
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
