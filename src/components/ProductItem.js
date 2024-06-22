import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/ProductItem.css';

// Import the product images
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

const ProductItem = ({ product, onAddToCart }) => {
  const [isAdding, setIsAdding] = useState(false);

  const displayPrice = product.onSale ? (
    <div className="price">
      <span className="original-price">{product.originalPrice} ლარი</span>
      <span className="sale-price">{product.price} ლარი</span>
    </div>
  ) : (
    <div className="price">{product.price} ლარი</div>
  );

  // Get the corresponding image based on the product ID
  const getProductImage = (productId) => {
    switch (productId) {
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
      default: return null;
    }
  };

  const productImage = getProductImage(product.id);

  const handleAddToCart = () => {
    setIsAdding(true);
    onAddToCart(product);
    setTimeout(() => setIsAdding(false), 500); // Reset after animation
  };

  return ( // Display the product image, name, price, and add to cart button
    <div className="product-item">
      <Link to={`/products/${product.id}`}>
        <img src={productImage} alt={product.name} />
      </Link>
      <div className="product-info">
        <h3>
          <Link to={`/products/${product.id}`}>{product.name}</Link>
        </h3>
        <div className="product-details">
          <div className="price-container">{displayPrice}</div>
          <button 
            onClick={handleAddToCart}
            className={`add-to-cart-btn ${isAdding ? 'adding' : ''}`}
          >
            {isAdding ? 'Added!' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;