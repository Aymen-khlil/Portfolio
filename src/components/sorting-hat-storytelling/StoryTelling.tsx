"use client";
import { motion } from "framer-motion";
import "./storyTelling.css";

const StoryTelling = ({ hatMessage }: { hatMessage: string }) => {
  return (
    <motion.div className="story-container  w-[50%] h-full">
      <div className="story-message ">{hatMessage}</div>
    </motion.div>
  );
};

export default StoryTelling;
