
import React from "react";
import "./Section.css";

const Section = ({
  title,
  children,
  showToggle = true,
  isCollapsed,
  onToggle,
}) => {
  return (
    <section className="section">
      <div className="section-header">
        <h2>{title}</h2>

        {showToggle && (
          <button
            className="toggle-button"
            onClick={onToggle}
          >
            {isCollapsed ? "Show All" : "Collapse"}
          </button>
        )}
      </div>

      {children}
    </section>
  );
};

export default Section;
