"use client";

import React, { useEffect, useState } from "react";

interface Pixel {
  id: number;
  x: number;
  y: number;
  color: string;
}

const PixelTrail: React.FC = () => {
  const [pixels, setPixels] = useState<Pixel[]>([]);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const glowColors = ["#a7e8ff", "#c9f2ff", "#e8fcff"]; // soft purple glow tones

      const newPixel: Pixel = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
        color: glowColors[Math.floor(Math.random() * glowColors.length)],
      };

      setPixels((prev) => [...prev.slice(-50), newPixel]); // limit for performance
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <>
      {pixels.map((pixel) => (
        <span
          key={pixel.id}
          style={{
            position: "fixed",
            left: pixel.x,
            top: pixel.y,
            width: "2px",
            height: "2px",
            backgroundColor: pixel.color,
            // borderRadius: "50%",
            boxShadow: `0 0 8px 4px ${pixel.color}`,
            pointerEvents: "none",
            transform: "translate(-50%, -50%)",
            animation: "fade 0.8s ease-out forwards",
          }}
        />
      ))}

      <style>{`
        @keyframes fade {
          0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(0.5);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0);
          }
        }
      `}</style>
    </>
  );
};

export default PixelTrail;
