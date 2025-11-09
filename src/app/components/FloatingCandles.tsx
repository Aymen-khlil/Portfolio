/* eslint-disable react-hooks/purity */
"use client";

import React from "react";

interface Props {
  count?: number;
}

export default function FloatingCandles({ count = 6 }: Props) {
  const candles = Array.from({ length: count });

  return (
    <div className="absolute inset-0 overflow-hidden">
      {candles.map((_, i) => (
        <div
          key={i}
          className="candle absolute w-3 h-8 bg-[--color-accent] rounded-sm blur-[1px] opacity-80"
          style={{
            top: `${Math.random() * 70 + 5}%`,
            left: `${Math.random() * 90 + 5}%`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  );
}
