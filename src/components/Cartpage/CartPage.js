import ProductCard from "../ProductCard";

const CartPage = ({ cartProducts }) => {
  return (
    <div>
      <h1>Your Cart ({cartProducts.length})</h1>
      {cartProducts.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartProducts.map((product, index) => (
          <ProductCard key={index} products={product} />
        ))
      )}
    </div>
  );
};

export default CartPage;
