import React from "react";
import styles from "./questionsBox.module.css";
import OptionQuestion from "../optionQuestion/OptionQuestion";
import NextQues from "../nextQues/NextQues";
import Progress from "../progress/Progress";
import Timer from "../timer/Timer";

const QuestionsBox = ({
  question,
  dispatch,
  answer,
  points,
  numQues,
  index,
  maxPoints,
  remaining
}) => {
  return (
    <div className={`${styles.Question_box} w-full`}>
      <div className="w-full md:w-[600px] xl:w-[800px]">
        <Progress
          index={index}
          numQues={numQues}
          points={points}
          maxPoints={maxPoints}
        />
      </div>
      <div className="w-full md:w-[600px] xl:w-[800px]">
        <h2 className="text-[19px] md:text-[25px] xl:text-[32px]">
          {question.question}
        </h2>
      </div>
      <div className="w-full flex flex-col items-center gap-[10px]">
        {question.options.map((option, index) => {
          return (
            <OptionQuestion
              key={option}
              dispatch={dispatch}
              answer={answer}
              index={index}
              question={question}
            >
              {option}
            </OptionQuestion>
          );
        })}
        <div className="w-full md:w-[600px] xl:w-[800px] mt-[10px] flex justify-between items-center px-[20px]">
          <div>
            <Timer dispatch={dispatch} remaining={remaining} />
          </div>
          <div>
            <NextQues
              dispatch={dispatch}
              answer={answer}
              index={index}
              numQues={numQues}
            >
              {index < numQues - 1 ? "Next" : "Finish"}
            </NextQues>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionsBox;
