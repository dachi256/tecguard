import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import ProductItem from '../components/ProductItem';
import products from '../data/products';
import '../css/ProductPage.css';

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

const ProductPage = ({ onAddToCart }) => {
  const { id } = useParams();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  // Get the corresponding image based on the product ID
  const getProductImage = (productId) => {
    switch (productId) {
      case '1':
        return prod1Image;
      case '2':
        return prod2Image;
      case '3':
        return prod3Image;
      case '4':
        return prod4Image;
      case '5':
        return prod5Image;
      case '6':
        return prod6Image;
      case '7':
        return prod7Image;
      case '8':
        return prod8Image;
      case '9':
        return prod9Image;
      case '10':
        return prod10Image;
      case '11':
        return prod11Image;
      case '12':
        return prod12Image;
      case '13':
        return prod13Image;
      case '14':
        return prod14Image;
      case '15':
        return prod15Image;
      case '16':
        return prod16Image;
      default:
        return null;
    }
  };

  const productImage = getProductImage(product.id);

  return (
    <div className="product-page">
      <div className="product-details">
        <img src={productImage} alt={product.name} className="product-image" />
        <div className="product-info">
          <h2 className="product-name">{product.name}</h2>
          <p className="product-price">Price: {product.price} ლარი</p>
          <p className="product-category">Category: {product.category}</p>
          <p className="product-brand">Brand: {product.brand}</p>
          <p className="product-color">Color: {product.color}</p>
          <button onClick={() => onAddToCart(product)} className="add-to-cart-btn">
            Add to Cart
          </button>
        </div>
      </div>
      <div className="related-products">
        <h3>Related Products</h3>
        <div className="product-grid">
          {products
            .filter((p) => p.category === product.category && p.id !== product.id)
            .slice(0, 4)
            .map((p) => (
              <ProductItem key={p.id} product={p} onAddToCart={onAddToCart} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;