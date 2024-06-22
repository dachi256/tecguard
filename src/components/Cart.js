import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Cart.css';

import prod1Image from '../media/prod 1.jpg';
import prod2Image from '../media/prod 2.jpg';
import prod3Image from '../media/prod 3.jpg';
import prod4Image from '../media/prod 4.jpg';
import prod5Image from '../media/prod 5.jpg';
import prod6Image from '../media/prod 6.jpg';
import prod7Image from '../media/prod 7.jpg';
import prod8Image from '../media/prod 8.jpg';
import prod9Image from '../media/prod 9.jpg';
import prod10Image from '../media/prod 10.jpg';
import prod11Image from '../media/prod 11.jpg';
import prod12Image from '../media/prod 12.jpg';
import prod13Image from '../media/prod 13.jpg';
import prod14Image from '../media/prod 14.jpg';
import prod15Image from '../media/prod 15.jpg';
import prod16Image from '../media/prod 16.jpg';

const Cart = ({ cartItems, onRemoveItem, onUpdateQuantity }) => { // Add the onRemoveItem and onUpdateQuantity props
  const navigate = useNavigate(); // Add the navigate function

  const totalPrice = cartItems.reduce( // Calculate the total price of the items in the cart
    (total, item) => total + item.price * item.quantity,
    0
  );

  const getImageForProduct = (id) => { // Get the corresponding image based on the product ID
    switch (id) {
      case '1': return prod1Image;
      case '2': return prod2Image;
      case '3': return prod3Image;
      case '4': return prod4Image;
      case '5': return prod5Image;
      case '6': return prod6Image;
      case '7': return prod7Image;
      case '8': return prod8Image;
      case '9': return prod9Image;
      case '10': return prod10Image;
      case '11': return prod11Image;
      case '12': return prod12Image;
      case '13': return prod13Image;
      case '14': return prod14Image;
      case '15': return prod15Image;
      case '16': return prod16Image;
      default: return null; // default image or handling for unknown ids
    }
  };

  const handleRemoveItem = (itemId) => {
    onRemoveItem(itemId);
  };

  const handleQuantityChange = (itemId, quantity) => {
    onUpdateQuantity(itemId, quantity);
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return ( // Display the cart items, total price, and checkout button
    <div className="cart">
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={getImageForProduct(item.id)} alt={item.name} />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p className="price">Price: {item.price} ლარი</p>
                <div className="cart-item-quantity">
                  <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
                  <input
                    type="number"
                    id={`quantity-${item.id}`}
                    min="1"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                  />
                </div>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="remove-button"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="cart-summary">
            <p className="total-price">Total Price: {totalPrice} ლარი</p>
            <button className="checkout-button" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;