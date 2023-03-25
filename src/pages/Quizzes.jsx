import React, { useContext, useState } from "react";
import ResultPage from "../components/quiz/components/ResultPage";

import QuestionInterface from "../components/quiz/QuestionInterface";
import { QuizzesContext } from "../context/QuizzesContext";
const Quizzes = () => {
  const { resultView } = useContext(QuizzesContext);
  return (
    <>
      <div className="h-screen w-screen bg-primary p-5">
        {resultView ? <ResultPage /> : <QuestionInterface />}
      </div>
    </>
  );
};

export default Quizzes;
