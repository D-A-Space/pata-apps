import React, { useContext, useState } from "react";
import { QuizzesContext } from "../../context/QuizzesContext";
import CustomButton from "../global/CustomButton";
import OptionButton from "./components/OptionButton";
import QuestionField from "./components/QuestionField";
import StatusBar from "./components/StatusBar";

const QuestionInterface = () => {
  const { handleNext, gameState, selectedAnswer } = useContext(QuizzesContext);

  return (
    <div className="h-full w-full grid grid-rows-6 gap-1">
      <StatusBar />
      <QuestionField />
      <div className="row-span-2 grid grid-rows-4 gap-5 p-3 px-1">
        {gameState?.options?.map((option, i) => (
          <OptionButton key={i} option={option} />
        ))}
      </div>
      <div className="w-full flex justify-end items-center">
        <div className="w-2/6 h-2/6">
          <CustomButton
            text={"Next"}
            onclick={handleNext}
            disabled={!Boolean(selectedAnswer?.option)}
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionInterface;
