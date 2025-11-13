"use client";

import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import "./cardContainer.css";
import Image, { StaticImageData } from "next/image";

const HouseCardContainer: React.FC<{
  houseName: string;
  houseImage: StaticImageData;
  onClick?: () => void;
}> = ({ houseName, houseImage, onClick }) => {
  const pressValue = useMotionValue(0);
  const boxShadow = useTransform(
    pressValue,
    [0, 1],
    ["inset 0 0 0 rgba(0,0,0,0)", "inset 0 0 12px rgba(0,0,0,0.35)"]
  );

  const setPressed = (v: number) =>
    animate(pressValue, v, { type: "spring", stiffness: 500, damping: 30 });
  return (
    <motion.button
      className="house-card"
      whileTap={{
        scale: 0.95,
        filter: "brightness(0.9)",
      }}
      onTapStart={() => setPressed(1)} // start press
      onTapCancel={() => setPressed(0)} // drag outside or cancel
      onTap={() => setPressed(0)}
      onClick={onClick}
    >
      <motion.div
        style={{ boxShadow }}
        className="card-content flex flex-col items-center justify-center"
      >
        <div className="flex-1 flex items-center justify-center">
          <Image src={houseImage} alt={houseName} width={120} height={100} />
        </div>
        <motion.p>{houseName}</motion.p>
      </motion.div>
    </motion.button>
  );
};

export default HouseCardContainer;
