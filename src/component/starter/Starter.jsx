import React from "react";
import styles from "./starter.module.css";

const Starter = ({ numQues, dispatch }) => {
  return (
    <div className={styles.starter}>
      <h2 className="text-[30px] md:text-[38px]">Welcome to The React Quiz!</h2>
      <h3 className="text-[20px] md:text-[24px]">{numQues} questions to test your React mastery</h3>
      <button onClick={() => dispatch({ type: "active" })}>Let's Start!</button>
    </div>
  );
};

export default Starter;
