"use client";

import dynamic from "next/dynamic";

const PixelTrails = dynamic(
  () => import("@/components/pixelTrails/pixelTrail"),
  { ssr: false }
);

const PixelTraillWrapper = () => {
  return <PixelTrails />;
};

export default PixelTraillWrapper;
