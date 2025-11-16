import Link from "next/link";
import React from "react";

const GetToKnowMe = () => {
  return (
    <div
      className="h-full screen  flex flex-col items-center justify-center text-center overflow-auto "
      style={{
        backgroundImage: "url('/hogwarts.png')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {" "}
      <Link href="/testing" className="bg-red-500">
        azeaze
      </Link>
    </div>
  );
};

export default GetToKnowMe;
