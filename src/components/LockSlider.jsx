import React from "react";

const LockSlider = ({ handleInput, sliderValue, width }) => {
  const sliderStyle = {
    appearance: "none",
    background: "#ededed",
    height: "50px",
    width: !width ? "300px" : width,
    outline: "none",
    borderRadius: "40px",
    margin: "10px",
  };
  return (
    <input
      type="range"
      className="slider"
      style={sliderStyle}
      onInput={handleInput}
      value={sliderValue}
    />
  );
};

export default LockSlider;
