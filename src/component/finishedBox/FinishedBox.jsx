import React from "react";
import RestartQuiz from "../restartQuiz/RestartQuiz";

const FinishedBox = ({ points, maxPoints, highScore, dispatch }) => {
  const percentageAnswer = (points / maxPoints) * 100;

  let emoji;

  if (percentageAnswer === 100) emoji = "🥇";
  if (percentageAnswer >= 80 && percentageAnswer < 100) emoji = "🎉";
  if (percentageAnswer >= 50 && percentageAnswer < 80) emoji = "🙃";
  if (percentageAnswer >= 0 && percentageAnswer < 50) emoji = "🤨";
  if (percentageAnswer === 0) emoji = "🤦‍♂️";

  return (
    <div className="flex flex-col items-center gap-[25px]">
      <div className="bg-[#0E5B8E] py-[15px] px-[20px] rounded-[25px] text-[16px] md:text-[18px]">
        <span className="mr-[5px] text-[18px] md:text-[20px]">{emoji}</span>
        You scored {points} out of {maxPoints} points (
        {Math.ceil(percentageAnswer)}%)
      </div>
      <p className="text-[17px]">(Highscore: {highScore} points)</p>
      <div className="flex justify-center">
        <RestartQuiz dispatch={dispatch} />
      </div>
    </div>
  );
};

export default FinishedBox;
