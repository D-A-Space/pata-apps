import React, { useState } from "react";

import QuestionInterface from "../components/quiz/QuestionInterface";
const Quizzes = () => {
  return (
    <>
      <div className="h-screen w-screen bg-primary p-5">
        <QuestionInterface />
      </div>
    </>
  );
};

export default Quizzes;
