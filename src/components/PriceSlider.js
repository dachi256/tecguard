import React from 'react';
import { Slider } from '@material-ui/core';
import '../css/PriceSlider.css';

const PriceSlider = ({ value, onChange, min, max }) => { // This component receives the value, onChange, min, and max props
  return (
    <div className="price-slider-container">
      <Slider
        value={value}
        onChange={(e, newValue) => onChange(newValue)}
        min={min}
        max={max}
        step={5}
        valueLabelDisplay="on"
        aria-labelledby="price-slider"
        ThumbComponent={ThumbComponent}
      />
    </div>
  );
};

// Custom Thumb component to display the price on the slider thumb
function ThumbComponent(props) {
  return (
    <span {...props}>
      <span className="price-thumb-label">{props['aria-valuenow']}₾</span>
    </span>
  );
}

export default PriceSlider;
