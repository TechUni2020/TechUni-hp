import React from "react";

function SlideContainer({ top, bottom }) {
  return (
    <div className="slider-container">
      <div className="top-slider">{top}</div>
      <div className="bottom-slider">{bottom}</div>
    </div>
  );
}

export default SlideContainer;