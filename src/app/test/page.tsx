import "./test.css";

const page = () => {
  return (
    <div className="bg-gray-500 h-screen flex gap-4 ">
      <div>aze</div>
      <button className="test-btn2 h-16 w-32">helooo</button>

      <button className="test-btn3 h-16 w-32  hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] ">
        qsda
      </button>
      <button className="size-fit px-6 py-2 font-medium bg-indigo-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
        Hover me
      </button>
    </div>
  );
};

export default page;
