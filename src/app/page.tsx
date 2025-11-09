import MagicButton from "./components/button/MagicButton";

export default function HomePage() {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center overflow-hidden ">
      <div className=" flex items-center justify-center h-full w-full">
        <div className="flex flex-col h-screen items-center justify-around ">
          <p className="title text-7xl text-center flex items-center justify-center animate-typing">
            WELCOME WIZARD
          </p>
          <MagicButton />
        </div>
      </div>
    </section>
  );
}
