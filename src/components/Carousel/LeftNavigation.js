
import React from "react";

const LeftNavigation = ({ onClick }) => {
  return (
    <button
      className="carousel-navigation carousel-left"
      onClick={onClick}
      aria-label="Previous slide"
    >
      {/* Replace with the left navigation SVG exported from Figma */}
      <svg width="32" height="32" viewBox="0 0 32 32">
        <path
          d="M20 6L10 16L20 26"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </button>
  );
};

export default LeftNavigation;
