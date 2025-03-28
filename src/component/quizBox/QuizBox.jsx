import React, { useEffect, useReducer } from "react";
import Styles from "./quizBox.module.css";
import Loading from "../loading/Loading";
import Error from "../error/Error";
import Starter from "../starter/Starter";
import QuestionsBox from "../questionBox/QuestionsBox";
import FinishedBox from "../finishedBox/FinishedBox";

const timeQuestion = 20;

const initialState = {
  questions: [],
  status: null,
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
  remaining: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "error":
      return { ...state, status: "error" };
    case "loading":
      return { ...state, status: "loading" };
    case "ready":
      return { ...state, status: "ready", questions: action.payload };
    case "active":
      return {
        ...state,
        status: "active",
        remaining: state.questions.length * timeQuestion,
      };
    case "time":
      return {
        ...state,
        remaining: state.remaining - 1,
        status: state.remaining === 0 ? "finished" : state.status,
      };
    case "answer": {
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    }
    case "nextQues":
      return { ...state, index: state.index + 1, answer: null };
    case "finished":
      return {
        ...state,
        index: state.index + 1,
        status: "finished",
        highScore:
          state.points > state.highScore ? state.points : state.highScore,
      };
    case "reset":
      return {
        ...initialState,
        questions: state.questions,
        status: "ready",
        highScore: state.highScore,
      };
    default:
      console.log("error");
      return state;
  }
}

const QuizBox = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { questions, status, index, answer, points, highScore, remaining } =
    state;

  const maxPoints = questions.reduce((prev, current) => {
    return prev + current.points;
  }, 0);

  useEffect(() => {
    async function getQuiz() {
      dispatch({ type: "loading" });
      try {
        const res = await fetch("https://67e684dc6530dbd311104f02.mockapi.io/Quiz/Questions");
        if (!res.ok) {
          throw new Error("fail to get data");
        }
        const data = await res.json();
        dispatch({ type: "ready", payload: data });
      } catch (error) {
        console.error("Fetch error:", error);
        dispatch({ type: "error" });
      }
    }

    getQuiz();
  }, []);

  return (
    <div className={`${Styles.quiz_box} w-[80%] md:w-[80%] mx-auto`}>
      {status === "error" && <Error />}
      {status === "loading" && <Loading />}
      {status === "ready" && (
        <Starter numQues={questions.length} dispatch={dispatch} />
      )}
      {status === "active" && (
        <QuestionsBox
          question={questions[index]}
          index={index}
          dispatch={dispatch}
          answer={answer}
          points={points}
          numQues={questions.length}
          maxPoints={maxPoints}
          remaining={remaining}
        />
      )}
      {status === "finished" && (
        <FinishedBox
          points={points}
          maxPoints={maxPoints}
          highScore={highScore}
          numQues={questions.length}
          index={index}
          dispatch={dispatch}
        />
      )}
    </div>
  );
};

export default QuizBox;
