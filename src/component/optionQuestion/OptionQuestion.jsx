import React from "react";
import styles from "./optionQuestion.module.css";

const OptionQuestion = ({ children, dispatch, answer, index, question }) => {
  const hasAnswer = answer !== null;
  return (
    <button
      onClick={() => dispatch({ type: "answer", payload: index })}
      disabled={hasAnswer}
      className={`${
        styles.option_Question
      } w-full md:w-[600px] xl:w-[800px] text-[17px] bg-[#00000043] md:text-[18px] ml-0 ${
        !hasAnswer &&
        "hover:ml-[10px] hover:md:ml-[50px] hover:bg-[#0000006e] transition-all duration-300"
      } ${index === answer ? "ml-[50px]" : "ml-0"} ${
        hasAnswer && index === question.correctOption && "bg-green-500"
      }
      ${
        hasAnswer &&
        index === answer &&
        index !== question.correctOption &&
        "bg-red-600"
      }
       ${
         index !== answer &&
         index !== question.correctOption &&
         "bg-[#00000043]"
       } `}
    >
      {children}
    </button>
  );
};

export default OptionQuestion;
