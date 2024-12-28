
//Tooltip.js
// Tooltip.js
import React, { useState } from 'react';
import '../styles/Tooltip.css';

const Tooltip = ({ text, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div 
      className="tooltip" 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {/* Render the tooltip conditionally based on the state */}
      {showTooltip && <span className="tooltiptext">{text}</span>}
    </div>
  );
};

export default Tooltip;


/*
import React, { useState } from 'react';
import '../styles/Tooltip.css';

const Tooltip = ({ text, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className="tooltip" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      {showTooltip && <span className="tooltiptext">{text}</span>}
    </div>
  );
};

export default Tooltip;
*/