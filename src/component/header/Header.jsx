import React from "react";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <img src="icon.png" alt="" />
      <h1 className="text-[20px] md:text-[24px]">THE REACT QUIZ</h1>
    </div>
  );
};

export default Header;
