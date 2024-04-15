import React, { useRef, useEffect } from 'react';

const Canvas = ({ backgroundColor }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 400;
    drawBackground(ctx, backgroundColor);
  }, [backgroundColor]);

  const drawBackground = (ctx, color) => {
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  };

  return <canvas ref={canvasRef} style={{ border: '1px solid black' }} />;
};

export default Canvas;
