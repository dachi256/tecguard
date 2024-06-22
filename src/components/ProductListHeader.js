import React from 'react';
import Filter from './Filter';
import PriceSlider from './PriceSlider';
import '../css/ProductListHeader.css';

const ProductListHeader = ({ // This component receives multiple props for header
  onFilter,
  searchTerm,
  onSearch,
  priceRange,
  onPriceRangeChange,
  minPrice = 0,
  maxPrice = 150,
}) => {
  return (
    <div className="product-list-header">
      <div className="filter-options">
        <Filter
          onFilter={onFilter}
          filterFields={['category', 'brand', 'color']}
        />
        <div className="search-sort-container">
          <Filter
            onFilter={onFilter}
            filterFields={['sortOption']}
          />
          <div className="search-container">
            <input
              type="text"
              placeholder="Search products"
              value={searchTerm}
              onChange={onSearch}
            />
          </div>
        </div>
      </div>
      <div className="price-slider">
        <PriceSlider
          value={priceRange}
          onChange={onPriceRangeChange}
          min={minPrice}
          max={maxPrice}
        />
      </div>
    </div>
  );
};

export default ProductListHeader;