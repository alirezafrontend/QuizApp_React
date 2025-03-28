import React from "react";
import styles from "./progress.module.css";

const Progress = ({ numQues, index, points, maxPoints }) => {
  return (
    <div className="w-full">
      <progress className={styles.progress} value={index + 1} max={numQues} />
      <div className="flex justify-between">
        <p>
          Question {index + 1} / {numQues}
        </p>
        <p>
          {points} / {maxPoints} points
        </p>
      </div>
    </div>
  );
};

export default Progress;
