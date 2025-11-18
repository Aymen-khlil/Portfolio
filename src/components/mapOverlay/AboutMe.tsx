"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import "./aboutMe.css";
import { geistBeth } from "@/app/layout";

export default function AboutMe() {
  const ANIMATION = {
    welcomeFadeIn: 400,
    welcomeFadeOut: 1000,
    welcomeVisible: 1500,
    maskFadeIn: 0,
    maskVisible: 6000,
  };

  const welcomeTotal =
    ANIMATION.welcomeFadeIn +
    ANIMATION.welcomeVisible +
    ANIMATION.welcomeFadeOut;

  const maskStart = welcomeTotal; // when mask should appear
  const maskEnd = maskStart + ANIMATION.maskFadeIn + ANIMATION.maskVisible;

  const [showWelcome, setShowWelcome] = useState(true);
  const [showMask, setShowMask] = useState(false);
  const [revealPage, setRevealPage] = useState(false);

  // Welcome disappears
  useEffect(() => {
    const t = setTimeout(() => setShowWelcome(false), welcomeTotal);
    return () => clearTimeout(t);
  }, []);

  // Mask starts
  useEffect(() => {
    const t = setTimeout(() => setShowMask(true), maskStart);
    return () => clearTimeout(t);
  }, [maskStart]);

  // Page reveal
  useEffect(() => {
    const t = setTimeout(() => setRevealPage(true), maskEnd);
    return () => clearTimeout(t);
  }, [maskEnd]);

  return (
    <div className="relative h-screen ">
      <AnimatePresence mode="wait">
        {/* WELCOME */}
        {showWelcome && (
          <motion.div
            key="welcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: ANIMATION.welcomeFadeIn / 1000 }}
            className="h-full  flex items-center justify-center "
          >
            <motion.h1
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: ANIMATION.welcomeFadeOut / 1000 }}
              className={`welcome-message text-white text-4xl  `}
            >
              Welcome
            </motion.h1>
          </motion.div>
        )}

        {/* MASK */}
        {showMask && !revealPage && (
          <motion.div
            key="mask"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: ANIMATION.maskFadeIn / 1000 }}
            className="content-mask h-full  "
            style={
              {
                // zIndex: "1",
              }
            }
          ></motion.div>
        )}

        {/* REVEALED PAGE */}
        {revealPage && (
          <motion.div
            key="page3"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="final-content h-full"
          >
            <div className="p-10">
              <h2 className="text-white text-3xl">Page 3 Content</h2>
              <p className="text-white mt-4">Page revealed 🎉</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
