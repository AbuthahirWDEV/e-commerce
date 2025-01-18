import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

const ProductCard = ({ products }) => {
  const handleClick = () => {
    toast(`${products.name} Added to cart`);
  };
  return (
    <div className="card-container">
      <img className="image" src={products.image} alt="" />
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
      <ToastContainer />
    </div>
  );
};

export default ProductCard;
