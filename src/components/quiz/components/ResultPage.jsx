import React, { useContext, useEffect, useState } from "react";
import { QuizzesContext } from "../../../context/QuizzesContext";
import CustomButton from "../../global/CustomButton";

const ResultPage = () => {
  const [win, setWin] = useState("won");
  const [winCount, setWinCount] = useState(0);
  const { gameState } = useContext(QuizzesContext);
  useEffect(() => {
    let win = 0;
    let lose = 0;
    gameState?.history?.forEach((h) => {
      if (h === true) {
        win++;
      } else if (h === false) {
        lose++;
      }
    });
    if (win > lose) {
      setWin("won");
    } else if (win < lose) {
      setWin("lost");
    } else if (win === lose) {
      setWin("tie");
    }
    setWinCount(win);
  }, [gameState]);
  return (
    <div
      style={{ background: "linear-gradient(#0007, #0000), #123" }}
      className="w-full h-full  flex items-center justify-center"
    >
      <div className="h-full w-full fixed inset-0 scale-150 ">
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
      </div>
      <div className="h-full flex flex-col justify-evenly ">
        <div className="">
          <h1 className="neon px-3 ">
            {" "}
            {win === "won" || win === "tie"
              ? "You Won"
              : "You Lost"
              }
          </h1>
        </div>
        <div className="w-full flex items-center justify-evenly mt-5 px-3">
          <p className="text-[100px] text-green-500 ">{winCount}</p>
          <p className="text-[50px] text-white ">X</p>
          <p className="text-[100px] text-red-500">
            {gameState?.history.length - winCount}
          </p>
        </div>
        <div className=""></div>
        <div className="h-20">
          <CustomButton
            text={"Play again"}
            onclick={() => {
              window.location.reload();
            }}
          />
        </div>
      </div>
    </div>
  );
};
// CustomButton;
export default ResultPage;
