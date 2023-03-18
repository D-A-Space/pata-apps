import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const Quizzes = () => {
  // write a counter app using useState

  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div className="h-screen w-screen bg-slate-500 p-5">
        <div className="flex flex-col justify-between h-full gap-8">
          <div className="flex w-full justify-center">
            <p className="text-white text-2xl">Question 5</p>
          </div>
          <div className="flex w-full relative justify-center gap-4">
            <AnimatePresence>
              <motion.p
                key={count}
                className=" text-2xl absolute"
                initial={{
                  opacity: 0,
                  translateX: -100,
                }}
                animate={{
                  opacity: 1,
                  transition: { duration: 1 },
                  translateX: 0,
                  color: count % 2 === 0 ? "blue" : "green",
                }}
                exit={{
                  opacity: 0,
                  translateX: 100,
                  transition: { duration: 1 },
                  color: "red",
                }}
              >
                {count}
              </motion.p>
            </AnimatePresence>
          </div>
          <div onClick={increment} className="p-3 bg-red-700">
            ++++
          </div>
        </div>
      </div>
    </>
  );
};

export default Quizzes;
