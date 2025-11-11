"use client";

import Image from "next/image";
import "./button.css";

export default function MagicButton() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <Image src="/aaa.png" width={200} height={100} alt="wizzardCap" />
      <button className="pixel-btn text-xl  ">Start Quest</button>
    </div>
  );
}
