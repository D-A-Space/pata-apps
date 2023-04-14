import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Quizzes from "./pages/Quizzes";

const app = () => {
  return (
    <>
      <Routes>
        {/* write a not found page */}
        <Route
          path="*"
          element={
            <div className="h-screen w-full flex flex-col text-white bg-black items-center justify-center">
              <h1 className="text-4xl mb-5 font-bold">404 Not Found</h1>
              <Link className="text-blue-500 text-center" to={"/quizzes"}>
                quizzes
              </Link>
            </div>
          }
        />
        <Route path="/" element={<Quizzes />} />
      </Routes>
    </>
  );
};

export default app;
