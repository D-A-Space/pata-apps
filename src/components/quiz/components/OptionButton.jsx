import React from "react";
import { IoRadioButtonOffOutline } from "react-icons/io5";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

const OptionButton = () => {
  const i = Math.random();
  return (
    <div key={Math.random()}>
      <input
        onChange={(e) => console.log(e)}
        type="radio"
        name="option"
        className="peer hidden"
        id={i}
      />
      <label
        htmlFor={i}
        className={`text-outer text-lg p-2 border-2 border-dashed border-outer peer-checked:border-solid peer-checked:border-candy peer-checked:text-candy peer-checked:[&>span:nth-of-type(1)]:hidden peer-checked:[&>span:nth-of-type(3)]:block  rounded-lg flex justify-between items-center`}
        // className={`text-outer p-2 border-2 border-dashed border-outer peer-checked:border-solid  peer-checked:border-garden peer-checked:text-garden peer-checked:[&>span:nth-of-type(1)]:hidden peer-checked:[&>span:nth-of-type(2)]:block rounded-lg flex justify-between items-center`}
      >
        Option asdasdasd ewfewrv fvw
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
