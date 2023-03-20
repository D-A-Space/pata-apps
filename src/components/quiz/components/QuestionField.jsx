import React, { useContext } from "react";
import { QuizzesContext } from "../../../context/QuizzesContext";

const QuestionField = () => {
  const { gameState } = useContext(QuizzesContext);
  return (
    <div className="row-span-2   h-full w-full text-3xl font-mono font-bold text-white">
      {gameState?.question_title}
    </div>
  );
};

export default QuestionField;
