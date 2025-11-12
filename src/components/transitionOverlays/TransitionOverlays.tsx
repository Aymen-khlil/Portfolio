/* eslint-disable react-hooks/set-state-in-effect */
// components/TransitionOverlay.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface TransitionOverlayProps {
  isActive: boolean;
  imageSrc?: string;
  text?: string;
  bgColor?: string;
  duration?: number; // total fade duration
  displayTime?: number; // how long the image/text stay before fade out
  onComplete?: () => void;
}

export default function TransitionOverlay({
  isActive,
  imageSrc,
  text,
  bgColor = "#000000",
  duration = 1000,
  displayTime = 2000,
  onComplete,
}: TransitionOverlayProps) {
  // TransitionOverlay.tsx
  const [visible, setVisible] = useState(isActive);
  const [shouldFadeOut, setShouldFadeOut] = useState(false);

  useEffect(() => {
    if (isActive) {
      setVisible(true);
      setShouldFadeOut(false);

      // Start fade-out animation
      const fadeOutTimer = setTimeout(() => {
        setShouldFadeOut(true);
      }, duration + displayTime);

      // Navigate and cleanup after fade-out completes
      const completeTimer = setTimeout(() => {
        onComplete?.();
        setTimeout(() => {
          setVisible(false);
        }, 100);
      }, duration * 2 + displayTime);

      return () => {
        clearTimeout(fadeOutTimer);
        clearTimeout(completeTimer);
      };
    }
  }, [isActive, duration, displayTime, onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-9999 flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: shouldFadeOut ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: duration / 1000 }}
          style={{ backgroundColor: bgColor }}
        >
          {text && (
            <motion.p
              className="text-white text-lg mt-4 font-pixel"
              initial={{ opacity: 0 }}
              animate={{ opacity: shouldFadeOut ? 0 : 1 }}
              transition={{ delay: duration / 1000 + 0.5 }}
            >
              {text}
            </motion.p>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
