// src/components/Filter.js
import React from 'react';
import '../css/Filter.css';

const Filter = ({ onFilter, filterFields }) => {
  const renderFilterOptions = (field) => {
    switch (field) {
      case 'category':
        return (
          <>
            <option value="">All Categories</option>
            <option value="power bank">Power Banks</option>
            <option value="screen protector">Screen Protectors</option>
            <option value="case">Cases</option>
            <option value="charger">Chargers</option>
          </>
        );
      case 'brand':
        return (
          <>
            <option value="">All Brands</option>
            <option value="Aukey">Aukey</option>
            <option value="HOCO">HOCO</option>
            <option value="Canyon">Canyon</option>
            <option value="Apple">Apple</option>
          </>
        );
      case 'color':
        return (
          <>
            <option value="">All Colors</option>
            <option value="Black">Black</option>
            <option value="White">White</option>
            <option value="Blue">Blue</option>
            <option value="Gray">Gray</option>
            <option value="Transparent">Transparent</option>
          </>
        );
      case 'sortOption':
        return (
          <>
            <option value="">Sort by</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="filter">
      {filterFields.map((field) => (
        <div key={field} className="filter-item">
          <select id={field} onChange={(e) => onFilter(field, e.target.value)}>
            {renderFilterOptions(field)}
          </select>
        </div>
      ))}
    </div>
  );
};

export default Filter;
