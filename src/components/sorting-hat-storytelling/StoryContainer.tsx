import { motion } from "framer-motion";
import Image from "next/image";
import "./storyTelling.css";
import sortingHat from "./images/sorting-hat.png";
import TextType from "../TextType";
import { Dispatch, SetStateAction } from "react";
import ActionButton from "../button/ActionButton";

const StoryContainer = ({
  hatMessage,
  setDisplayMessage,
  displayBtn,
}: {
  hatMessage: string;
  setDisplayMessage: Dispatch<SetStateAction<boolean>>;
  displayBtn: boolean;
}) => {
  return (
    <motion.div className="message-container relative flex flex-col items-center justify-start w-full">
      <motion.div className="flex-1 message-content w-full grid grid-cols-7">
        <motion.div className=" ">
          <Image src={sortingHat} alt="Sorting hat" width={50} height={50} />
        </motion.div>
        <motion.div className=" text-[12px] sm:text-sm  col-span-6 ">
          <TextType key={hatMessage} text={hatMessage} />
        </motion.div>
      </motion.div>

      <div className="absolute -right-2 -top-2 ">
        <button
          className="close-button "
          onClick={() => setDisplayMessage(false)}
        >
          X
        </button>
      </div>
      {displayBtn && (
        <motion.div
          key={hatMessage}
          className="absolute -bottom-4 "
          initial={{ opacity: 0, scale: 1.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 4,
            duration: 1,
            ease: "easeInOut",
          }}
        >
          <ActionButton> Next </ActionButton>
        </motion.div>
      )}
    </motion.div>
  );
};

export default StoryContainer;
