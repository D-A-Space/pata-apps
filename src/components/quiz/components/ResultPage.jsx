import React, { useContext, useEffect, useState } from "react";
import { QuizzesContext } from "../../../context/QuizzesContext";

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
    <div className="w-full h-full flex items-center justify-center">
      <div className="">
        <p className="text-3xl text-white">
          {win == "won" ? "YAASS" : win === "lost" ? "NOOO" : "Tie"}
        </p>
        <p className="text-3xl text-white">
          {winCount} /{gameState?.history.length}
        </p>
      </div>
    </div>
  );
};

export default ResultPage;
