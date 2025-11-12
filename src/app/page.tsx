"use client";

import MagicButton from "../components/button/MagicButton";
import TextType from "@/components/TextType";
import TransitionOverlay from "@/components/transitionOverlays/TransitionOverlays";
import { useRouter } from "next/navigation";
import { Activity, useState } from "react";

export default function HomePage() {
  const [transition, setTransition] = useState(false);
  const [hideContent, setHideContent] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setTransition(true);

    const totalTime = 800 + 1000;
    setTimeout(() => {
      setHideContent(true);
    }, totalTime);
  };

  return (
    <section
      className="h-screen  flex flex-col items-center justify-center text-center overflow-auto "
      style={{
        backgroundImage: hideContent ? "url('/home-background.png')" : "",
        backgroundSize: "cover",
      }}
    >
      <Activity mode={hideContent ? "hidden" : "visible"}>
        <div className=" flex items-center justify-center h-full w-full">
          <div
            className="flex flex-col h-screen items-center justify-between"
            style={{ padding: "70px 0px" }}
          >
            <div className="">
              <div>
                <TextType
                  text={"WELCOME"}
                  typingSpeed={75}
                  pauseDuration={1000}
                  showCursor={false}
                  className="title text-3xl sm:text-4xl md:text-6xl animate-typing"
                />
              </div>
              <div className=" ">
                <TextType
                  text={"WIZARD"}
                  typingSpeed={75}
                  pauseDuration={1500}
                  initialDelay={1070}
                  showCursor={false}
                  className="title text-5xl sm:text-6xl md:text-8xl  animate-typing "
                />
              </div>
            </div>

            <div className="">
              {/* <Link href="/choose-your-house"> */}
              <MagicButton onClick={handleClick} />
              {/* </Link> */}
            </div>
          </div>
        </div>
      </Activity>
      <TransitionOverlay
        isActive={transition}
        bgColor="#000000"
        imageSrc="/sorting-hat.png"
        text="The journey begins..."
        duration={800}
        displayTime={1500}
        onComplete={() => router.push("/choose-your-house")}
      />
    </section>
  );
}
