//App.js
import React from 'react';
import Tooltip from './Tooltip';

const App = () => {
  return (
    <div className="App">
      <Tooltip text="This is a Tooltip">
        <h1 className="tooltip-title">Hover over me</h1>
      </Tooltip>
      <hr style={{ marginBottom: "50px" }} className="tooltip-divider" />
      <Tooltip text="This is another tooltip">
        <p className="tooltip-title">Hover over this paragraph</p>
      </Tooltip>
      <hr style={{ marginTop: "30px" }} className="tooltip-divider" />
    </div>
  );
};

export default App;

/*
import React from 'react';
import Tooltip from './Tooltip';

const App = () => {
  return (
    <div className="App">
      <Tooltip text="This is a Tooltip">
        <h1 className="tooltip-title">Hover over me</h1>
      </Tooltip>
      <hr style={{marginBottom: "50px"}} className="tooltip-divider" />
      <Tooltip text="This is another tooltip">
        <p className="tooltip-title">Hover over this paragraph</p>
      </Tooltip>
      <hr style={{marginTop: "30px"}} className="tooltip-divider" />
    </div>
  );
};

export default App;
*/