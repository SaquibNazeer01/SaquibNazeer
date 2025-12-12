import React, { useEffect, useRef } from 'react';

const Particles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const getThemeColor = (varName: string) => {
    const style = getComputedStyle(document.documentElement);
    const val = style.getPropertyValue(varName).trim();
    if (!val) return null;
    return val.split(' ').map(Number);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let frame = 0;

    const stars: { x: number; y: number; z: number; size: number }[] = [];
    const STAR_COUNT = 200;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initStars();
    };

    const initStars = () => {
      stars.length = 0;
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: (Math.random() - 0.5) * width * 2,
          y: (Math.random() - 0.5) * height * 2,
          z: Math.random() * width,
          size: Math.random() * 2,
        });
      }
    };

    const drawGrid = (offset: number) => {
      const primary = getThemeColor('--color-primary') || [6, 182, 212];
      const bg = getThemeColor('--color-bg') || [2, 6, 23];
      const isLightMode = (bg[0]*0.299 + bg[1]*0.587 + bg[2]*0.114) > 186;

      const rgb = `${primary[0]},${primary[1]},${primary[2]}`;
      // In light mode, grid needs to be more opaque to be seen on white
      const gridOpacity = isLightMode ? 0.15 : 0.15; 
      
      const horizonY = height * 0.6;
      const gridSize = 40;
      const speed = 1;
      
      // Perspective Grid
      ctx.beginPath();
      ctx.strokeStyle = `rgba(${rgb}, ${gridOpacity})`;
      ctx.lineWidth = 1;

      // Vertical lines
      for (let x = -width; x < width * 2; x += gridSize * 2) {
         ctx.moveTo(x + (width/2 - x) * 0.5, horizonY);
         ctx.lineTo(x, height);
      }
      
      // Horizontal lines (moving)
      const moveOffset = (frame * speed) % gridSize;
      for (let y = horizonY; y < height; y += gridSize * (1 + (y - horizonY)/200)) {
         const visualY = y + moveOffset;
         if (visualY > height) continue;
         
         ctx.moveTo(0, visualY);
         ctx.lineTo(width, visualY);
      }
      
      ctx.stroke();

      // Horizon Glow
      const gradient = ctx.createLinearGradient(0, horizonY - 50, 0, horizonY + 50);
      gradient.addColorStop(0, `rgba(${rgb}, 0)`);
      gradient.addColorStop(0.5, `rgba(${rgb}, ${isLightMode ? 0.2 : 0.3})`);
      gradient.addColorStop(1, `rgba(${rgb}, 0)`);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, horizonY - 50, width, 100);
    };

    const drawStars = () => {
      const bg = getThemeColor('--color-bg') || [3, 7, 18];
      const isLightMode = (bg[0]*0.299 + bg[1]*0.587 + bg[2]*0.114) > 186;
      
      // Use dark gray for light mode stars, white for dark mode
      ctx.fillStyle = isLightMode ? '#334155' : '#fff'; 
      
      stars.forEach((star) => {
        // Move star forward
        star.z -= 2;
        if (star.z <= 0) {
          star.z = width;
          star.x = (Math.random() - 0.5) * width * 2;
          star.y = (Math.random() - 0.5) * height * 2;
        }

        const k = 128.0 / star.z;
        const px = star.x * k + width / 2;
        const py = star.y * k + height / 2;

        if (px >= 0 && px <= width && py >= 0 && py <= height * 0.6) { 
          const size = (1 - star.z / width) * 2;
          const alpha = 1 - star.z / width;
          ctx.globalAlpha = alpha;
          ctx.beginPath();
          ctx.arc(px, py, size, 0, Math.PI * 2);
          ctx.fill();
        }
      });
      ctx.globalAlpha = 1.0;
    };

    const animate = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);
      drawStars();
      drawGrid(frame);
      requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default Particles;