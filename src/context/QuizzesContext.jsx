import { createContext, useState, useEffect } from "react";
import { getJSON } from "../helpers/qizzesHelper";
export const QuizzesContext = createContext();
export function QuizzesProvider({ children }) {
  const [game, setGame] = useState({
    questions: [],
    settings: {},
  });

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
    });
  }, [game]);
  useEffect(() => {
    console.log("gameState", gameState);
  }, [gameState]);

  return (
    <>
      <QuizzesContext.Provider value={{ gameState }}>
        {children}
      </QuizzesContext.Provider>
    </>
  );
}
