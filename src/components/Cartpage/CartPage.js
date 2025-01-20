import React from 'react';
import { Button, IconButton, Card, CardContent, Typography, CardMedia } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const CartContainer = styled.div`
  width: 80%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
`;

const CartCard = styled(Card)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const CartItemDetails = styled(CardContent)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

const CartItemActions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  padding: 10px;
`;

const CartPage = ({ cartProducts, onAddCart, removeFromCart, handleDecreaseQuantity }) => {
  // Calculate total price of cart
  const totalPrice = cartProducts.reduce((acc, product) => acc + product.price * product.quantity, 0).toFixed(2);

  return (
    <Wrapper>
      <Typography variant="h4" gutterBottom>
        Your Cart
      </Typography>

      {cartProducts.length === 0 ? (
        // Display empty cart message
        <Typography variant="h6" color="textSecondary">
          Your cart is empty
        </Typography>
      ) : (
        // Cart items are displayed if there are products
        <CartContainer>
          {cartProducts.map((product) => (
            <CartCard key={product.id}>
              <CardMedia
                component="img"
                image={product.image}
                alt={product.name}
                sx={{ width: 80, height: 80, objectFit: 'cover' }}
              />
              <CartItemDetails>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body2">Price: ${product.price}</Typography>
                <Typography variant="body2">Quantity: {product.quantity}</Typography>
                <Typography variant="body2">Total: ${(product.price * product.quantity).toFixed(2)}</Typography>
              </CartItemDetails>
              <CartItemActions>
                <div>
                  <IconButton onClick={() => removeFromCart(product.id)} color="secondary">
                    <DeleteIcon />
                  </IconButton>
                </div>
                <div>
                  <IconButton onClick={() => handleDecreaseQuantity(product.id)} color="primary">
                    <RemoveIcon />
                  </IconButton>
                  <IconButton onClick={() => onAddCart(product)} color="primary">
                    <AddIcon />
                  </IconButton>
                </div>
              </CartItemActions>
            </CartCard>
          ))}
        </CartContainer>
      )}

      {/* Total Price and Buy Now Button */}
      {cartProducts.length > 0 && (
        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', width: '80%', maxWidth: '800px' }}>
          <Typography variant="h6" gutterBottom>Total Price: ${totalPrice}</Typography>
          <Button variant="contained" color="primary">
            Buy Now
          </Button>
        </div>
      )}
    </Wrapper>
  );
};

export default CartPage;
