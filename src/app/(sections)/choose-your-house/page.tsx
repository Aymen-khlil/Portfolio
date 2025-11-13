"use client";

import HouseCardContainer from "@/components/houseCards/HouseCardContainer";
import griffendor from "../../../components/houseCards/images/Griffindor-logo.png";
import hupperpuf from "../../../components/houseCards/images/Hupperpuf-logo.png";
import ravenclaw from "../../../components/houseCards/images/Ravenclaw-logo.png";
import slytherin from "../../../components/houseCards/images/Slytherin-logo.png";
import { motion } from "framer-motion";
import { Activity, useState } from "react";
import "./house.css";

const HousePicks = () => {
  const [displayMessage, setDisplayMessage] = useState(false);
  const [hatMessage, setHatMessage] = useState("");

  const handleChoosingAHouse = () => {
    setDisplayMessage(true);
    setHatMessage("Hogwarts");
  };
  return (
    <div
      className=" h-screen flex items-center justify-center flex-col"
      style={{
        backgroundImage: "url(/backgrounds/hog-dining.png)",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" grid grid-cols-1 lg:grid-cols-2 h-screen w-full ">
        <div className="h-full  flex items-center justify-center">One</div>
        <div className="flex items-center justify-center h-full ">
          <motion.div className=" grid grid-cols-2 gap-2 ">
            <HouseCardContainer
              houseName="Griffendor"
              houseImage={griffendor}
              onClick={handleChoosingAHouse}
            />
            <HouseCardContainer houseName="Hupperpuf" houseImage={hupperpuf} />
            <HouseCardContainer houseName="Ravenclaw" houseImage={ravenclaw} />
            <HouseCardContainer houseName="Slytherin" houseImage={slytherin} />
          </motion.div>
        </div>
      </div>
      <div className="h-[20vh] flex justify-center items-center w-full">
        <Activity mode={displayMessage ? "visible" : "hidden"}>
          <motion.div className="hat-message border-2 w-[50%] h-full">
            <div className="hat-content">{hatMessage}</div>
          </motion.div>
        </Activity>
      </div>
    </div>
  );
};

export default HousePicks;
