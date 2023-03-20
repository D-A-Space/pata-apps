import React from "react";

const StatusBar = () => {
  return (
    <div className="row-span-1 h-full font-mono w-full flex flex-col gap-3">
      <div className="">
        <p className="text-gray-600 text-xl">Dallas Cowboys Quiz</p>
      </div>
      <div className="">
        <p className="text-gray-600  text-xl">
          <span className="font-bold font-sans text-2xl text-white ">
            Question{" "}
          </span>
          <span className=" text-3xl  text-white">{"03"}</span>
          <span>/{"09"}</span>
        </p>
      </div>
      <div className="w-full flex gap-1">
        <p className={`bg-gray-500 w-full px-[2px] py-[2px]`}></p>
        <p className={`bg-red-500 w-full px-[2px] py-[2px]`}></p>
        <p className={`bg-garden w-full px-[2px] py-[2px]`}></p>
        <p className={`bg-blue3 w-full px-[2px] py-[2px]`}></p>
      </div>
    </div>
  );
};

export default StatusBar;
