import { createContext, useState } from "react";
export const QuizzesContext = createContext();
export function QuizzesProvider({ children }) {
  const [quizzes, setQuizzes] = useState([]);
  return (
    <>
      <QuizzesContext.Provider value={{ quizzes, setQuizzes }}>
        {children}
      </QuizzesContext.Provider>
    </>
  );
}
