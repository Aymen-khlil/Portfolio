"use client";

import Image from "next/image";
import "./button.css";

export default function MagicButton() {
  const handleClick = () => {
    // Later you can navigate with useRouter() to next page (e.g. /character-select)
    alert("Your quest begins...");
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <Image src="/aaa.png" width={200} height={100} alt="wizzardCap" />
      <button className="pixel-button text-sm  bg-[#511113] w-80">
        Start Quest
      </button>
    </div>
  );
}
