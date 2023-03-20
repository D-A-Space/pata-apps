import React from "react";
import CustomButton from "../global/CustomButton";
import OptionButton from "./components/OptionButton";
import QuestionField from "./components/QuestionField";
import StatusBar from "./components/StatusBar";

const QuestionInterface = () => {
  return (
    <div className="h-full w-full grid grid-rows-6 gap-1">
      <StatusBar />
      <QuestionField />
      <div className="row-span-2 grid grid-rows-4 gap-3 p-3 px-5">
        <OptionButton />
        <OptionButton />
        <OptionButton />
        <OptionButton />
      </div>
      <div className="w-full flex justify-end items-center">
        <div className="w-1/4 h-1/2">
          <CustomButton text={"Next"} />
        </div>
      </div>
    </div>
  );
};

export default QuestionInterface;
