import React from 'react';
import Canvas from './Canvas';

const CanvasEditor = ({ templateData }) => {
  return (
    <div>
      <h1>Canvas Editor</h1>
      <Canvas backgroundColor={templateData.background_color} />
    </div>
  );
};

export default CanvasEditor;


