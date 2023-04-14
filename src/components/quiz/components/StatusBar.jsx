import React, { useContext } from "react";
import { QuizzesContext } from "../../../context/QuizzesContext";

const StatusBar = () => {
  const { gameState } = useContext(QuizzesContext);
  return (
    <div className="row-span-1 h-full font-mono w-full flex flex-col gap-3">
      <div className="">
        <p className="text-gray-600 text-xl">{gameState?.game_title}</p>
      </div>
      <div className="">
        <p className="text-gray-600  text-xl">
          <span className="font-bold font-sans text-2xl text-white ">
            Question{" "}
          </span>
          <span className=" text-3xl  text-white">
            {+gameState?.current_question + 1}
          </span>
          <span>/{gameState?.questions_num}</span>
        </p>
      </div>
      <div className="w-full flex gap-1">
        {gameState?.history?.map((q, i) => {
          if (i === gameState?.current_question) {
            return (
              <p key={i} className={`bg-blue3 w-full px-[2px] py-[2px]`}></p>
            );
          } else {
            if (q === true) {
              return (
                <p key={i} className={`bg-garden w-full px-[2px] py-[2px]`}></p>
              );
            } else if (q === false) {
              return (
                <p
                  key={i}
                  className={`bg-red-500 w-full px-[2px] py-[2px]`}
                ></p>
              );
            } else if (q === null) {
              return (
                <p
                  key={i}
                  className={`bg-gray-500 w-full px-[2px] py-[2px]`}
                ></p>
              );
            }
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default StatusBar;
