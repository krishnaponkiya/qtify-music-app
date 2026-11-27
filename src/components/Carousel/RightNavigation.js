
import React from "react";

const RightNavigation = ({ onClick }) => {
  return (
    <button
      className="carousel-navigation carousel-right"
      onClick={onClick}
      aria-label="Next slide"
    >
      {/* Replace with the right navigation SVG exported from Figma */}
      <svg width="32" height="32" viewBox="0 0 32 32">
        <path
          d="M12 6L22 16L12 26"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </button>
  );
};

export default RightNavigation;
