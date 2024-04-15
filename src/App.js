import React, { useState } from 'react';
import CanvasEditor from './components/CanvasEditor';
import ColorPicker from './components/ColorPicker';
import './App.css'; 

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState('#ffff'); 

  const templateData = {
    background_color: backgroundColor,
  };

  const handleColorChange = (color) => {
    setBackgroundColor(color.hex);
  };

  return (
    <div className="app-container"> 
      <div style={{ marginBottom: '20px' }}>
        <ColorPicker color={backgroundColor} onChange={handleColorChange} />
      </div>
      <CanvasEditor templateData={templateData} />
    </div>
  );
};

export default App;
