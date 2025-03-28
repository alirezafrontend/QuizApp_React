import React, { useEffect } from "react";

const Timer = ({ dispatch, remaining }) => {
  const min = Math.floor(remaining / 60);
  const second = Math.floor(remaining % 60);
  console.log(second);

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch({ type: "time" });
    }, 1000);

    return () => clearInterval(timer);
  }, [dispatch]);

  return (
    <div>
      {min < 10 && "0"}
      {min}:{second < 10 && "0"}
      {second}
    </div>
  );
};

export default Timer;
