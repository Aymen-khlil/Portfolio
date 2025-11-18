"use client";

import AboutMe from "@/components/mapOverlay/AboutMe";
import "./getToKnowMe.css";

import { usePathname } from "next/navigation";

const GetToKnowMe = () => {
  const pathname = usePathname();
  return <AboutMe key={pathname} />;
};

export default GetToKnowMe;
