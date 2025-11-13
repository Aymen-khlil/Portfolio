"use client";

import "./button.css";

export default function MagicButton({ onClick }: { onClick: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center ">
      {/* <Image src="/aaa.png" width={200} height={100} alt="wizzardCap" /> */}
      <button className="pixel-btn text-xl  " onClick={onClick}>
        Start Quest
      </button>
    </div>
  );
}
