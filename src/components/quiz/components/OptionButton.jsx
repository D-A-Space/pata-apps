import React, { useContext } from "react";
import { IoRadioButtonOffOutline } from "react-icons/io5";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { QuizzesContext } from "../../../context/QuizzesContext";

const OptionButton = ({ option }) => {
  const i = Math.random();
  const { selectedAnswer, setSelectedAnswer } = useContext(QuizzesContext);
  // useEffect(() => {
  //   console.log("selectedAnswer", selectedAnswer);
  // }, [selectedAnswer]);
  return (
    <div key={Math.random()}>
      <input
        type="radio"
        name="option"
        className="peer hidden"
        id={i}
        onChange={() => setSelectedAnswer(option)}
        checked={selectedAnswer?.option === option?.option}
        disabled={Boolean(selectedAnswer?.option)}
      />
      <label
        htmlFor={i}
        className={`text-outer text-lg p-2 border-2 border-dashed border-outer peer-checked:border-solid ${
          option?.correct
            ? "peer-checked:border-garden peer-checked:text-garden peer-checked:[&>span:nth-of-type(1)]:hidden peer-checked:[&>span:nth-of-type(2)]:block"
            : "peer-checked:border-candy peer-checked:text-candy peer-checked:[&>span:nth-of-type(1)]:hidden peer-checked:[&>span:nth-of-type(3)]:block"
        } ${
          option?.correct && Boolean(selectedAnswer?.option)
            ? "!border-garden !border-solid !text-garden [&>span:nth-of-type(1)]:hidden [&>span:nth-of-type(2)]:block"
            : ""
        } ${
          Boolean(selectedAnswer?.option) ? "cursor-default" : "cursor-pointer"
        } rounded-lg flex justify-between items-center`}
      >
        {option?.option}
        <span>
          <IoRadioButtonOffOutline size={25} />
        </span>
        <span className="hidden">
          <AiOutlineCheckCircle size={25} />
        </span>
        <span className="hidden">
          <AiOutlineCloseCircle size={25} />
        </span>
      </label>
    </div>
  );
};

export default OptionButton;
