import React from "react";

const RestartQuiz = ({ dispatch }) => {
  return (
    <button
      onClick={() => dispatch({ type: "reset" })}
      className="bg-[#0000003a] cursor-pointer text-[17px] py-[10px] px-[25px] rounded-[25px]"
    >
      Restart Quiz
    </button>
  );
};

export default RestartQuiz;
