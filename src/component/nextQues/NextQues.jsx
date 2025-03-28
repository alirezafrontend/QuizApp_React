import { ClassNames } from "@emotion/react";
import React from "react";

const NextQues = ({ dispatch, answer, children, index, numQues }) => {
  if (answer === null) return null;

  const handleDispatch = () => {
    index < numQues - 1 && dispatch({ type: "nextQues" });
    index === numQues - 1 && dispatch({ type: "finished" });
  };

  console.log("index:", index);
  console.log("numQues:", numQues);

  return (
    <button
      onClick={handleDispatch}
      className="bg-[#0000003a] cursor-pointer text-[17px] py-[10px] px-[25px] rounded-[25px]"
    >
      {children}
    </button>
  );
};

export default NextQues;
