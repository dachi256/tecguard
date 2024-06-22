import React from 'react';
import '../css/BrandIntro.css';
import brandImage from '../media/brand-image.png';

const BrandIntro = () => {
  return (
    <div className="brand-intro">
      <img src={brandImage} alt="Brand" className="brand-image" />
      <div className="brand-text">
        <h2>Welcome to TecGuard</h2>
        <p>
          We are a leading provider of high-quality phone accessories. With our wide range of products and commitment to customer satisfaction, we strive to enhance your mobile experience.
        </p>
      </div>
    </div>
  );
};

export default BrandIntro;