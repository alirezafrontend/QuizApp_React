import React from "react";
import styles from "./main.module.css";
import Header from "../header/Header";
import QuizBox from "../quizBox/QuizBox";
import FooterMe from "../footerMe/FooterMe";

const Main = () => {
  return (
    <div className={styles.main}>
      <Header />
      <QuizBox />
      <div className="hidden xl:flex absolute bottom-[20px] right-[20px]">
        <FooterMe />
      </div>
    </div>
  );
};

export default Main;
