import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import ProductListHeader from './ProductListHeader';
import '../css/ProductList.css';

const ProductList = ({ products, onAddToCart }) => { // This component receives the products array and the onAddToCart function as props.
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSortOption, setSelectedSortOption] = useState('');
  const [priceRange, setPriceRange] = useState([0, 150]);

  const handleFilter = (field, value) => { // This function is called when a filter is applied
    switch (field) {
      case 'category':
        setSelectedCategory(value);
        break;
      case 'brand':
        setSelectedBrand(value);
        break;
      case 'color':
        setSelectedColor(value);
        break;
      case 'sortOption':
        setSelectedSortOption(value);
        break;
      default:
        break;
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handlePriceRangeChange = (newPriceRange) => {
    setPriceRange(newPriceRange);
  };

  useEffect(() => { // This effect is called whenever the products, selectedCategory, selectedBrand, selectedColor, priceRange, searchTerm, or selectedSortOption change
    let filtered = products;

    if (selectedCategory) {
      filtered = filtered.filter((product) => product.category === selectedCategory);
    }

    if (selectedBrand) {
      filtered = filtered.filter((product) => product.brand === selectedBrand);
    }

    if (selectedColor) {
      filtered = filtered.filter((product) => product.color === selectedColor);
    }

    filtered = filtered.filter(
      (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    switch (selectedSortOption) { // This switch statement sorts the products based on the selected sort option
      case 'lowToHigh':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'highToLow':
        filtered.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
  }, [
    products,
    selectedCategory,
    selectedBrand,
    selectedColor,
    priceRange,
    searchTerm,
    selectedSortOption,
  ]);

  return (
    <div className="product-list-container">
      <ProductListHeader
        onFilter={handleFilter}
        searchTerm={searchTerm}
        onSearch={handleSearch}
        priceRange={priceRange}
        onPriceRangeChange={handlePriceRangeChange}
      />
      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;