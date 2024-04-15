import React from 'react';
import { ChromePicker } from 'react-color';

const ColorPicker = ({ color, onChange }) => {
  return (
    <div>
      <h2>Background Color</h2>
      <ChromePicker color={color} onChange={onChange} />
    </div>
  );
};

export default ColorPicker;
