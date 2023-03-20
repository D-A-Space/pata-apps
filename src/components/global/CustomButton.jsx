import React, { useEffect, useState } from "react";

const CustomButton = ({ classStyle }) => {
  const [styleDefault, setStyleDefault] = useState(
    "row-span-1 h-full w-full bg-gradient-to-r from-blue3 to-foshi"
  );
  useEffect(() => {
    if (Boolean(classStyle)) {
      setStyleDefault(classStyle + " " + styleDefault);
    }
  }, [classStyle]);
  return <div className={styleDefault}>CustomButton</div>;
};

export default CustomButton;
