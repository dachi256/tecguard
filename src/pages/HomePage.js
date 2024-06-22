import React from 'react';
import ProductList from '../components/ProductList';
import BrandIntro from '../components/BrandIntro';
import products from '../data/products';
import '../css/HomePage.css';

const HomePage = ({ onAddToCart, cartItems }) => {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="home-page">
      <BrandIntro />
      <ProductList products={products} onAddToCart={onAddToCart} />
      <div className="cart-summary">
        <h3>Cart Summary</h3>
        <p>Total Price: {totalPrice} ლარი</p>
      </div>
    </div>
  );
};

export default HomePage;