import { createContext, useState, useEffect } from "react";
import { getJSON } from "../helpers/qizzesHelper";
export const QuizzesContext = createContext();
export function QuizzesProvider({ children }) {
  const [game, setGame] = useState({
    questions: [],
    settings: {},
  });

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState({});

  const params = new URLSearchParams(window.location.search);
  useEffect(() => {
    if (params) {
      const theRes = getJSON();
      setGame({ ...theRes });
    }
  }, []);

  const [gameState, setGameState] = useState({});
  // SECTION prepare status bar for the game
  useEffect(() => {
    console.log("game", game);
    let gameCopy = { ...game };
    setGameState({
      question_title: game?.questions[0]?.question,
      game_title: game?.settings?.game_title,
      questions_num: game?.questions?.length,
      current_question: 0,
      history: gameCopy?.questions?.map((q) => {
        return null;
      }),
      options: game?.questions[0]?.options,
    });
  }, [game]);

  useEffect(() => {
    if (currentQuestion > 0) {
      setGameState({
        ...gameState,
        question_title: game?.questions[currentQuestion]?.question,
        current_question: currentQuestion,
        options: game?.questions[currentQuestion]?.options,
      });
    }
  }, [currentQuestion]);

  useEffect(() => {
    console.log("gameState", gameState);
  }, [gameState]);

  const handleNext = () => {
    if (selectedAnswer?.option) {
      let gameStateCopy = { ...gameState };
      gameStateCopy.history[currentQuestion] = selectedAnswer?.correct;
      setGameState({
        ...gameState,
        history: [...gameStateCopy?.history],
      });
      if (gameState?.questions_num - 1 > currentQuestion) {
        setCurrentQuestion((prev) => prev + 1);
      }
      setSelectedAnswer({});
    }
  };

  return (
    <>
      <QuizzesContext.Provider
        value={{ gameState, handleNext, selectedAnswer, setSelectedAnswer }}
      >
        {children}
      </QuizzesContext.Provider>
    </>
  );
}
