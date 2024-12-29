
//Tooltip.js
import React, { useState } from 'react';
import '../styles/Tooltip.css';

const Tooltip = ({ text, children }) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const handleMouseEnter = () => setIsTooltipVisible(true);
  const handleMouseLeave = () => setIsTooltipVisible(false);

  return (
    <div
      className="tooltip"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="tooltip-content">{children}</div>
      {isTooltipVisible && <div className="tooltiptext">{text}</div>}
    </div>
  );
};

export default Tooltip;

/*
import React, { useState } from 'react';
import '../styles/Tooltip.css';

const Tooltip = ({ text, children }) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const handleMouseEnter = () => setIsTooltipVisible(true);
  const handleMouseLeave = () => setIsTooltipVisible(false);

  return (
    <div
      className="tooltip-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="tooltip-content">{children}</div>
      {isTooltipVisible && <div className="tooltiptext">{text}</div>}
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