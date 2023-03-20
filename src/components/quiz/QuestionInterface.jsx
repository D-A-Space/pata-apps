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
      <div className="row-span-2 grid grid-rows-4  gap-1  p-1">
        <OptionButton />
        <OptionButton />
        <OptionButton />
        <OptionButton />
      </div>
      <CustomButton classStyle={"bg-red-500"} />
    </div>
  );
};

export default QuestionInterface;